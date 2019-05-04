import React, { Component } from 'react';
import './Category.css';
import axios from 'axios';
import Cocktail from './Cocktail';

class Category extends Component {
    state = {
        cocktails: []
    }

    componentDidMount(){
        let url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?' + this.props.filterType + '=' + this.props.filterBy;
        axios.get(url).then(response => {
            this.setState({cocktails : response.data.drinks })
            }
        );
    }

    handlePictureClick = (cocktail, e) => {
        this.props.onPictureClick(cocktail);
    }
    handleTitleClick = (cocktail, e) => {
        this.props.onTitleClick(cocktail);
    }

    render(){
        let cocktails = this.state.cocktails.map(
            (cocktail, index) => 
            {return <Cocktail {...cocktail} 
                        key={cocktail.idDrink} 
                        cocktail={cocktail} 
                        onPictureClick={this.handlePictureClick.bind(this,cocktail)}
                        onTitleClick={this.handleTitleClick.bind(this, cocktail)}/>
        });
        
        let classNameContainer = this.props.hide? "categoryContainer hidden" : "categoryContainer";
        
        return (
        <div className={classNameContainer}>
            <div className="categoryTitle">
              {this.props.name}  
            </div>
            {cocktails}
        </div>
        );
}
}

export default Category;