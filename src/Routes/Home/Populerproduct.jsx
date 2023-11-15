import pic1 from '../../products/1.png'
import pic2 from '../../products/2.png'
import pic3 from '../../products/3.png'
import pic4 from '../../products/4.png'
import pic5 from '../../products/5.png'
import pic6 from '../../products/6.png'

const Populerproduct = () => {
    return (
        <div>
            <div className='flex justify-center'>
                <div>
                    <p className="text-orange-500 ml-[300px] mb-2 text-2xl">Popular Products</p>
                    <h2 className="text-3xl font-bold ml-[250px] mb-2">Browse Our Products</h2>
                    <p className='w-[717px] h-[60px] mb-4'>the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                </div>
            </div>
            <div className='flex justify-center mb-10'>
                <div className="grid grid-cols-3 gap-20">

                    <div>
                        <img className='w-[156px] h-[153px]' src={pic1}></img>
                        <p className="font-bold">Car Engine Plug</p>
                        <p className="text-orange-500">$20.00</p>
                    </div>
                    <div>
                        <img className='w-[156px] h-[153px]' src={pic2}></img>
                        <p className="font-bold">Car Air Filter</p>
                        <p className="text-orange-500">$20.00</p>
                    </div>
                    <div>
                        <img className='w-[156px] h-[153px]' src={pic3}></img>
                        <p className="font-bold">Cools Led Light</p>
                        <p className="text-orange-500">$20.00</p>
                    </div>
                    <div>
                        <img className='w-[156px] h-[153px]' src={pic4}></img>
                        <p className="font-bold">Cools Led Light</p>
                        <p className="text-orange-500">$20.00</p>
                    </div>
                    <div>
                        <img className='w-[156px] h-[153px]' src={pic5}></img>
                        <p className="font-bold">Cools Led Light</p>
                        <p className="text-orange-500">$20.00</p>
                    </div>
                    <div>
                        <img className='w-[156px] h-[153px]' src={pic6}></img>
                        <p className="font-bold">Cools Led Light</p>
                        <p className="text-orange-500">$20.00</p>
                    </div>

                </div>
            </div>
            <button className='ml-[500px] btn btn-outline btn-accent'>More Products</button>
        </div>
    );
};

export default Populerproduct;