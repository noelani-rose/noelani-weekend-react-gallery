import React from "react";
import { useState } from 'react';


function GalleryItem ({galleryItem, onLike}){
    console.log('gallery is', galleryItem)
    // const [loveCount, setLoveCount] = useState(0)
    const [showImg, setShowImg] = useState(true);

    // message to display when no button has been clicked 
    let defaultMessage = (<p>No one has loved this yet :( </p>)

    // if lovecount is 1, then display this 
    if (galleryItem.likes === 1){
        defaultMessage = (<p>{galleryItem.likes} person loved this!</p>)
    }
    // if lovecount is over 1, display this
    else if (galleryItem.likes > 1){
        defaultMessage = (<p>{galleryItem.likes} people loved this!</p>)  
    }

    return (
        <>
        {/* img has an onclick, so when it's clicked, imgClick function is ran */}
            <li>
                <div className = "imageContentAll">
                    <div onClick = {() => setShowImg(!showImg)}>

                    {
                        showImg ?
                        <img 
                            src = {galleryItem.path}
                            alt = {galleryItem.description}/>
                            :
                            <div>
                                {galleryItem.description}
                            </div>
                    }
                    </div>
                
                    <div>
                      <button onClick = {() => onLike(galleryItem.id)} className="button-62" role="button">
                        Love it! 💕
                      </button>
                    
                        {defaultMessage}
                    </div>     
                </div>           
            </li>
        </>
    )
    
}

export default GalleryItem;




