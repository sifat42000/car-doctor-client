import { useEffect, useState } from "react";
// import { AuthContext } from "../../Authprovider/Authprovider";
import Booking from "./Booking";


const Bookings = () => {

    //   const {user} = useContext(AuthContext)

    const [bookings, setBooking] = useState([])



    const uri = 'http://localhost:5000/bookings'

    // ?email=${user?.email}

    useEffect(() => {
        fetch(uri)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [])


    const handleDelete = id =>{

        const procced = confirm('Are you sure deleted this product');
        if(procced){
          fetch(`http://localhost:5000/bookings/${id}`,{
              method: 'DELETE'
          })

          .then(res => res.json())
          .then(data => {
              console.log(data);
              if(data.deletedCount > 0){
                  alert('delted successfull')
                  const remaining = bookings.filter(booking => booking._id !== id);
                  setBooking(remaining)
              }

          })
        }
    }

    const handleConfirm = id =>{
        fetch(`http://localhost:5000/bookings/${id}`,{
          method: 'PATCH',
          headers: {
              'content-type':'application/json'
          },

          body: JSON.stringify({
              status: 'confirm'
          })
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.modifiedCount > 0){
              const remaining = bookings.filter(booking => booking._id !== id);

              const updated = bookings.find(booking => booking._id === id);
              updated.status = 'confirm'
              const newBooking = [updated,...remaining];
              setBooking(newBooking)
          }
        })
    }


    return (
        <div>
            <p>Booking lenght = {bookings.length}</p>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead >
                        <tr>
                            <th>
                               
                            </th>
                            <th>Image</th>
                            <th>Price</th>
                            <th> Date</th>
                            <th>Status </th>

                        </tr>
                    </thead>

                    <tbody >
                        {
                            bookings.map(booking => <Booking key={booking._id} booking={booking} 
                            handleDelete={handleDelete}
                            handleConfirm={handleConfirm}
                            ></Booking>)
                        }
                    </tbody>


                </table>
            </div>



        </div>
    );
};

export default Bookings;




