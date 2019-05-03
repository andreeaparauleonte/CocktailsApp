import React, {Fragment} from 'react';

const Cocktail = (props)=>{
    return <div className="cocktailItem">
        <img src={props.strDrinkThumb} />
        <h4>{props.strDrink}</h4>
       
    </div>;
}

export default Cocktail;