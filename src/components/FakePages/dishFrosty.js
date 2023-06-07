import React from 'react';
import { Link } from 'react-router-dom';


function dishFrosty() {

  return (
    <div className="bg-blue-50 overflow-x-hidden">
   
    

    {/* <!--Dish Details--> */}
	<div>
		<div className="flex pt-5 md:pt-12 justify-center">
			<div className="bg-white md:h-96 w-11/12 md:w-7/10 md:mx-8 md:flex md:max-w-5xl shadow-lg rounded-lg">
				<div className="md:w-1/2 h-64 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:rounded-bl-lg md:h-auto overflow-hidden">
					<img alt='' id="dish-page-image" className="object-cover" src="../images/frosty.jpg" />
					{/* <!-- <div className="h-64 bg-cover lg:rounded-lg lg:h-full" style="background-image:url(butterChicken.jpeg)"></div> --> */}
				</div>
				<div className="mb-4 pt-5 px-6 max-w-xl md:max-w-5xl md:w-1/2 specialfordish" >
					<h2 id="dish-page-name" className="text-3xl font-medium text-blue-600">Chocolate Frosty</h2>
					<span id="dish-page-prep-time" className="bg-green-400 text-gray-50 text-sm font-light rounded-md px-2 py-1">4 hours</span>
					<span id="dish-page-cuisine-type" className="bg-green-400 text-gray-50 text-sm font-light rounded-md px-2 py-1">Drinks</span>
					<p id="dish-page-ingredients" className="mt-4 text-gray-600 text-base font-regular">
						<span><li className="text-base font-regular">2 cups chocolate milk</li></span>
						<span><li className="text-base font-regular">1 cup frozen whipped topping (do not thaw)</li></span>
						<span><li className="text-base font-regular">1/4 cup whole milk</li></span>
						<span><li className="text-base font-regular">1 tablespoon sweetened condensed milk</li></span>
					</p>

				</div>
			</div>
		</div> 
	</div>

	{/* <!-- end of ingredients box--> */}

	{/* <!-- start of dish directions box --> */}

	<div>
		<div className="py-5 flex justify-center">
			<div className="bg-white w-11/12 md:w-7/10 md:mx-8 md:flex md:max-w-5xl shadow-lg rounded-lg">
				<div className="pt-5 px-6 max-w-xl lg:max-w-5xl mb-4">
					<h2 className="text-2xl font-medium text-blue-600">Directions<span className="text-indigo-600"></span></h2>
					 <p id="dish-page-direction-text" className="mt-4 font-regular text-base">
                         Pour chocolate milk into ice cube trays and freeze until solid, at least 4 hours and up to 24.
						 <br/><br/>
						 Process frozen milk cubes, frozen whipped topping, whole milk, and sweetened condensed milk in a food processor until smooth. Serve immediately or freeze in an airtight container up to 1 week.
						 <br/><br/>
						 For easier blending, transfer frozen milk cubes to a zip-top bag, then pound with a meat mallet or rolling pin into small pieces.
                         <br/><br/>
                         Serve first batch immediately with a straw and a spoon. Repeat freezing process when ready to prepare remaining frosty mixture.
					 </p>

				<div className="flex flex-row mt-8">
				   <Link to='/otherNancy'>
					<img alt='' id="dish-page-owner-image" className="w-14 md:w-20 h-14 md:h-20 mr-2 object-cover rounded-full cursor-pointer" src="../images/NancyJ.jpg"/>

					<div className="w-8/12 md:w-10/12 ml-2">
						<h2 id="dish-page-owner-name" className="text-gray-800 text-lg font-medium mb-2 cursor-pointer">Nancy J</h2>
					</div>
					</Link>
				</div>
                 
				 {/* Like Button */}
				<div className="mt-8 flex flex-row">
					<svg id="dish-page-like-btn" className="w-6 h-6 cursor-pointer" fill="#FFFFFF" stroke="#EC4899" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
					<span id="dish-page-num-likes" className="ml-2">0</span>
				
					<svg id="dish-page-like-btn" className="w-6 h-6 cursor-pointer" fill="#FFFFFF" stroke="#EC4899" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
					
					
					{/* <!-- <svg className="w-6 h-6 stroke-current text-pink-500 fill-current text-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg> --> */}
				</div>
				

				</div>

				{/* <!--Like button--> */}
			</div>
		</div> 
	</div>
	
	
		
	


	{/* <!--Comments--> */}
	<div className="py-5 flex justify-center">
	<div className="w-11/12 md:w-7/10 md:mx-8 md:flex md:max-w-5xl shadow-lg rounded-lg">
		<form className="w-full bg-white rounded-lg px-4 pt-2">
		   <div className="flex flex-wrap -mx-3 mb-6">
			  <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg font-medium">Add a new comment</h2>
			  <div className="w-full md:w-full px-3 mb-2 mt-2">
				 <textarea id="dish-new-comment-text" className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-regular placeholder-gray-700 focus:outline-none focus:bg-white" name="body" placeholder='Type Your Comment' required></textarea>
			  </div>
			  <div className="w-full md:w-full flex items-start md:w-full px-3">
				 <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
					<svg fill="none" className="w-5 h-5 text-gray-600 mr-1" viewBox="0 0 24 24" stroke="currentColor">
					   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
					</svg>
					<p className="text-xs md:text-sm pt-px">You must be logged in to comment.</p>
				 </div>
				 <div className="-mr-1">
					<input onClick="onCommentSubmitted()" type='submit' className="bg-blue-600 text-white font-medium py-1 px-4 border rounded-lg tracking-wide mr-1 hover:bg-blue-700 cursor-pointer" value='Post Comment'/>
				 </div>
			  </div>
           

		     {/* <!--Previously added comments--> */}
		   <div id="dish-comments" className="w-full px-4 pt-2 pb-2 mt-4">
			   <div className="flex flex-row w-full p-2">
					<img alt='' className="w-14 md:w-20 h-14 md:h-20 mr-2 object-cover rounded-full cursor-pointer" src="../../assets/images/default-profile.jpeg"/>
					<div className="ml-2">
						<h2 className="text-gray-800 text-lg font-medium mb-2 cursor-pointer">Karen</h2>
						<p className="font-regular text-gray-600">Best Frosty I ever Tasted. Even better than the Original Frosty at Wendy,s</p>
					</div>
				</div> 
		   </div>
           </div>
		   </form>
		</div>
	 </div>
	</div>
    
  );
}

export default dishFrosty;