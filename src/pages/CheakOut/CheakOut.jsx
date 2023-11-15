import { useLoaderData } from "react-router-dom";


const CheakOut = () => {
    const data = useLoaderData();
    const { price, title, service_id, img } = data

    const handleCheakout = ev =>{
        ev.preventDefault();
        const Form = ev.target;
        const name = Form.name.value;
        const date = Form.date.value;
        const email = Form.email.value;
        const ammount = Form.ammount.value;
        const order ={
             name,
            date,
            email,
            ammount,
            img,
            service_id 

        };
        console.log(order)

        fetch('http://localhost:5000/bookings',{
            
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(order)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }



    return (
        <div>
            <h2 className="text-4xl font-bold text-center">{title}</h2>

            <form onSubmit={handleCheakout} className="card-body p-20">
                <div className="grid grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date"  className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Your Email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Ammount</span>
                        </label>
                        <input type="text" name="ammount"  defaultValue={`$${price}`} className="input input-bordered" required />
                       
                    </div>
                    </div>
                    <div className="form-control mt-6 ">
                       
                        
                        <input type="submit" value='Order Confirm' className="btn btn-error "></input>
                        
                    </div>
               
            </form>



        </div>
    );
};

export default CheakOut;