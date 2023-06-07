import React from 'react';
import { Link } from 'react-router-dom';


function dishBurger() {

  return (
    <div className="bg-blue-50 overflow-x-hidden">
   
    

    {/* <!--Dish Details--> */}
	<div>
		<div className="flex pt-5 md:pt-12 justify-center">
			<div className="bg-white md:h-96 w-11/12 md:w-7/10 md:mx-8 md:flex md:max-w-5xl shadow-lg rounded-lg">
				<div className="md:w-1/2 h-64 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:rounded-bl-lg md:h-auto overflow-hidden">
					<img alt='' id="dish-page-image" className="object-cover" src="../images/Bang Bang Burger.jpg" />
					{/* <!-- <div className="h-64 bg-cover lg:rounded-lg lg:h-full" style="background-image:url(butterChicken.jpeg)"></div> --> */}
				</div>
				<div className="mb-4 pt-5 px-6 max-w-xl md:max-w-5xl md:w-1/2 specialfordish" >
					<h2 id="dish-page-name" className="text-3xl font-medium text-blue-600">Bang Bang Burger</h2>
					<span id="dish-page-prep-time" className="bg-green-400 text-gray-50 text-sm font-light rounded-md px-2 py-1">70 min</span>
					<span id="dish-page-cuisine-type" className="bg-green-400 text-gray-50 text-sm font-light rounded-md px-2 py-1">Fast Food</span>
					<p id="dish-page-ingredients" className="mt-4 text-gray-600 text-base font-regular">
						<span><li className="text-base font-regular">1 pound ground chicken, white and dark meat</li></span>
						<span><li className="text-base font-regular">1 (8 ounce) package crimini mushrooms, halved or quartered</li></span>
						<span><li className="text-base font-regular">6 tablespoons peanut oil, divided</li></span>
						<span><li className="text-base font-regular">1 1/4 teaspoons salt</li></span>
						<span><li className="text-base font-regular">4 jalapeño peppers, halved and seeded</li></span>
						<span><li className="text-base font-regular">8 green onions, trimmed and onions cut in half crosswise</li></span>
						<span><li className="text-base font-regular">4 brioche buns, split</li></span>
						<span><li className="text-base font-regular">2 large eggs</li></span>
						<span><li className="text-base font-regular">2 tablespoons water</li></span>
						<span><li className="text-base font-regular">1 1/2 cups panko bread crumbs</li></span>
						<span><li className="text-base font-regular">2 tablespoons minced cilantro</li></span>
						<span><li className="text-base font-regular">1/2 cup mayonnaise</li></span>
						<span><li className="text-base font-regular">1/4 cup Thai sweet chili sauce</li></span>
						<span><li className="text-base font-regular">1 teaspoon rice vinegar</li></span>
                        <span><li className="text-base font-regular">1/8 teaspoon salt</li></span>
                        <span><li className="text-base font-regular">3/4 cup rice vinegar</li></span>
                        <span><li className="text-base font-regular">2 tablespoons water</li></span>
                        <span><li className="text-base font-regular">2 teaspoons white sugar</li></span>
                        <span><li className="text-base font-regular">2 teaspoons sesame seeds</li></span>
                        <span><li className="text-base font-regular">1 small carrot, cut into matchsticks</li></span>
                        <span><li className="text-base font-regular">1/4 large English cucumber, cut into matchsticks</li></span>
                        <span><li className="text-base font-regular">1/4 small red onion, cut into 1/8-inch thick wedges</li></span>
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
                         Whisk together 3/4 cups rice vinegar, water, sugar, and sesame seeds in a small bowl until sugar is dissolved. Add carrot, cucumber, and red onion, separating onion layers; toss to coat. Chill until ready to use, stirring occasionally to keep vegetables submerged in the brine.
						 <br/><br/>
						 Whisk together mayonnaise, Thai sweet chile sauce, Sriracha, 1 teaspoon rice vinegar, and 1/4 teaspoon salt in a small bowl. Chill Bang Bang Sauce until ready to use.
						 <br/><br/>
						 Preheat the oven to 400 degrees F (200 degrees C). Line a rimmed baking sheet with aluminum foil.
                         <br/><br/>
                         Toss mushrooms with 1 tablespoon oil. Spread mushrooms out in a single layer on the prepared baking sheet. Roast mushrooms in the preheated oven for 15 minutes, stirring halfway through. Remove from oven and allow to cool.
                         <br/><br/>
                         Transfer cooked mushrooms to a food processor,pulsing 5 or 6 times and scraping down the sides of the bowl, until finely minced (or mince with a knife). Combine mushrooms, ground chicken,  and 1 1/4 teaspoons salt in a bowl; mix thoroughly, without overmixing. Form into 4 patties, about the circumference of the brioche buns, and place on squares of parchment paper or plastic wrap to prevent from sticking. You can oil your hands to handle meat if mixture is sticky. Refrigerate for at least 30 minutes for the patties to firm up.
                         <br/><br/>
                         When ready to cook the burgers, set an oven rack about 6 inches from the heat source and preheat the oven's broiler. Place jalapeño halves, cut side down, and green onions on a baking sheet. Drizzle with 1 teaspoon oil. 
                         <br/><br/>
                         Broil vegetables until charred, turning halfway through, about 10 minutes. Set aside.
                         <br/><br/>
                         Meanwhile, preheat a large cast iron skillet over medium-high heat. Brush skillet with 1 teaspoon oil and toast brioche buns, cut side down, until lightly browned, 2 to 4 minutes; set aside.
                         <br/><br/>
                         Lightly whisk eggs and water in a shallow dish. Add panko bread crumbs to a second dish. Gently dip burger patties into egg mixture, letting excess drip off. Press lightly into bread crumbs to coat both sides.
                         <br/><br/>
                         Heat remaining oil in a cast iron skillet over medium heat. Fry burgers until internal temperature reaches 165 degrees F (74 degrees C), about 3 minutes per side. Place patties on a plate lined with paper towels.
                         <br/><br/>
                         Spread a light layer of Bang Bang sauce on bottom buns. Add 2 charred jalapeño halves per bun. Add chicken patty and top with slaw and charred scallions. Top with cilantro and drizzle with more sauce.

					 </p>

				<div className="flex flex-row mt-8">
				   <Link to='/otherNancy'>
					<img alt='' id="dish-page-owner-image" className="w-14 md:w-20 h-14 md:h-20 mr-2 object-cover rounded-full cursor-pointer" src="../images/NancyJ.jpg"/>

					<div className="w-8/12 md:w-10/12 ml-2">
						<h2 id="dish-page-owner-name" className="text-gray-800 text-lg font-medium mb-2 cursor-pointer">Nancy </h2>
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
						<p className="font-regular text-gray-600">Outstanding! I prepped most of this recipe in the morning, which made putting it all together for dinner much easier. The flavors work so well together, and these burgers were well worth the effort. I really couldn't believe that I was eating a burger made with ground chicken. The roasted mushrooms added to the ground chicken made them so moist and juicy. We really enjoyed these, and will make them again.</p>
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

export default dishBurger;