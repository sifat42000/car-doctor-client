import { Link } from 'react-router-dom';
import img from '../../login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Authprovider/Authprovider';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const handleSingUp = e =>{

        

        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,password,email)

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })

        .catch(error =>{
           console.log(error)
        })

    }


    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content flex-col lg:flex-row gap-24">
                <div className="text-center lg:text-left">
                     <img src={img}></img>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 -top-20">
                    
                    <form onSubmit={handleSingUp}  className="card-body">
                    <p className='text-3xl font-bold text-center '>Sign Up</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name='name' placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Your password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                        
                        <input type='submit' value='Sign Up' className="btn btn-error "></input>

                        </div>

                        <p>Have an account? <Link className='text-orange-600 font-bold' to='/loging'>SingIn</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;