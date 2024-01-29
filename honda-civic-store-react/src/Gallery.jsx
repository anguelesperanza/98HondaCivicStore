function Gallery({images = []}) {
return (
  <>
    {images.map((image, index) => (
      <li key={index}>{image.imageURL}</li>
    ))}
  </>
);
}
export default Gallery;
