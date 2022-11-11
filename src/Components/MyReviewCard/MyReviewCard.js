import React from 'react';
import { Link } from 'react-router-dom';

const MyReviewCard = ({ myReview, deleteHandler }) => {


    const { review, serviceIntro, serviceName, serviceImg, _id ,time} = myReview;

    // ServiceID,
    // name,
    // photoURL,
    // review,
    // email,
    // serviceName,
    // serviceIntro,
    // serviceImg






    return (
        <div>


            <div className="flex bg-white text-black shadow-xl items-center mx-auto mt-5 card md:w-11/12">

                <div>
                    <img src={serviceImg} alt="" />
                    <h1 className='text-4xl'>{serviceName}</h1>
                </div>

                <div>
                    <p className='text-xl'>{serviceIntro}</p>
                    <h2 className='text-3xl  font-semibold mt-2'>Review</h2>
                    <p className='text-xl mt-3'>{review}</p>
                    <p className='text-xl mt-3'>{time}</p>

                    <div className='flex justify-evenly mt-5 mb-5'>
                        <button onClick={() => deleteHandler(_id)} className='btn bg-red-500 border-none text-white px-5'>Delete</button>
                        <Link to={`/update-review/${_id}`} className="btn px-10  border-none">Edit</Link>


                    </div>
                </div>


            </div>
        </div>
    );
};

export default MyReviewCard;