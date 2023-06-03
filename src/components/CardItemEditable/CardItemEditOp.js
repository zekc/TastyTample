import React from 'react';
import { Link } from 'react-router-dom';

function CardItemEditOp(props) {
  return (
   
       <div className="rounded overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 ...">

        <Link  to={props.path}>
          

                                    <img  className="w-full h-64 object-cover cursor-pointer" src={props.src} alt="img-1"/>
                                    </Link>
                                    <div className="px-6 py-4">
                                    <Link to={props.path}>
                                        <div className="font-medium text-xl mb-2 overflow-ellipsis overflow-hidden whitespace-nowrap cursor-pointer">
                                            dish name
                                        </div>
                                        </Link>
                                        <p className="font-regular text-gray-600 text-base leading-normal h-12 overflow-ellipsis overflow-hidden w-full">{props.text}</p>
                                        
                                    </div>
                                    <div className="px-6 pb-2 flex flex-row">
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.label}</span>
                                        <Link  to={props.pathEdit}>
                                        <svg xmlns="http://www.w3.org/2000/svg" id="0" className="w-6 h-6 fill-current text-blue-600 ml-auto cursor-pointer" viewBox="0 0 20 20" onclick="toggleEditPostModal()">
                                            <path xmlns="http://www.w3.org/2000/svg" d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" id="0" ></path>
                                        </svg>
                                        </Link>
                                    </div>
                                    
                          
       
        </div>
    
  );
}

export default CardItemEditOp;