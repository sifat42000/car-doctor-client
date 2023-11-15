import { Link } from "react-router-dom";


const Servicecard = ({service}) => {
    const {_id,title,img,price} = service;
    return (
        <div>

<div className='flex justify-center mb-9'>
               

                    <div>
                         <img className='w-[313px] h-[208px] mb-3' src={img}></img>
                        <p className="font-bold mb-3">{title}</p>
                         <p className="text-orange-500 mb-3">Price :${price}</p>

                         <Link to={`/cheakout/${_id}`}>
                         <button className="btn btn-primary">Book now</button>
                         </Link>

                    </div>
                    
            
        
        </div>
             


        </div>
    );
};

export default Servicecard;