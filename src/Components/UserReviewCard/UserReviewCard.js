import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { AuthUserContext } from '../../Context/UserContext';

const UserReviewCard = ({ userReview }) => {


    // auth context
    const { name, photoURL, review, time, userImg } = userReview;



    //     <div className=" my-2 mx-auto border flex justify-around items-center shadow-xl">
    //     <div className="flex items-center justify-between bg-base-100 border w-full px-5">
    //         <div className='flex items-center'>
    //         <img className='mx-2 rounded-full' src={photoURL} alt="img" />
    //             <h2 className="card-title px-10">{name}</h2>
    //         </div>
    //         <div className="card-actions flex justify-around w-full">
    //         <p >{review}</p>
    //             <p>{time}</p>
    //         </div>
    //     </div>

    // </div> :
    // <div className=" my-2 mx-auto border flex justify-around items-center shadow-xl">
    //     <div className="flex items-center justify-between bg-base-100 border w-full px-5">
    //         <div className='flex items-center'>
    //             <FaUser ></FaUser>
    //             <h2 className="card-title px-10">{name}</h2>
    //         </div>
    //         <div className="card-actions flex justify-around w-full relative">
    //         <p className='w-full  bg-red-400 absolute'>{review}</p>
    //             <p>{time}</p>
    //         </div>
    //     </div>
    // </div>



    console.log(time);
    return (

        userImg ? <div>
            <div className="card bg-white my-4 flex justify-around w-full">

                <div className='flex ml-4 items-center justify-start gap-5'>
                    <img className='mx-2 rounded-full' src={photoURL} alt="img" />
                    <h2 className="card-title px-10">{name}</h2>
                </div>

                <p className='border'>{review}</p>
                <p className='border bg-lime-50 mt-5'>{time}</p>
            </div>

        </div> :

            <div>
                <div className="card bg-white my-4 flex justify-around w-full">

                    <div className='flex items-center ml-4 justify-start gap-5'>
                        <FaUser ></FaUser>
                        <h2 className="card-title px-10">{name}</h2>
                    </div>

                    <p className='border'>{review}</p>
                    <p className='border bg-lime-50 mt-5'>{time}</p>
                </div>
            </div>



    );
};

export default UserReviewCard;