import React from 'react';
import '../../App.css';


function SearchPar() {
  return (
    <div className="bg-white p-3 shadow-sm rounded-sm">
    <div className="border rounded overflow-hidden flex mb-4">
              <input id="home-dish-search-bar" type="text" className="w-11/12 px-4 py-2 border-gray-300 focus:ring-blue-600 font-regular" placeholder="What are you looking for?"/>
              <button className="flex w-1/12 items-center justify-center md:px-4 border-l">
                <svg className="h-4 w-4 text-grey-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
              </button>
            </div>
      </div>
      
    
  );
}

export default SearchPar;
