import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateReview = () => {

    const reviewID = useLoaderData();

    const [review, setReview] = useState([]);


    // Navigate to my reviews
    const navigate = useNavigate();





    useEffect(() => {
        fetch(`https://diana-spa-server.vercel.app/my-review/edit/${reviewID}`)
            .then(res => res.json())
            .then(data => setReview(data[0]))
            .catch(error => console.log(error))
    }, [reviewID])



    const editHandler = (event) => {

        event.preventDefault();
        const form = event.target;
        const text = form.text.value;


        fetch(`https://diana-spa-server.vercel.app/my-review/${reviewID}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ text })
        })
            .then(res => res.json())
            .then(data => {
                fetch(`https://diana-spa-server.vercel.app/my-review/${review?.email}`)
                    .then(res => res.json())
                    .then(data => {
                        toast.success('Modified Successful!');
                        navigate('/ my-reviews');
                       
                    })
                    .catch(error => toast.error(error.message))
            })
            .catch(error => console.log(error))

    }

    return (
        <form onSubmit={editHandler} className="">

            <div><Toaster/></div>


            <Helmet>
                <title>Diana-SPA Update Review</title>
            </Helmet>


            <textarea name='text' defaultValue={review.review} rows="10" className="w-full rounded-md resize-none"></textarea>

            <button type='submit' className='btn my-9 mb-32'>Update Now!</button>
        </form>
    );
};

export default UpdateReview;