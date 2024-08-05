import React, {userState, useState} from 'react';
function ColorPickup(){

    const[color,setColor] = useState("#FFFFFF");

    function handleColorChange(event){
        setColor(event.target.value);

    }
    return(<div className="color-picker-container">
      <h1>Color Picker</h1>
      <div className="color-display" style={{backgroundColor: color}}>
        <label>Select a Color</label>
        <input type="color" value={color} onChange={handleColorChange} />
      </div>
    </div>);
}
export default ColorPickup