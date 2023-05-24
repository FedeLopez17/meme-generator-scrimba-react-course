import React from "react";
import "./Meme.css";

export default function Meme() {
  const [memesArray, setMemesArray] = React.useState([]);

  const [memeData, setMemeData] = React.useState({
    topText: "",
    bottomText: "",
    name: "",
    url: "",
  });

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((json) => setMemesArray(json.data.memes))
      .catch((err) => console.error("Error fetching meme data: ", err));
  }, []);

  React.useEffect(() => {
    if (memesArray.length) getRandomMeme();
  }, [memesArray]);

  function getRandomMeme(event) {
    if (event) event.preventDefault();

    setMemeData((prevMemeData) => {
      let randomMeme;
      do {
        const randomIndex = Math.floor(Math.random() * memesArray.length);
        randomMeme = memesArray[randomIndex];
      } while (prevMemeData.url === randomMeme.url);
      return {
        ...prevMemeData,
        name: randomMeme.name,
        url: randomMeme.url,
      };
    });
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setMemeData((prevMemeData) => ({
      ...prevMemeData,
      [name]: value,
    }));
  }

  return (
    <main className="meme-screen">
      <form>
        <input
          type="text"
          id="top-text"
          placeholder="Top text"
          name="topText"
          value={memeData.topText}
          onChange={handleInputChange}
        />
        <input
          type="text"
          id="bottom-text"
          placeholder="Bottom text"
          name="bottomText"
          value={memeData.bottomText}
          onChange={handleInputChange}
        />
        <button onClick={getRandomMeme}>Get a new template</button>
      </form>
      <section className="meme">
        <img src={memeData.url} alt={memeData.name} />
        <h2 className="meme-text top">{memeData.topText}</h2>
        <h2 className="meme-text bottom">{memeData.bottomText}</h2>
      </section>
    </main>
  );
}
