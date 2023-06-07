import React from 'react';
import './Cards.css';
import CardItem from '../CardItem/index';


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Recipes!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Bang Bang Burger.jpg'
              dishName='Bang Bang Burger'
              text='This version of a burger is oozing with flavor and well worth the extra effort–crunchy, tangy, sweet, savory and juicy, all in one burger.'
              label='Fast Food'
              path='/dishBurger'
            />
            <CardItem
              src='images/ChocolateFrosty.jpg'
              dishName="Chocolate Frosty"
              text='We tried a viral DIY version of the frozen favorite, and it’s well worth giving a spin—no ice cream machine needed.'
              label='Drinks'
              path='/dishFrosty'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Italian Chicken Marinade.jpg'
              dishName='Italian Chicken Marinade'
              text='This Italian dressing chicken marinade is a super simple but delicious way to add flavor before grilling.'
              label='Lunch'
              path='/dishItalianChicken'
            />
            <CardItem
              src='images/Brocoli.jpg'
              dishName='Roasted Brocoli'
              text='Roasted broccoli is easy to make and so much more flavorsome than boiled. My favorite part is the roasted sliced stem pieces.'
              label='Healthy'
              path='/dishBrocoli'
            /> 
            <CardItem
              src='images/OreoCheesecakeBars.jpg'
              dishName='Oreo Cheesecake Bars'
              text='Easy to make and are the perfect treat for lots of people'
              label='Dessert'
              path='/dishOreos'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
