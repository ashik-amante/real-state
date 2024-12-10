import { useContext } from "react";
import Navber from "../Shared/Navber/Navber";
import { AuthContext } from "../../Firebase/FirebaseProvider";


const Profile = () => {
    const { user, updateInfo } = useContext(AuthContext)
    console.log(user);
    const handleSubmit = e => {
        // e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const url = form.get('photo')
        updateInfo(name, url)
            .then(resut => {
                console.log(resut.user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="max-w-7xl mx-auto">
            <Navber></Navber>
            <div className="grid grid-cols-3 mt-20">
                <div className="grid col-span-2">
                    <div className="p-10 space-y-4">
                        <h1 className="text-5xl font-bold">{user?.displayName}</h1>
                        <p className="text-[18px] font-semibold">
                            Email : <span className="font-bold text-xl">{user?.email}</span>
                        </p>
                        <p className="">Photo Url:{user?.photoURL} </p>
                    </div>
                </div>
                <div className="grid col-span-1">
                    <div>
                        <img
                            src={user?.photoURL}
                            className=" rounded-lg " />
                    </div>
                </div>

            </div>


            {/* update Profile */}
            <div className="lg:w-1/2 md:w-3/4 mx-auto mt-20">
                <h1 className="text-5xl text-center">Update Your Profile</h1>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name </span>
                        </label>
                        <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phot Link/Url</span>
                        </label>
                        <input type="text" name="photo" placeholder="Url" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Profile;