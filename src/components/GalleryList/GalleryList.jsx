import axios from 'axios';
import GalleryItem from '../GalleryItem/GalleryItems';

function GalleryList({galleryList, setCurrentPic}){
    return (
        <>
            <p>Gallery goes here</p>
            {galleryList.map(gallery => (
            <GalleryItem 
            key = {gallery.id}
            path = {gallery.path} 
            gallery = {gallery}
            setCurrentPic = {setCurrentPic}
            />
            ))}      
        </>

    )

}






export default GalleryList;



