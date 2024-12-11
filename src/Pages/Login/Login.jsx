import { useForm } from "react-hook-form"
import { AuthContext } from "../../Firebase/FirebaseProvider";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../Firebase/Firebase.config";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const {logIn,googleSignIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const [loginError,setLoginerror] = useState(null)
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => {
        setLoginerror('')
        const {email,password} = data;
        // log in
        logIn(email,password)
        .then(result=>{
            toast.success('Login Successfull  !!')
            navigate('/')
            console.log(result.user);
        })
        .catch(error=>{
            setLoginerror('Wrong email/password')
            console.log(error);
        })

       
        console.log(data)
      }
       // google
       const handlegoogle = ()=>{
        googleSignIn(auth)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error);
        })
    }
   

    return (
        <div className="">
            <h1 className="text-5xl font-bold text-center mt-20">Please Log In!</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body lg:w-1/2 md:w-2/3 mx-auto">
              
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered"
                        {...register("email", { required: true })} />
                    {errors.email && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered"
                        {...register("password", { required: true })} />
                    {errors.password && <span className="text-red-500">This field is required</span>}
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
                <p className="px-4 mt-2">Do not have an account? <Link to='/register'><button className="ml-4 font-bold text-green-500 text-[17px]">Register</button></Link> </p>
                {
                    loginError && <p className="text-red-600">{loginError}</p>
                }

            </form>
            <div onClick={handlegoogle} className="mb-20 px-20 justify-center flex gap-4">
                <button className="btn bg-green-500 hover:bg-green-600 text-white font-bold">Log In With Google </button>
                <button  className="btn bg-[#4bcffa] hover:bg-[#0fbcf9] text-white font-bold">Log In With Github </button>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;