import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLoaderData } from 'react-router-dom';
import Banner from '../../Components/Banner/Banner';
import Gallery from '../../Components/Gallery/Gallery';
import ServiceCard from '../../Components/ServiceCard/ServiceCard';
import img1 from '../../Images/pac/pac1.jpg';
import img2 from '../../Images/pac/pac2.jpg';
import img3 from '../../Images/pac/pac3.jpg';

const Home = () => {

    const services = useLoaderData();

    return (
        <div>
            <Helmet>
                <title>Diana-SPA HOME</title>
            </Helmet>

            <Banner></Banner>

            <div className='flex flex-col items-center'>
            <h1 className='text-4xl my-10 font-bold'>OUR SERVICES</h1>
            
            <div className='  justify-center gap-5 flex flex-col md:flex-row'>
            {services.map((service,index)=> <ServiceCard key={index} service={service}></ServiceCard>)}
            </div>

            <Link to={'/services'} className='btn my-10 text-white'>SEE MORE</Link>


            <Gallery></Gallery>

            <h1 className='text-4xl border my-5 shadow-md'>TOP Spa Offers and Packages</h1>
            <div className='flex flex-col md:flex-row gap-5 mt-7 mb-5'>
                
                <hr />


                <div className=" mt-5 card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Healing Spa</h2>
                    <img src={img1} alt="" />
                    <p><strong>2 day 3 night</strong></p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>




                <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Resort & Spa</h2>
                    <img src={img2} alt="" />
                    <p><strong>Need refreshment? 5 day 6 night! </strong></p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>




                <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Blue Lagoon!</h2>
                    <img src={img3} alt="" />
                    <p><strong>Special Custom Package!</strong></p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
            </div>
            </div>

        </div>
    );
};

export default Home;