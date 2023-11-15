import pic1 from '../../about_us/parts.jpg'
import pic2 from '../../about_us/person.jpg'

const HomeAbout = () => {
   
    return (
        <div className='flex relative'>
            <div className='ml-28'>
                <img className='w-80 h-80' src={pic2}></img>
                <img className='w-60 h-56 border-white absolute ml-44 -mt-36 border-8' src={pic1}></img>
            </div>
            <div className='ml-60'>
                <p className='mb-2 w-60'>About Us</p>

                <h2 className='text-3xl font-bold mb-3 w-60'>We are qualified & of experience in this field</h2>

                <p className='mb-2 w-80'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>

                <p className='w-80 mb-3'>the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                <button className="btn btn-error">Get More Info</button>
            </div>

            
        </div>
    );
};

export default HomeAbout;
