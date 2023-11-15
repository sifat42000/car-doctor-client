import pic1 from '../../banner/1.jpg'
import pic2 from '../../banner/2.jpg'
import pic3 from '../../banner/3.jpg'
import pic4 from '../../banner/6.jpg'




const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={pic1} className="w-full" />

                <div className="absolute h-full flex justify-end  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                   <div className='text-white w-[463px] ml-8 mt-[200px]'>
                    <h2 className='text-6xl mb-5'>Affordable Price For Car Servicing</h2>
                    <p className='text-2xl mb-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                    <button className="btn btn-error pl-4">Discover More</button>
                    <button className="btn btn-outline btn-secondary ml-4">Latest Project</button>
                    </div>
                   </div>


                   </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={pic2} className="w-full" />
                   
                <div className="absolute h-full flex justify-end  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                   <div className='text-white w-[463px] ml-8 mt-[200px]'>
                    <h2 className='text-6xl mb-5'>Affordable Price For Car Servicing</h2>
                    <p className='text-2xl mb-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                    <button className="btn btn-error pl-4">Discover More</button>
                    <button className="btn btn-outline btn-secondary ml-4">Latest Project</button>
                    </div>
                   </div>


                   </div>
               


                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a> 
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={pic3} className="w-full" />

                <div className="absolute h-full flex justify-end  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                   <div className='text-white w-[463px] ml-8 mt-[200px]'>
                    <h2 className='text-6xl mb-5'>Affordable Price For Car Servicing</h2>
                    <p className='text-2xl mb-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                    <button className="btn btn-error pl-4">Discover More</button>
                    <button className="btn btn-outline btn-secondary ml-4">Latest Project</button>
                    </div>
                   </div>


                   </div>

            
                <div className="absolute h-full flex justify-end  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                   <div className='text-white w-[463px] ml-8 mt-[200px]'>
                    <h2 className='text-6xl mb-5'>Affordable Price For Car Servicing</h2>
                    <p className='text-2xl mb-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                    <button className="btn btn-error pl-4">Discover More</button>
                    <button className="btn btn-outline btn-secondary ml-4">Latest Project</button>
                    </div>
                   </div>
                


                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={pic4} className="w-full" />

                <div className="absolute h-full flex justify-end  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                   <div className='text-white w-[463px] ml-8 mt-[200px]'>
                    <h2 className='text-6xl mb-5'>Affordable Price For Car Servicing</h2>
                    <p className='text-2xl mb-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                    <button className="btn btn-error pl-4">Discover More</button>
                    <button className="btn btn-outline btn-secondary ml-4">Latest Project</button>
                    </div>
                   </div>


                   </div>


                <div className="absolute h-full flex justify-end  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                   <div className='text-white w-[463px] ml-8 mt-[200px]'>
                    <h2 className='text-6xl mb-5'>Affordable Price For Car Servicing</h2>
                    <p className='text-2xl mb-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                    <button className="btn btn-error pl-4">Discover More</button>
                    <button className="btn btn-outline btn-secondary ml-4">Latest Project</button>
                    </div>
                   </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
        </div>
        </div>
        

    );
};

export default Banner;

{/* <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={pic1} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={pic2} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={pic3} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={pic4} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div> */}