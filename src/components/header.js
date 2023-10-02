import React from "react";
import { Link } from 'react-router-dom';

function Header(){

  return(
    <Link to={`/`}>
    <header>
        <h1>LoL-Dex</h1>
        <h2>An index of League of Legends champions</h2>
    </header>
    </Link>
  );
}

export default Header;