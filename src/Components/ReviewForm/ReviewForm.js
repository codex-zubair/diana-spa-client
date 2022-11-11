import React, { useContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { AuthUserContext } from '../../Context/UserContext';
import UserReviewCard from '../UserReviewCard/UserReviewCard';

const ReviewForm = ({ _id, serviceName, serviceIntro, serviceImg, image }) => {

    //Auth Context
    const { user, signUpByGoogle } = useContext(AuthUserContext);


    // using location to navigate back
    const location = useLocation();


    // time taking.
    const time = String(new Date());
















    // Review system
    const [userReview, setUserReview] = useState([{}]);






    // Loading data when user coming to visit review section
    useEffect(() => {
        fetch(`https://diana-spa-server.vercel.app/review/${_id}`)
            .then(res => res.json())
            .then(data => setUserReview(data))
            .catch(error => console.log(error))
    }, [])




    // !reverse array
    var reverseReview = [...userReview].reverse();





    const submitReview = (event) => {

        const ServiceID = _id;

        event.preventDefault();
        // getting the main form.
        const form = event.target;

        const name = user?.displayName;
        const email = user?.email;
        const photoURL = user?.photoURL;
        const review = form.review.value;
        const userImg = user?.photoURL;


        // Creating A Review OBJECT to send into database
        const reviewObject =
        {
            ServiceID,
            name,
            photoURL,
            review,
            email,
            serviceName,
            serviceIntro,
            serviceImg,
            time,
            userImg


        }


        // Set user review and photo
        setUserReview([...userReview, reviewObject]);




        // Storing user Review into DATA BASE
        fetch('https://diana-spa-server.vercel.app/review', {

            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(reviewObject)

        })
            .then(response => response.json())
            .then(data => {
                if (data.acknowledged) {
                    toast("Thanks For Review!", {
                        icon: '😊',
                    })
                    event.target.reset();
                }
            })
            .catch(error => console.log(error))
    }




    // sign up by google start
    const signUpByGoogleHandler = () => {
        signUpByGoogle()
            .then(() => {
            })
            .catch(error => toast.error(error.message))
    }
    // sign up by google End





    return (
        <div className='bg-slate-200'>
            <div><Toaster /></div>
            {user ? <form onSubmit={submitReview}>
                <div className="hero min-h-screen">
                    <img className='hidden md:flex' src={image} alt="" />
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center  lg:text-left">
                            <h1 className="md:text-5xl text-3xl text-black font-bold md:text-white">Let us know about our services</h1>
                            <p className="py-6 md:text-white">Our GOAL is to give you best services.</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">

                                <div className="form-control">

                                    <textarea name='review' className="textarea" placeholder="Comment"></textarea>

                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">Comment</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form> :
                <form onSubmit={submitReview}>
                    <div className="hero min-h-screen">
                        <img className='hidden md:flex' src={image} alt="" />
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className="text-center lg:text-left">
                                <h1 className="text-3xl md:text-5xl text-black font-bold md:text-white">Let us know about our services</h1>
                                <p className="py-6 text-black md:text-white">Our GOAL is to give you best services.</p>
                            </div>
                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <div className="card-body">


                                    <div className="form-control mt-6">
                                        <Link to='/login' state={{ from: location }} replace className="btn btn-primary my-2">Please Login to add Review</Link>
                                        <button onClick={signUpByGoogleHandler} className='btn btn-outline'><FaGoogle className='mr-2' /> Login with google</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>}
            {/* user Reviews Start */}
            <div className='mb-5  mx-2'>
                <h1 className='text-4xl text-black bg-slate-300 py-5 mb-5'>USER Reviews</h1>

                {reverseReview.map((review, index) => <UserReviewCard key={index} userReview={review}></UserReviewCard>)}

            </div>

        </div>
    );
};

export default ReviewForm;