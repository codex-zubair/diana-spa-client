import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import toast, { Toaster } from 'react-hot-toast';
import Loader from '../../Components/Loader/Loader';
import MyReviewCard from '../../Components/MyReviewCard/MyReviewCard';
import { AuthUserContext } from '../../Context/UserContext';

const MyReviews = () => {

    // Auth User
    const { user, logout } = useContext(AuthUserContext);


    // set reviews all specific user.
    const [reviews, setReviews] = useState([]);


    // conditional Review checker
    const review = reviews[0];


    // Loader for heart
    const [load, setLoad] = useState(false);


    //! Change state to recall for error handling
    const [change, setChange] = useState(true);






    useEffect(() => {
        setLoad(true);
        fetch(`https://diana-spa-server.vercel.app/my-review/${user?.email}`, {
            headers: { authorization: `Bearer ${localStorage.getItem('spa-token')}` }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    toast.error(`unauthorized! ${res.status}`)
                    logout();

                }
                return res.json()
            })
            .then(data => {
                setReviews(data.reverse())
                setLoad(false);
            })
            .catch(error => toast.error(error.message))
    }, [change])



    // ServiceID,
    // name,
    // photoURL,
    // review,
    // email,
    // serviceName,
    // serviceIntro,
    // serviceImg



    // Delete Method with UPDATE
    const deleteHandler = (id) => {
        const result = window.confirm('do you really want to delete?');
        if (result) {
            fetch(`https://diana-spa-server.vercel.app/my-review/${id}`, {
                method: "DELETE",
                headers: { authorization: `Bearer ${localStorage.getItem('spa-token')}` }

            })
                .then(res => res.json())
                .then(() => {
                    fetch(`https://diana-spa-server.vercel.app/my-review/${user?.email}`)
                        .then(res => res.json())
                        .then(data => {
                            setChange(!change)
                            // setReviews(data.reverse())
                            toast.success("Deleted SuccessFul!")


                        })
                        .catch(error => {
                            toast.error(error.message)
                        })
                })
        }
        else {
            return;
        }
    }






    return (
        load ? <Loader></Loader>
            :
            <div className='text-black'>

                <div><Toaster /></div>


                <Helmet>
                    <title>Diana-SPA My Review</title>
                </Helmet>

                {
                    review?.name ? <div className='min-h-screen flex flex-col items-center gap-5 mb-5'>
                        {reviews.map(review => <MyReviewCard key={review?._id} deleteHandler={deleteHandler} myReview={review}></MyReviewCard>)}
                    </div> :
                        <div className=' bg-red-400'>
                            <h1 className='my-96 text-5xl'>No reviews were added!</h1>
                        </div>
                }
            </div>
    );
};

export default MyReviews;