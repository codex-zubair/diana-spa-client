import React from 'react';
import { Helmet } from 'react-helmet';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddServices = () => {



    // "name": "Oil Therapy",
    // "ratings": 4.5,
    // "thump_img":
    // "image": 
    // "intro": 
    // "details":
    // "price": 250

    const navigate = useNavigate();


    const addService = (event) => {




        event.preventDefault();

        const form = event.target;



        const name = form.name.value;
        const image = form.image.value;
        const intro = form.intro.value;
        const price = form.price.value;
        const ratings = 0;
        const thump_img = null;
        const details = null;

        console.log(name, image, intro, price);


        const service = {
            name,
            image,
            intro,
            price,
            ratings,
            thump_img,
            details


        }


        fetch('https://diana-spa-server.vercel.app/add-service', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                toast.success("Services Added Successfully!")
                setTimeout(navigate('/'),1500)
            })
            .catch(error => console.error(error))




    }




    return (
       <div>
       <h1 className='text-4xl my-5'>Add New Service</h1>
         <form onSubmit={addService} className='flex-col min-h-screen '>
            <div><Toaster/></div>


            <Helmet>
                <title>Diana-SPA Add Service</title>
            </Helmet>

            <div className='grid grid-cols-1 gap-3 p-14 md:w-11/12 mx-auto md:grid-cols-2 rounded-md bg-white border'>
            <input name='name' className=' bg-white border py-2 m-2' type="text" placeholder='Name of service' />
            <input name='image' className='bg-white border py-2 m-2' type="text" placeholder='Image url' />
            <input name='intro' className='bg-white border py-2 m-2' type="text" placeholder='Details of service' />
            <input name='price' className='bg-white border py-2 m-2' type="text" placeholder='Price' />
            </div>
            <button type='submit' className='btn mt-5'>Add Service</button>
        </form>
       </div>
    );
};

export default AddServices;