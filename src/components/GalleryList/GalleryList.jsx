import axios from 'axios';
import GalleryItem from '../GalleryItem/GalleryItems';

function GalleryList({galleryList, setCurrentPic}){
    return (
        <>
                <div className = "imageContainer">
                {galleryList.map(gallery => (
                <GalleryItem 
                key = {gallery.id}
                path = {gallery.path} 
                description = {gallery.description}
                gallery = {gallery}
                setCurrentPic = {setCurrentPic}
                />
                ))}     
            </div> 
        </>

    )

}






export default GalleryList;



