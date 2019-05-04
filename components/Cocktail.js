import React from 'react';

const Cocktail = (props)=>{
    return <div className="cocktailItem">
        <img src={props.strDrinkThumb} onClick={props.onPictureClick} alt={props.strDrink}/>
        <h4 onClick={props.onTitleClick}>{props.strDrink}</h4>
       
    </div>;
}

export default Cocktail;