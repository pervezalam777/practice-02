
function ListItemComponent(props) {
  const { heading, description } = props;
  return (
    <li>
      <a href="/" tabIndex="-1">
        <h3>{heading}</h3>
        <p>{description}</p>
      </a>
    </li>
  )
}

export default ListItemComponent