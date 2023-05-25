import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Stuffed with Alexandrian cromb'
              label='ُEygept'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Hawawshi that is better than Hawawshi of um-Khaled'
              label='Unhealthy'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Mombar makes you dizzy, I made it with my mother-in-law'
              label='Eygept'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='delicious kushari with um-oabic'
              label='Eygept traditional dish'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='a luxury molokhia with rabbits dish'
              label='Healthy '
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
