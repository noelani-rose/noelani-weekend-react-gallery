
import { useState, useEffect } from 'react';
import './App.css';
import GalleryItem from '../GalleryItem/GalleryItems';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';

function App() {
  const [galleryList, setGalleryList] = useState([]);
  const [currentPic, setCurrentPic] = useState()

  console.log('current pic is', currentPic)


  useEffect(() => {
    getGalleryItems();
  }, [])


    const getGalleryItems = () => {
      console.log('Getting galeryItems')
      axios({
        method: 'GET',
        url: '/gallery'
      })
      .then(response => {
        console.log('the response is', response)

        setGalleryList(response.data)
        console.log('gallery list is', galleryList)
      })
      .catch(error => {
        console.log('GETting galleryList failed', error);
      })
    }


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <div className = "description">
            {currentPic && (<h3>{currentPic.description}</h3>)}
        </div>
        <GalleryList galleryList = {galleryList} setCurrentPic = {setCurrentPic}/>
      </div>
    );
}


export default App;
