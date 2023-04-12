import { useState } from 'react';
import './LightSwitch.css';
import { useTheme } from './../../context/ThemeContext'

function LightSwitch() {
  const { themeName, setThemeName } = useTheme();
  const [ currentTheme, setCurrentTheme ] = useState("day");

  function handleClick(e) {
    setCurrentTheme(e.target.innerText.toLowerCase());
    setThemeName(currentTheme);
  }

  return (
    <div className={`light-switch ${themeName}`}>
      <div className="on" value="day" onClick={handleClick}>DAY</div>
      <div className="off" value="night" onClick={handleClick}>NIGHT</div>
    </div>
  );
}

export default LightSwitch;