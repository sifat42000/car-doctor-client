import { useEffect, useState } from "react";
import Servicecard from "./Servicecard";


const Servicearea = () => {

    const [services, SetServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => SetServices(data))
    },[])


    return (
        <div>
            <div className="flex justify-center mb-10">
                <div>
                    <h2 className="text-3xl font-bold ml-48 mb-3">Our Service Area</h2>
                    <p className="w-[717px]">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                </div>
            </div>

            <div className="grid grid-cols-3">
            {
                services.map(service => <Servicecard key={services._id} service={service}></Servicecard>)
            }
            </div>

            <div className="flex justify-center">
            <button className="btn btn-outline btn-secondary ">More Services</button>
            </div>

            

        </div>
    );
};

export default Servicearea;

