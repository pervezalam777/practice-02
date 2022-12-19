import { useState } from "react";
import AboutScreen from "./aboutScreen";
import HomeScreen from "./homeScreen";

function ScreenManager(){
  const [currentScreen, changeCurrentScreen] = useState('home');

  function renderScreen() {
    if(currentScreen === 'home'){
      return (
        <HomeScreen title="Dashboard" />
      )
    } else if(currentScreen === 'about'){
      return (
        <AboutScreen title="About us" />
      )
    } else {
      return <section>No screen</section>
    }
  }

  return renderScreen();
  /**
   *  return (
        <HomeScreen />
      )
      or
      return (
        <AboutScreen />
      )
      or
      return <section>No screen</section>
   */
}

export default ScreenManager