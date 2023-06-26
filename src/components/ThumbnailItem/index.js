import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, onChangeImage, isActive} = props
  const {imageUrl, imageAltText, thumbnailUrl, thumbnailAlt} = imageDetails
  const activeImage = isActive ? 'active-image' : ''
  const updateImage = () => {
    onChangeImage(imageUrl, imageAltText)
  }

  return (
    <div>
      <li>
        <button className="img-btn" type="button">
          <img
            src={thumbnailUrl}
            alt={thumbnailAlt}
            onClick={updateImage}
            className={`thumbnail-image ${activeImage}`}
          />
        </button>
      </li>
    </div>
  )
}
export default ThumbnailItem
