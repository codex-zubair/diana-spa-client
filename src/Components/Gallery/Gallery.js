import React from 'react';
import img1 from '../../Images/galarry/1.jpg';
import img2 from '../../Images/galarry/2.jpg';
import img3 from '../../Images/galarry/sq3.jpg';
import img4 from '../../Images/galarry/sq4.jpg';
import img5 from '../../Images/galarry/fully.jpg';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Gallery = () => {
    return (



        <div className='md:grid grid-cols-4'>
            <PhotoProvider>
                <PhotoView src={img1}>
                    <div><img src={img1} alt="" /></div>
                </PhotoView>
            </PhotoProvider>



            <PhotoProvider>
                <PhotoView src={img2}>
                    <div className=''> <img src={img2} alt="" /></div>
                </PhotoView>
            </PhotoProvider>


            <div className='md:col-span-2'>
                <div className='md:grid grid-cols-2 gap-2'>

                    <PhotoProvider>
                        <PhotoView src={img3}>
                            <div>
                                <img src={img3} alt="" />
                            </div>
                        </PhotoView>
                    </PhotoProvider>

                    <PhotoProvider>
                        <PhotoView src={img4}>
                            <div>
                                <img src={img4} alt="" />
                            </div>
                        </PhotoView>
                    </PhotoProvider>
                </div>
                
                <PhotoProvider>
                    <PhotoView src={img5}>
                        <div className='mt-2'><img src={img5} alt="" /></div>
                    </PhotoView>
                </PhotoProvider>

            </div>

        </div>
    );
};

export default Gallery;