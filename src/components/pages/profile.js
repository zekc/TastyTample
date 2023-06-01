import React from 'react';
import CardItem from '../CardItemEditable/CardItemEditOp';
import CardItem2 from '../CardItem/index';

import { Link } from 'react-router-dom';
import { auth } from '../..';
import {Routes, Route, useNavigate} from 'react-router-dom';




function Profile() {

    const navigate = useNavigate();
    if(auth.currentUser){
  return (
    <div class="bg-blue-50 profilexx">


    <div class="container mx-auto my-5 p-5">
        <div class="md:flex no-wrap md:-mx-2">
            {/* <!-- Left Side --> */}
            <div class="w-full md:w-3/12 md:mx-2">
                {/* <!-- Profile Card --> */}
                <div class="bg-white p-3 border-t-4 border-blue-600">
                    <div class="image overflow-hidden">
                        <img id="self-profile-image" class="h-auto w-full mx-auto"
                            src="../assets/images/default-profile.jpeg"
                            alt=""/>
                    </div>
                    <h1 id="self-name" class="text-gray-900 font-medium text-xl leading-8 my-1">Unknown</h1>
                    <p id="self-caption" class="text-sm text-gray-500 hover:text-gray-600 leading-6 font-regular">No Caption</p>
                    <ul
                        class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                        <li class="flex items-center py-3 font-regular">
                            <span>Level</span>
                            <span class="ml-auto"><span id="self-badge"
                                    class="py-1 px-2 rounded text-white text-sm">Novice</span></span>
                        </li>
                        <li class="flex items-center py-3 font-regular">
                            <span>Member since</span>
                            <span id="self-created-at" class="ml-auto">Nov 07, 2016</span>
                        </li>
                    </ul>
                    <div class="flex mx-auto justify-center flex-wrap gap-6 mt-2">
                        <button id="self-logout" onClick="handleLogout()" type="button" class="bg-blue-600 hover:bg-blue-700 text-white text-base font-regular py-2 px-4 rounded">
                          Logout
                        </button>
                      </div>
                </div>
                {/* <!-- End of profile card --> */}
            </div>
            <div class="my-4"></div>
            {/* <!-- Right Side --> */}
            <div class="w-full md:w-9/12 mx-2 h-64">
                {/* <!-- Profile tab --> */}
                {/* <!-- About Section --> */}
                <div class="bg-white p-3 shadow-sm rounded-sm">
                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span clas="text-green-500">
                            <svg class="h-5 stroke-current text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                >
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <span class="tracking-wide text-blue-600 font-bold">About</span>
                    </div>
                    <div class="text-gray-700">
                        <div class="grid md:grid-cols-2 text-sm">
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-medium">Full Name</div>
                                <div id="self-about-name" class="px-4 py-2 font-regular">Unknown</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-medium">Gender</div>
                                <div id="self-about-gender" class="px-4 py-2 font-regular">Unknown</div>
                            </div>
                           
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-medium">Email</div>
                                <div class="px-4 py-2 font-regular">
                                    <a id="self-about-email" class="text-blue-600" href="mailto:jane@example.com">Unknown</a>
                                </div>
                            </div>

                            <Link to='/follower'>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-medium">Followers</div>
                                <div id="self-about-location" class="px-4 py-2 font-regular">250</div>
                            </div>
                            </Link>

                            <Link to='/following'>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-medium">Followings</div>
                                <div id="self-about-location" class="px-4 py-2 font-regular">40k</div>
                            </div>
                            </Link>

                        </div>
                    </div>
                    <Link to='/editProfile'>
                    <button
                        class="modal-open block w-full text-blue-600 text-base font-medium rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">Edit Profile</button></Link>
                </div>
                {/* <!-- End of about section --> */}

                <div class="my-4"></div>

                {/* <!-- Experience and education --> */}
                <div class="bg-white p-3 shadow-sm rounded-sm ">

                    <div class="grid grid-cols-1">
                        <div>
                            <div class="flex items-center font-semibold text-gray-900 leading-8 mb-3">
                                <span clas="text-green-500">
                                    <svg class="h-5 stroke-current text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </span>
                                <span class="tracking-wide text-blue-600 ml-2 font-bold">Posts</span>
                                <Link class="post-modal-open flex flex-row items-center bg-blue-600 hover:bg-blue-700 text-white text-base font-regular py-2 px-4 rounded ml-auto" to='/createRecipe'>

                                <button type="button" class="post-modal-open flex flex-row items-center bg-blue-600 hover:bg-blue-700 text-white text-base font-regular py-2 px-4 rounded ml-auto">

                                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                                    Create Post
                                </button>
                                </Link>
                            </div>
                            <div id="self-posts" class="grid grid-cols-1 md:grid-cols-3 gap-3">  
                            <CardItem
                              src='images/img-9.jpg'
                              text='Stuffed with Alexandrian cromb'
                              label='Egypt'
                              path='/dish'
                              pathEdit='/editRecipe'
                            />
                            <CardItem
                              src='images/img-9.jpg'
                              text='Stuffed with Alexandrian cromb'
                              label='Egypt'
                              path='/dish'
                              pathEdit='/editRecipe'
                            />
                            <CardItem
                              src='images/img-9.jpg'
                              text='Stuffed with Alexandrian cromb'
                              label='Egypt'
                              path='/dish'
                              pathEdit='/editRecipe'
                            />
                            <CardItem
                              src='images/img-9.jpg'
                              text='Stuffed with Alexandrian cromb'
                              label='Egypt'
                              path='/dish'
                              pathEdit='/editRecipe'
                            />
                            </div>
                        </div>
                        
                    </div>
                    {/* <!-- End of Experience and education grid --> */}
                
                
                
                </div>
                
                {/* <!-- End of profile tab --> */}
            </div>
            <div class="my-4"></div>

                {/* <!--saved posts--> */}
                <div class="bg-white p-3 shadow-sm rounded-sm ">

                    <div class="grid grid-cols-1">
                        <div>
                            <div class="flex items-center font-semibold text-gray-900 leading-8 mb-3">
                                <span clas="text-green-500">
                                    <svg class="h-5 stroke-current text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </span>
                                <span class="tracking-wide text-blue-600 ml-2 font-bold">Saved Posts</span>
                                
                            </div>
                            <div id="self-posts" class="grid grid-cols-1 md:grid-cols-3 gap-3">  
                            <CardItem2
                              src='images/img-8.jpg'
                              text='Stuffed with Alexandrian cromb'
                              label='Egypt'
                              path='/dish'
                            />
                            <CardItem2
                              src='images/img-8.jpg'
                              text='Stuffed with Alexandrian cromb'
                              label='Egypt'
                              path='/dish'
                            />
                            <CardItem2
                              src='images/img-8.jpg'
                              text='Stuffed with Alexandrian cromb'
                              label='Egypt'
                              path='/dish'
                            />
                           
                            </div>
                        </div>
                        
                    </div>
                    {/* <!-- End of saved posts grid --> */}
                
                
                
                </div>
                
                {/* <!-- End of profile tab --> */}
            
        </div>
    </div>

</div>
  );}else{
   
   
  }
}

export default Profile;