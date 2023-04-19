// Write your code here
const EventItem = props => {
  const {eventListItem, eventClicked} = props
  const {name, imageUrl, location, id} = eventListItem

  const onClickEvent = () => {
    eventClicked(id)
  }

  return (
    <li>
      <button type="button" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" />
      </button>
      <div>
        <p>{name}</p>
        <p>{location}</p>
      </div>
    </li>
  )
}

export default EventItem
