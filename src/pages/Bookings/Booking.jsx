

const Booking = ({ booking,handleDelete,handleConfirm }) => {

      const {_id,name,date,email,ammount,img,status} = booking;

     

      

    return (
        


             <tr >
                <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline btn-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                </th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={img} />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{email}</div>
                            <div className="font-bold">{name}</div>
                            
                        </div>
                    </div>
                </td>
                <td>
               
                
                    
                    
                    <span className="badge badge-ghost badge-sm">{ammount}</span>
                </td>
                <td>{date}</td>
                <th>
                    {
                        status === 'confirm'?<span>Confiremd</span> : <button onClick={() =>handleConfirm(_id)} className="btn btn-primary">Please confiremd</button>
                    }
                </th>
            </tr> 

        
    );
};

export default Booking;