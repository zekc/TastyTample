import React, {useEffect, useState} from 'react';
import './Cards.css';
import CardItem from '../CardItem/index';
import { collection, getDocs, getFirestore } from "firebase/firestore"; 


function Cards() {

  const [str1, setStr1] = useState();
	const [recipeInfo, setRecipeInfo] = useState();

	useEffect(() => {
		async function fetchProfile() {
			const db = getFirestore();

			const querySnapshot = await getDocs(collection(db, "Recipe"));
			//TO-DO yeni tarif eklenince filtrele :)
			querySnapshot.forEach((doc) => {
			  console.log("hakan ", doc.data());
			  setRecipeInfo(doc.data());
        setStr1()
			});
		}
    
		fetchProfile();
	  }, []);

    console.log("kaan", recipeInfo);
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={recipeInfo?.image_url}
              prepTime={recipeInfo?.time}
              text={recipeInfo?.title}
              label={recipeInfo?.label}
              path='dish'
            />
            <CardItem
              src={recipeInfo?.image_url}
              prepTime={recipeInfo?.time}
              text={recipeInfo?.title}
              label={recipeInfo?.label}
              path='/dish'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Mombar makes you dizzy, I made it with my mother-in-law'
              label='Egypt'
              path='/dish'
            />
            <CardItem
              src='images/img-4.jpg'
              text='delicious kushari with um-oabic'
              label='Egypt traditional dish'
              path='/dish'
            /> 
            <CardItem
              src='images/img-8.jpg'
              text='a luxury molokhia with rabbits dish'
              label='Healthy '
              path='/dish'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
