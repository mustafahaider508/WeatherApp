import React from 'react';
import "./WeatherCard.css";

function WeatherCard({name,temp,weathermood,min,max}) {
   


   

    
    return (
        <>
          <div className="main_div">

           <p className="name">{name}</p> 
           <p className="temp">{temp}&deg;</p>
           <p className="weathermood">{weathermood}</p>
           <div className="temperatues">
               <p className="max">H:{max}&deg;</p>
               <p className="min">L:{min}&deg;</p>
           </div>
           </div>
           
        </>
    )
}

export default WeatherCard
