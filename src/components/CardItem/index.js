import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
   
    <li className='cards__item'>

        <Link className='cards__item__link' to={props.path}>
                 <div className="rounded overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 ...">


                                    <img  className="w-full h-64 object-cover cursor-pointer" src={props.src} alt="img-1"/>
                                    <div className="px-6 py-4">
                                        <div className="font-medium text-xl mb-2 overflow-ellipsis overflow-hidden whitespace-nowrap cursor-pointer">
                                            dish name
                                        </div>
                                        <p className="font-regular text-gray-600 text-base leading-normal h-12 overflow-ellipsis overflow-hidden w-full">{props.text}</p>
                                        
                                    </div>
                                    <div className="px-6 pb-2 flex flex-row">
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.label}</span>
                                        
                                    </div>
                                    </div>            
                          
        </Link>
       
    </li>
  );
}

export default CardItem;