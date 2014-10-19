/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/Questions.css');

// Remember to remove 'Go' from node_modules. Whatever the fuck that is

// var TempQuestions = [
//   {
//     text: "Do you drink alone?",
//     options: [
//       {text: "Sometimes", }
//     ]
//   }
// ];


var Characteristics = [
  "Sweetness",
  "Acidity",
  "Tannin",
  "Fruit",
  "Body"
];

/*
Found most of this data from an infographic
http://winefolly.com/wp-content/uploads/2013/10/basic-wine-101-guide-infographic-poster.jpg#big
*/

var wineFollyCharacteristics = [
  "Body",
  "Red Fruit",
  "Black Fruit",
  "Floral Aromas",
  "Herbaceous",
  "Pepper/Spice",
  "Earthiness",
  "Baking Spice & Vanilla",
  "Leathery Flavors",
  "Astringency"
];

var wineFollyCharacteristicsMissed = [
  "tannin",
  "acidity",
  "alcohol level",
  "sweetness"
];

var wineFollyLevels = [
  "bold & intense",
  "pronounced",
  "present",
  "somewhat present",
  "very little"
];

var wineFollyTypes = [
  "Sparkling", // Goes good with salty foods
    /*
    Examples:
      - Fries
      - Potato
      - Chips
      - Caviar
      - Anchovies
      - Sushi
      - Popcorn
      - Meats: Fish and Shellfish
      - Meats: Chicken and other Poultry
      - Winews: Most Sparkling Wines
    */
  "Dry White", // Vegtable Dishes
    /*
    Examples:
      - Salads
      - Sauteed Vegtables
      - Roasted Vegtables
      - Meats: Flaky Fish
      - Meats: Chicken
      - Wines: Albarino
      - Wines: Gruner Veltliner
      - Wines: Gargenega
      - Wines: Muscadet
      - Wines: Pinot Gris
      - Wines: Sauvignon Blanc
      - Wines: Trebbiano
      - Wines: Vermentino
    */
  "Sweet White", // Spicy Cuisine
  /*
    Examples:
      - Indian
      - Thai and Chinese Cuisine
      - Meats: Oily fish and Chicken
      - Wines: Chenin Blanc,
      - Wines: Gewurztraminer
      - Wines: Moscato
      - Wines: Riesling
      - Wines: Torrontes
    */
  "Rich White", // Creamy Dishes
  /*
    Examples:
      - Cream Soups
      - Cream-based Pasta
      - Quiche
      - Creamy Lasagna
      - French Cuisine
      - Meats: Rich Shellfish
      - Meats: Chicken and other Poultry
      - Wines: Chardonnay
      - Wines: Semillon
      - Wines: Viognier
      - Wines: Marsanne
      - Wines: Roussanne
    */
  "Rose", // Richly Flavored Food
  /*
    Examples:
      - Mediterranean Cuisine
      - Moroccan
      - Indian Cuisine
      - Spiced Dishes
      - Meats: Rich Shellfish
      - Meats: Pork Loin
      - Meats: Chicken and other poultry
      - Wines: Most dry Rose wine
    */
  "Light Red", // Driven Disshes
  /*
    Examples:
      - Risotto
      - Mushroom Soup
      - Cream-based Pasta
      - Chicken Pie
      - White Pizza
      - French Cuisine
      - Meats: Pork Chop
      - Meats: Chicken and other poultry
      - Wines: Pinot Noir
      - Wines: St. Laurent
      - Wines: Gamay
      - Wines: Carignan
      - Wines: Counoise
      - Wines: Zweigelt
    */
  "Medium Red", // Roasted Food
  /*
    Examples:
      - Italian Cuisine
      - Spanish Cuisine
      - Pizza
      - Roasted Vegetables
      - Meats: Pork
      - Meats: Duck
      - Meats: Lamb
      - Meats: Cured Meats
      - Meats: Sausages
      - Wines: Sangiovese
      - Wines: Tempranillo
      - Wines: Cabernet Franc
      - Wines: Barbera
      - Wines: Merlot
      - Wines: Negroamaro
      - Wines: Zinfandel
      - Wines: Carmenere
      - Wines: Nebbiolo
    */
  "Bold Red", // Rich Meats
  /*
    Examples:
      - Roasted Smoked and Barbecued Meats
      - Meats: Beef
      - Meats: Lamb
      - Meats: Pork
      - Meats: Venison
      - Meats: Sausages
      - Meats: Cured Meat
      - Wines: Cabernet Sauvignon
      - Wines: Syrah
      - Wines: Malbec
      - Wines: Petite Sirah
      - Wines: Petit Verdot
      - Wines: Mourvedre
      - Wines: Nero d'Avola
    */
  "Desert" // Sweets
  /*
    Examples:
      - Cakes
      - Cookies
      - Chocolate
      - Pie
      - Ice Cream
      - Soft Cheese
      - Fruit
      - Wines: Port
      - Wines: Tawny Port
      - Wines: Sherry
      - Wines: Sauternes
      - Wines: Madeira
      - Wines: Vin Santo
      - Wines: Muscat
      - Wines: Late Harvest Wines
    */
];

var FruitFlavors = [
  "Lime",
  "Lemon",
  "Gooseberry",
  "Passion Fruit",
  "Grapefruit",
  "Apple",
  "Pear",
  "Melon",
  "Nectarine",
  "Peach",
  "Pineapple",
  "Mango",
  "Apricot",
  "Fig",
  "Candied"
];

var FlowerHerbFlavors = [
  "White Flowers",
  "Rose",
  "Orange Blossom",
  "Honeysuckle",
  "Vanilla",
  "Grass",
  "Thyme",
  "Celery",
  "Jalapeno",
  "Lemongrass",
  "Ginger",
  "Saffron"
];

var OtherOakFlavors = [
  "Beeswax",
  "Honey",
  "Caramel",
  "Almond",
  "Burnt Sugar",
  "Vanilla",
  "Butter",
  "Nutmeg",
  "Coconut",
  "Saline Solution",
  "Flint Rocks",
  "Mushroom",
  "Chalk Box",
  "Cultured Cream",
  "Petroleum"
];

var TypesOfWine = [
  "Almost Clear",
  "Green Yellow",
  "Platinum Yellow",
  "Pale Yellow",
  "Pale Gold",
  "Deep Gold",
  "Pale Salmon",
  "Deep Pink",
  "Deep Salmon",
  "Pale Ruby",
  "Deep Violet",
  "Deep Purple",
  "Tawny"
];


var Questions = React.createClass({
  render: function () {
    return (
      <div>

        <div> Not going to lie, I kind of think that this component<br/>should be a group of questions, and another component should be<br/> used for handling each individual question</div>
          
        <div className="question">
          <h1 ref="questionText">Do you drink alone?</h1>
          <QuestionButton text="Sometimes" />
          <QuestionButton text="What's it to you?" />
          <QuestionButton text="All of the godamn time" />
          <QuestionButton text="DON'T JUDGE ME!" />
        </div>

        <Question />

      </div>
      );
  },

});

var Question = React.createClass({
  render: function () {
    return (
      <div>This is Question</div>
    );
  }
})

var QuestionButton = React.createClass({
  render: function () {
    return (
        <div className="question-button">{this.props.text}</div>
      )
  }
})

module.exports = Questions;
