import axios from "axios";
import React from "react";
import GalleryList from "../GalleryList/GalleryList";
import { useState } from 'react';




function GalleryItem ({gallery, path, setCurrentPic, description, getGalleryItems}){
    console.log('gallery is', gallery)
    const [loveCount, setLoveCount] = useState(0)


    // const loveBtn = (evt) => {
    //     evt.preventDefault();
    //     axios.put(`/gallery/like/${gallery.id}`)
    //         .then((response) => {
    //             console.log('response is', response)
    //             setLoveCount(gallery.likes +1)
    //             getGalleryItems();     
                
    //         })
    //         .catch((error) => {
    //             console.log('error loving button', error)
    //         })
    //     console.log('in the loveBtn function')
    //     console.log('the count is', loveCount);
    // }



    const loveBtn = (evt) => {
        evt.preventDefault();
        
        console.log('in the loveBtn function')
        console.log('the count is', loveCount);
        setLoveCount(loveCount + 1)
    }

    const imgClick = () => {
        setCurrentPic(gallery)

    }


    // message 
    let defaultMessage = (<p>No one has loved this yet :( </p>)

    if (loveCount === 1){
        defaultMessage = (<div>{loveCount} person loved this!</div>)
    }

    else if (loveCount > 1){
        defaultMessage = (<div>{loveCount} people loved this!</div>)  
    }

    return (
        <>
            <div></div>
            <img src={path} onClick = {imgClick}/><br></br>
            {defaultMessage}
            {/* {description}<br></br> */}
            <button onClick = {loveBtn} class="button-62" role="button">💕 Love it! 💕</button>
        </>
    )
    
}





export default GalleryItem;


    // const loveBtn = (evt) => {
        // const [loveCount, setLoveCount] = useState(0)
    //     console.log('in the loveBtn function, love count is');
    //     console.log('gallery list is', galleryList)
    //     axios.put(`/like/${evt.target.id}`)
    //         .then((response) => {

    //         })