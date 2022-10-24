import axios from 'axios';
import GalleryItem from '../GalleryItem/GalleryItems';

// function takes in gallerylist, set current pic function, and get gallery items function 
function GalleryList({galleryList, setCurrentPic, getGalleryItems}){
    return (
        <>
        {/* loop through every item in gallery list and send those props over */}
                <div className = "imageContainer">
                {galleryList.map(gallery => (
                <GalleryItem 
                key = {gallery.id}
                path = {gallery.path} 
                description = {gallery.description}
                gallery = {gallery}
                setCurrentPic = {setCurrentPic}
                getGalleryItems = {getGalleryItems}
                />
                ))}     
            </div> 
        </>

    )

}






export default GalleryList;



