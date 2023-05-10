import React from 'react';
import LovePoem from "../src/img/LovePoem.jpg"
import Lilac from "../src/img/Lilac.jpg"
import Palette from "../src/img/Palette.jpg"

function Albums() {
  return (
    <div className='m-5'>

      <h2>Albums</h2>
      <div className="album">
        <img src={LovePoem} alt="Album 1" />
        <h2>Love poem</h2>
        <p>The 5th Mini Album</p>
      </div>

      <div className="album">
        <img src={Lilac} alt="Album 2" />
        <h2>LILAC</h2>
        <p>The 5th Album</p>
      </div>

      <div className="album">
        <img src={Palette} alt="Album 3" />
        <h2>Palette</h2>
        <p>The 4th Album</p>
      </div>

    </div>
  );
}

export default Albums;
