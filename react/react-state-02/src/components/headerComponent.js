import { HOME_SCREEN, ABOUT_SCREEN} from '../constants'
function HeaderComponent(props) {
  // console.log('header component props....',props)
  // console.log(props.onScreenChange)
  const { title, onScreenChange } = props;

  function handleClick(event) {
    const id = event.target.id;
    onScreenChange(id);
  }

  return (
    <header className="header">
      <section>
        <span>LOGO</span>
      </section>
      <section>
        <h3>{title}</h3>
      </section>
      <section>
        <nav>
          <ul className="header-nav">
            <li>
              <button id={HOME_SCREEN} onClick={handleClick}>HOME</button>
            </li>
            <li>
              <button id={ABOUT_SCREEN} onClick={handleClick}>About Us</button>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  )
}


//HeaderComponent({title:'name'})
export default HeaderComponent;