import HeaderComponent from "../components/headerComponent";

function AboutScreen(props) {
  const { title } = props;
  return (
    <section>
      <HeaderComponent title={title}/>
      <main>
        about body....
      </main>
    </section>
  )
}

export default AboutScreen;