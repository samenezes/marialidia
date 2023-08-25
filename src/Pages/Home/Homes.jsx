import React, { useState } from 'react';
import styles from '../Home/Homes.module.css'; // Certifique-se de que o caminho para o arquivo CSS está correto

function Home() {
  const [memeUrl, setMemeUrl] = useState('');
  const [caption, setCaption] = useState('');

  function fetchMeme() {
    fetch('https://opentdb.com/api.php?amount=30&category=')
      .then((response) => response.json())
      .then((data) => {
        const randomMeme = data.data.memes[Math.floor(Math.random() * 100)];
        setMemeUrl(randomMeme.url);
      });
  }

  function fetchCaption() {
    fetch('https://opentdb.com/api.php?amount=30&category=')
      .then((response) => response.json())
      .then((data) => {
        setCaption(data.content);
      });
  }

  function handleButtonClick() {
    fetchMeme();
    fetchCaption();
  }

  return (
    <>
      <section>
        <h1>categoria e a resposta correta!</h1>
        <div>
          <button className={styles.botao} onClick={handleButtonClick}>
            CLICK HERE!
          </button>
        </div>
        <div>
          <figure>
            <figcaption className={styles.legenda}>{caption}</figcaption>
            <img className={styles.img} src={memeUrl} alt="Imagem de Home" />
          </figure>
        </div>
      </section>
    </>
  );
}

export default Home;
