import HeaderComponent from "../components/headerComponent";

function HomeScreen(props) {
  const {title} = props;
  return (
    <section>
      <HeaderComponent title={title}/>
      <main>
        Home body....
      </main>
    </section>
  )
}

export default HomeScreen;