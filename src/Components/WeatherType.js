import React from 'react';
import { Typography,Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import "./WeatherType.css";
import EventNoteIcon from '@material-ui/icons/EventNote';


const useStyles = makeStyles(() => ({
    root: {
       margin:"10px",
       backgroundColor:"#fff",
 
    },
    heading:{
        color:"black",
        margin:"10px",
        backgroundColor:"transparent",
        color:"white",
        paddingTop:"10px",
        alignItems:"center",
   
    },
    divider:{
        color:"red"
    }
  }));


function WeatherType({ min,max,min1,max1,min2,max2,min3,max3,min4,max4,min5,max5,min6,max6,
    icon,icon1,icon2,icon3,icon4,icon5,icon6}) {
        const classes = useStyles();
    return (
        <>
             
        <div className="min_div">
         <div className="f_div">
        <EventNoteIcon className="icon" />
        <Typography className={classes.heading}>    7-DAY FORECAST</Typography>
        </div> 
        <Divider  />
        
        <div className="div1">
            <p className={classes.heading}>Today</p>
            <img className="img" src={`https://openweathermap.org/img/w/${icon}.png`} alt="pic"/>
            <p className={classes.heading}>{min}&deg;C</p>
            <div className="line"></div>
            <p className={classes.heading}>{max}&deg;C</p>    
        </div>
        <Divider />
        <div className="div1">
            <p className={classes.heading}>Monday</p>
            <img className="img" src={`https://openweathermap.org/img/w/${icon1}.png`} alt="pic"/>
            <p className={classes.heading}>{min1}&deg;C</p>
            <div className="line"></div>
            <p className={classes.heading}>{max1}&deg;C</p>    
        </div>
        <Divider />
        <div className="div1">
            <p className={classes.heading}>Tuesday</p>
            <img className="img" src={`https://openweathermap.org/img/w/${icon2}.png`} alt="pic"/>
            <p className={classes.heading}>{min2}&deg;C</p>
            <div className="line"></div>
            <p className={classes.heading}>{max2}&deg;C</p>    
        </div>
        <Divider />
        <div className="div1">
            <p className={classes.heading}>Wenesday</p>
            <img className="img" src={`https://openweathermap.org/img/w/${icon3}.png`} alt="pic"/>
            <p className={classes.heading}>{min3}&deg;C</p>
            <div className="line"></div>
            <p className={classes.heading}>{max3}&deg;C</p>    
        </div>
        <Divider />
        <div className="div1">
            <p className={classes.heading}>Thursday</p>
            <img className="img" src={`https://openweathermap.org/img/w/${icon4}.png`} alt="pic"/>
            <p className={classes.heading}>{min4}&deg;C</p>
            <div className="line"></div>
            <p className={classes.heading}>{max4}&deg;C</p>    
        </div>
        <Divider />
        <div className="div1">
            <p className={classes.heading}>Friday</p>
            <img className="img" src={`https://openweathermap.org/img/w/${icon5}.png`} alt="pic"/>
            <p className={classes.heading}>{min5}&deg;C</p>
            <div className="line"></div>
            <p className={classes.heading}>{max5}&deg;C</p>    
        </div>
        <Divider />
        <div className="div1">
            <p className={classes.heading}>Saturday</p>
            <img className="img" src={`https://openweathermap.org/img/w/${icon6}.png`} alt="pic"/>
            <p className={classes.heading}>{min6}&deg;C</p>
            <div className="line"></div>
            <p className={classes.heading}>{max6}&deg;C</p>    
        </div>
        </div> 
     
       
        
        </>
    )
}

export default WeatherType
