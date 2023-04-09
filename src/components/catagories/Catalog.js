
import React, { useState } from 'react'
import "./Catalogstyle.css"
import Menu from "../catagories/CategoriesList"
import Slide from 'react-reveal/Slide';
import { FaDownload } from "react-icons/fa"

const Catalog = () => {
  const [item, setstate] = useState(Menu);
  
  const filterItem = (catItem) =>{
    const updateItem = Menu.filter((curentItem) =>{
      return curentItem.category === catItem;
    });

    setstate(updateItem);
  }

  return (
    
    <div className='cataloges'>
      <div>
        <h1 className='cat-header'>Categories</h1>
        
        <div className='catog'>
          <Slide top>
            <button onClick={()=> setstate(Menu)} active>all</button>
            <button onClick={() => filterItem('adventure')}>adventure</button>
            <button onClick={() => filterItem('classic')}>classics</button>
            <button onClick={() => filterItem('crime')}>crime</button>
            <button onClick={() => filterItem('fairy')}>fairy tales</button>
            <button onClick={() => filterItem('fantasy')}>fantasy</button>
            <button onClick={() => filterItem('novel')}>novel</button>
            <button onClick={() => filterItem('horror')}>horror</button>
            <button onClick={() => filterItem('mystery')}>mystery</button>
            <button onClick={() => filterItem('romance')}>romance</button>
            <button onClick={() => filterItem('play')}>plays</button>
            <button onClick={() => filterItem('sifi')}>science fiction</button>
            <button onClick={() => filterItem('bed')}>bed-time stories</button>
            <button onClick={() => filterItem('thriller')}>thrillers</button>
            <button onClick={() => filterItem('auto')}>Autobiography</button>
            <button onClick={() => filterItem('kids')}>kids</button>
          </Slide>
        </div>

        <div className='cards'>
          {
            item.map((elem) => {
              const { image, name, author, files } = elem;
              return(
                <div className='container'>
                  <div className='card-body'>
                    <img className='card-img' src={image} alt=''></img>
                    <div className='details'>
                    <h2>{name}</h2>
                    <h3>{author}</h3>
                    <p> Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.The passage is attributed to an unknown typesetter in the 15 th century who is thought to have“ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.” </p>
                  </div>
                  </div>
                  <a href={files} download={name}><button className='btn1'><FaDownload id='icon'/>Download</button></a>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}


export default Catalog