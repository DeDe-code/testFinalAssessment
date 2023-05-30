import React, { useEffect, useState } from "react";
import LoadingMask from "./components/LoadingMask";
import Character from "./components/Character";
import Subscription from "./components/Subscription";

const url = "https://demoapi.com/api/series/howimetyourmother";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [loadSubscription, setLoadSubscription] = useState(false);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const resp = await fetch(url);
        console.log(resp);
        const data = await resp.json();
        setCharacters(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCharacter();

    setTimeout(() => {
      setLoadSubscription(!loadSubscription);
    }, 10000);
  }, []);

  console.log(characters);
  console.log(loadSubscription);
  return (
    <section className="wrapper">
      <h1 className="title">Series Api</h1>
      {characters.length === 0 && <LoadingMask />}
      {characters.length !== 0 &&
        characters.map((character, index) => {
          return <Character key={index} character={character} />;
        })}
      {loadSubscription && <Subscription />}
    </section>
  );
};

export default App;
