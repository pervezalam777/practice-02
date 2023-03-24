import { useState } from "react";
import { HOME_SCREEN, ABOUT_SCREEN } from '../constants'
import HeaderComponent from "../components/headerComponent";
import AboutScreen from "./aboutScreen";
import HomeScreen from "./homeScreen";

function ScreenManager(){
  const [currentScreen, changeCurrentScreen] = useState(HOME_SCREEN);

  function renderScreen() {
    if(currentScreen === HOME_SCREEN){
      return (
        <HomeScreen />
      )
    } else if(currentScreen === ABOUT_SCREEN){
      return (
        <AboutScreen />
      )
    } else {
      return <section>No screen</section>
    }
  }
  // const props = {title:'home', onScreenChange:changeCurrentScreen }
  // HeaderComponent(props)
  return (
    <div>
      <HeaderComponent 
        onScreenChange={changeCurrentScreen} 
        title={currentScreen}
      />
      {renderScreen()}
    </div>
   
  );
}

export default ScreenManager