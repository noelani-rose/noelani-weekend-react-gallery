
import { useState, useEffect } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';

function App() {
  const [galleryList, setGalleryList] = useState([]);
  const [currentPic, setCurrentPic] = useState()

  useEffect(() => {
    getGalleryItems();
  }, [])


  // function to get the gallery items from data.js
    const getGalleryItems = () => {
      console.log('Getting galeryItems')
      axios({
        method: 'GET',
        url: '/gallery'
      })
      .then(response => {
        console.log('the response is', response)
        // only set gallery list to the data property of response 
        setGalleryList(response.data)
      })
      .catch(error => {
        console.log('GETting galleryList failed', error);
      })
    };

    const onLike = (id) => {
      console.log('onLike function', id);
      axios({
        method: 'PUT',
        url: `/gallery/like/${id}`
      })
      .then(response => {
        console.log('response is,', response)
        getGalleryItems();
      })
      .catch(error => {
        console.log('error liking pic', error);

      })
    }


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <div className = "description">

          {/* if current pic then render currentpic description */}
            {/* {currentPic && (<h3>{currentPic.description}</h3>)} */}
        </div>
        <GalleryList 
        galleryList = {galleryList} 
        setCurrentPic = {setCurrentPic}
        onLike = {onLike}/>
      </div>
    );
}


export default App;

