import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';







const ServiceCard = ({ service }) => {


    const { name, ratings, image, intro, price, _id } = service;

    return (

        <div>

            <div className="card w-96 text-black bg-white shadow-xl ">
                <figure className="px-2 pt-10">
                    <PhotoProvider>
                        <PhotoView src={image}>
                            <img src={image} alt="Shoes" className="rounded-md w-full h-56" />
                        </PhotoView>
                    </PhotoProvider>
                </figure>

                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl font-bold">{name}</h2>
                    <p className='h-20'>{intro.slice(0, 97)} ...<Link to={`/service-details/${_id}`}><strong>Read more</strong></Link></p>
                    <p>{ratings}</p>
                    <p><strong>Price: {price}$</strong></p>
                </div>
                <div className="card-actions flex justify-end">
                    <Link to={`/service-details/${_id}`} className="btn w-full rounded-none px-10 py-1 font-semibold">View Details</Link>
                </div>
            </div>

        </div>
    );
};

export default ServiceCard;