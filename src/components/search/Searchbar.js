import React from 'react'
import { useState } from 'react'
import Menu from '../catagories/CategoriesList';
import "../catagories/Catalogstyle.css"
import { FaDownload } from "react-icons/fa"

function Searchbar() {
    const [filter, setfilter] = useState('');

    const search = (event) =>{
        setfilter(event.target.value);
    }
    let data = Menu.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        )
    });
  return (
    <div>
      <div className='search'>
      <div className='searchbar'>
            <input 
                type='text'
                placeholder='Enter Your Book Name...'
                value={filter}
                onChange={search.bind(this)}
            />
        </div>
      </div>


        <div className='cards'>
            {
            data.map((elem) => {
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
            })}
        </div>
    </div>
  )
}

export default Searchbar