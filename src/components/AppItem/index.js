import './index.css'

const AppItem = props => {
  const {appDetails, checkingThumbnail} = props
  const {id, thumbnailUrl} = appDetails

  const checkMatch = () => {
    checkingThumbnail(id)
  }

  return (
    <li className="list-item1">
      <button className="thumbnail-btn" type="button" onClick={checkMatch}>
        <img src={thumbnailUrl} alt="thumbnail" className="image" />
      </button>
    </li>
  )
}
export default AppItem
