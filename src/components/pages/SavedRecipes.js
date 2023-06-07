
import React, { useEffect, useState } from 'react'
import CardItem from '../CardItemEditable/CardItemEditOp';
import CardItem2 from '../CardItem/index';
import { useAuth } from '../../context/AuthContext'

import { Link } from 'react-router-dom';
import { auth } from '../..';
import {Routes, Route, useNavigate} from 'react-router-dom';
import {getFirestore, query, collection, where, getDoc, doc, Timestamp} from 'firebase/firestore'




function Profile() {

    const [error, setError] = useState()
    const { currentUser, logout } = useAuth()
    const [profile, setProfile] = useState(null);

    const navigate = useNavigate();
    async function handleLogout() {
        setError("")

        try {
            await logout()
            navigate("/")
        } catch (e) {
            console.error(e)
            setError("Failed to log out")
        }
    }

    useEffect(() => {
        async function fetchProfile() {
            const db = getFirestore();
            const ref = doc(db, "Profile", currentUser.uid);
            const profile = (await getDoc(ref)).data();

            setProfile(profile);
        }

        fetchProfile();
    }, []);

    if (profile)
    console.log(profile.profilePicture);


    if(auth.currentUser && profile){
  return (
    <div className="bg-blue-50 profilexx">


    <div className="container mx-auto my-5 p-5">
        <div className="md:flex no-wrap md:-mx-2">

                {/* <!-- End of profile tab --> */}

            <div className="my-4"></div>

                {/* <!--saved posts--> */}
                <div className="bg-white p-3 shadow-sm rounded-sm ">

                    <div className="grid grid-cols-1">
                        <div>
                            <div className="flex items-center font-semibold text-gray-900 leading-8 mb-3">
                                <span clas="text-green-500">
                                    <svg className="h-5 stroke-current text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </span>
                                <span className="tracking-wide text-blue-600 ml-2 font-bold">Saved Posts</span>

                            </div>
                            <div id="self-posts" className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            <CardItem2
                              src='images/Brocoli.jpg'
                              dishName='Roasted Brocoli'
                              text='Roasted broccoli is easy to make and so much more flavorsome than boiled. My favorite part is the roasted sliced stem pieces.'
                              label='Healthy'
                              path='/dishBrocoli'
                            />
                            <CardItem2
                              src='images/Italian Chicken Marinade.jpg'
                              dishName='Italian Chicken Marinade'
                              text='This Italian dressing chicken marinade is a super simple but delicious way to add flavor before grilling.'
                              label='Lunch'
                              path='/dishItalianChicken'
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