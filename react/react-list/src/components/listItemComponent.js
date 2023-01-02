import StyleButtonComponent from "./styleButtonComponent";

function ListItemComponent(props) {
  const { heading, description } = props;
  return (
    <li>
      <a href="/" tabIndex="-1">
        <h3>{heading}</h3>
        <p>{description}</p>
        <section>
          <StyleButtonComponent type="primary" label="View" icon="eye" />
          <StyleButtonComponent type="normal" label="Edit" />
          <StyleButtonComponent type="danger" label="Delete" />
        </section>
      </a>
    </li>
  )
}

export default ListItemComponent