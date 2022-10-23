import axios from "axios";
import React from "react";
import GalleryList from "../GalleryList/GalleryList";
import { useState } from 'react';



function GalleryItem ({gallery, path, setCurrentPic}){
    const [loveCount, setLoveCount] = useState(0)

    const loveBtn = (evt) => {
        evt.preventDefault();
        console.log('in the loveBtn function')
        console.log('the count is', loveCount);
        setLoveCount(loveCount + 1)
    }

    const imgClick = () => {
        setCurrentPic(gallery)
    }



    let defaultMessage = (<p>No one has loved this yet :( </p>)

    if (loveCount > 0){
        defaultMessage = (<div>{loveCount} people loved this!</div>)  
    }

    return (
        <>
            <h3>here is a gallery item</h3>
            <img src={path} onClick = {imgClick}/><br></br>
            {defaultMessage}
            <button onClick = {loveBtn}>Love it!</button> 
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