import React, { Component } from 'react';
import './Category.css';
import axios from 'axios';
import Cocktail from './Cocktail';

class Category extends Component {
    state = {
        cocktails: []
    }

    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log(this.props.categoryName);
        let url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?' + this.props.filterType + '=' + this.props.filterBy;
        axios.get(url).then(response => {
            console.log(response);
            this.setState({cocktails : response.data.drinks })
        }
            );
    }

    render(){
        let cocktails = this.state.cocktails.map((cocktail, index) => {return <Cocktail {...cocktail} key={cocktail.idDrink}/>});
        return (
        <div className="categoryContainer">
            <div className="categoryTitle">
              {this.props.categoryName}  
            </div>
            {cocktails}
        </div>
        );
}
}

export default Category;