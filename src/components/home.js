import '../App.css';
import Card from './card';
import Header from './header';
import React, { useState, useEffect } from 'react';

function Home() {
  const [champions, setChampions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    var url = "https://ddragon.leagueoflegends.com/cdn/13.19.1/data/en_US/champion.json";
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const championsArray = Object.values(data.data);
        setChampions(championsArray);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <Header/>
      <div className="display">
        {isLoading ? (
          <p>Loading...</p>
        ):(
          champions.map(champion => (
            <Card name={champion.name} cid={champion.id} title={champion.title} img={champion.image.full}/>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
