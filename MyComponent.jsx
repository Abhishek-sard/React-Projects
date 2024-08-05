
import React,{useState} from "react";

function MyComponent(){
    const[car, setCar] = useState({years:2024, make:"Ford", model:"Mustang"});

    function handleYearChange(event){
        setCar({...car,years:event.target.value});
        

    }
    function handmakeChange(event){
        setCar ({...car,make:event.target.value});

    }
    function handlemodelChange(event){
        setCar({...car,model:event.target.value});
         
    }

    return(<div>
        <p>Your favourate car is: {car.years} {car.make} {car.model}</p>

        <input type="number" value={car.years} onChange={handleYearChange}/><br/>
        <input type="text" value={car.make}  onChange={handmakeChange}/><br />
        <input type="text" value={car.model}onChange={handlemodelChange} /><br />
    </div>)
    
}
export default MyComponent