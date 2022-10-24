import GalleryItem from '../GalleryItem/GalleryItems';

// function takes in gallerylist, set current pic function, and get gallery items function 
function GalleryList({galleryList, onLike}){
    return (
        <>
        {/* loop through every item in gallery list and send those props over */}
                <div className = "imageContainer">
                    <ul>
                        {galleryList.map(galleryItem => (
                        <GalleryItem 
                        galleryItem = {galleryItem}
                        key = {galleryItem.id}
                        onLike = {onLike}
                        />
                        ))} 
                </ul>    
            </div> 
        </>

    )

}


export default GalleryList;


{/* <ul>
    {galleryList.map((galleryItem) => (
        <li>
            {galleryItem.description}
        </li>
    ))}
</ul> */}


