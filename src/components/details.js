import '../App.css';
import Header from './header';
import Footer from './footer';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Details() {
  const [isLoading, setIsLoading] = useState(true);
  const {name} = useParams();
  const [championData, setChampionData] = useState([]);
  useEffect(() => {
    var url = "https://ddragon.leagueoflegends.com/cdn/13.19.1/data/en_US/champion/" + name + ".json";
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const detailArray = Object.values(data.data);
        setChampionData(detailArray);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
    <Header/>
    <div className='detail'>
      {isLoading ? (
          <p>Loading...</p>
        ):(
          championData.map((champion) => (
            <div key={champion.id}>
              <div className='detail-bio'>
                <img src={`https://ddragon.leagueoflegends.com/cdn/13.19.1/img/champion/${champion.image.full}`} alt={name}/>
                <h2>{champion.name}</h2>
                <p>{champion.title}</p>
              </div>
              <div className='detail-lore'>
                <p>{champion.lore}</p>
              </div>
              <div className='detail-spells'>
                <div className='detail-spells-inner'>
                  <p>Passive</p>
                  <img src={`https://ddragon.leagueoflegends.com/cdn/13.19.1/img/passive/${champion.passive.image.full}`} alt="passive"/>
                </div>
                <div className='detail-spells-inner'>
                  <p>Q</p>
                  <img src={`http://ddragon.leagueoflegends.com/cdn/13.19.1/img/spell/${champion.spells[0].image.full}`} alt="Q"/>
                </div>
                <div className='detail-spells-inner'>
                  <p>W</p>
                  <img src={`http://ddragon.leagueoflegends.com/cdn/13.19.1/img/spell/${champion.spells[1].image.full}`} alt="W"/>
                </div>
                <div className='detail-spells-inner'>
                  <p>E</p>
                  <img src={`http://ddragon.leagueoflegends.com/cdn/13.19.1/img/spell/${champion.spells[2].image.full}`} alt="E"/>
                </div>
                <div className='detail-spells-inner'>
                  <p>R</p>
                  <img src={`http://ddragon.leagueoflegends.com/cdn/13.19.1/img/spell/${champion.spells[3].image.full}`} alt="R"/>
                </div>
              </div>
            </div>
          ))
        )}
    </div>
    <Footer/>
    </>
  );
}

export default Details;