import React,{Component} from 'react';
import './App.css';
import Category from './components/Category';
import CocktailView from './components/CocktailView';
import CocktailDetails from './components/CocktailDetails';


class App extends Component {
  state = {
        categories:[
          {id: 1, name: "Alcoholic", filterBy : "Alcoholic", filterType : "a"},
          {id: 2, name: "Non Alcoholic", filterBy : "Non_Alcoholic", filterType : "a"},
          {id: 3, name: "Ordinary Drink", filterBy : "Ordinary_Drink", filterType : "c"},
          {id: 4, name: "Cocktail glass", filterBy : "Cocktail_glass", filterType : "g"},
          {id: 5, name: "Champagne flute", filterBy : "Champagne_flute", filterType : "g"},
        ],
        selectedItem : null,
        viewCocktail : false,
        showDetails : false
  }

  onPictureClick = (cocktail) => {
    this.setState({
        selectedItem : cocktail,
        viewCocktail : true,
        showDetails : false
    });
  }

  cancelViewCocktail = () =>{
    this.setState({
      selectedItem : null,
      viewCocktail : false
    });
    window.scrollTo(0, 0);
  }

  onTitleClick = (cocktail) => {  
    this.setState({
        selectedItem : cocktail,
        showDetails : true
    });
    window.scrollTo(0, 0);
  }

  cancelDetailsCocktail = () =>{
    this.setState({
      selectedItem : null,
      showDetails : false
    });
  }

  render() {
    let categories = this.state.categories.map((category, index) => 
      {return <Category {...category} 
                        key={category.id} 
                        hide={this.state.viewCocktail} 
                        onPictureClick={this.onPictureClick} 
                        onTitleClick={this.onTitleClick}/>
      });

    return(
    <div className="App">
      <header className="App-header">
        <h1>Cocktails</h1>
        <table cellPadding="0" cellSpacing="0">
        <tbody><tr>
          <td>Alcoholic</td>
          <td>Non Alcoholic</td>
          <td>Ordinary drink</td>
          <td>Cocktail glass</td>
          <td>Champagne flute</td>
          </tr></tbody>
          </table>
      </header>
      <div className="App-search">
        <input type="text" defaultValue="Search by name" />
      </div>

      {(this.state.showDetails && this.state.selectedItem!=null) && 
        <CocktailDetails {...this.state.selectedItem} cancelDetailsCocktail={this.cancelDetailsCocktail} />
      }
      {categories}
      {
        (this.state.viewCocktail && this.state.selectedItem!=null) &&
        <CocktailView {...this.state.selectedItem} cancelViewCocktail={this.cancelViewCocktail}/>
      }
      <div className="footer"></div>
    </div>
    )
  }
}

export default App;
