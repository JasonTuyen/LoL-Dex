import React from "react";
import { Link } from 'react-router-dom';

function Card({cid, name, title, img}){

  return(
    <>
      <Link to={`/champion/${cid}`}>
      <div style={{border:'1px solid #00c8c8', height:'240px', width:'120px'}}>
        <img src={`https://ddragon.leagueoflegends.com/cdn/13.19.1/img/champion/${img}`} alt={name}/>
          <div style={{margin: '0.3rem'}}>
            <h2 style={{fontSize: '0.8rem'}}>{name}</h2>
            <p>{title}</p>
          </div>
      </div>
      </Link>
    </>
  );
}

export default Card;