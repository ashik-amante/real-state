import Navber from "../Shared/Navber/Navber";
import { useForm } from "react-hook-form"


const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => {
        const {email,password} = data
        console.log(data)
      }
    
    return (

        <div className="">
            <Navber></Navber>
           <h1 className="text-5xl font-bold text-center mt-20">Register now!</h1>
            <form  onSubmit={handleSubmit(onSubmit)} className="card-body lg:w-1/2 md:w-2/3 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text"  name="text" placeholder="Your name" className="input input-bordered"  
                         {...register("fullName", { required: false })}
                    />
                         {errors.fullName && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <input type="text" name="text" placeholder="Url" className="input input-bordered"  
                    {...register("url", { required: false })}/>
                    {errors.url && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered"  
                    {...register("email", { required: true })}/>
                    {errors.email && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered"  
                    {...register("password", { required: true })}/>
                    {errors.password && <span className="text-red-500">This field is required</span>}
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Register;