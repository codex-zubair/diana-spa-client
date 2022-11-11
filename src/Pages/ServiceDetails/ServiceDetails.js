import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import ReviewForm from '../../Components/ReviewForm/ReviewForm';

const ServiceDetails = () => {

    const service = useLoaderData();


    const { name, image, intro, price, _id, details, thump_img } = service[0];

   

    return (
        <div>
            <Helmet>
                <title>Diana-SPA Service Details</title>
            </Helmet>

            <div className="card lg:card-side shadow-xl my-5 mx-1">
            
                <figure><img src={thump_img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-5xl mb-3">{name}</h2>
                    <p className='text-2xl'><strong>{intro}</strong></p>
                    <p className='text-2xl font-semibold'>price: {price}$</p>
                    <p className='font-semibold'>{details}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Get Services</button>
                    </div>
                </div>
            </div>

            <div >
               

               <ReviewForm _id = {_id} image = {image}  serviceName = {name} serviceIntro = {intro} serviceImg = {thump_img}></ReviewForm>

                
            </div>
        </div>
    );
};

export default ServiceDetails;