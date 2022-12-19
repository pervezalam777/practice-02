function HeaderComponent(props) {
  const { title } = props;
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
              <button>HOME</button>
            </li>
            <li>
              <button>About Us</button>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  )
}

export default HeaderComponent;