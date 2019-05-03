import React from 'react';
import './App.css';
import Category from './components/Category';
function App() {
  return (
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
        <input type="text" value="Search by name" />
      </div>

      <Category filterType="a" filterBy="Alcoholic" categoryName="Alcoholic" />
      <Category filterType="a" filterBy="Non_Alcoholic" categoryName="Non Alcoholic" />
      <Category filterType="c" filterBy="Ordinary_Drink" categoryName="Ordinary Drink" />
      <Category filterType="g" filterBy="Cocktail_glass" categoryName="Cocktail glass" />
      <Category filterType="g" filterBy="Champagne_flute" categoryName="Champagne flute" />
    </div>
  );
}

export default App;
