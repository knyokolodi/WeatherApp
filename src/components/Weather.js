import React from 'react';

const Weather = (props) =>{
    return (
        <div>
            <p className="weather__error">{props.error}</p>
            {props.city && props.country &&<p className="weather__key">Location: <span className="weather__value">{props.city}  {props.country}</span></p>}
            {props.temparature && <p className="weather__key">Temparature: <span className="weather__value">{props.temparature}</span></p>}
            {props.humidity && <p className="weather__key">humidity: <span className="weather__value">{props.humidity}</span></p>}
            {props.description && <p className="weather__key">Conditions: <span className="weather__value text-capitalize">{props.description}</span></p>}
            <p>{props.icon}</p>
        </div>   
      );
}

export default Weather;