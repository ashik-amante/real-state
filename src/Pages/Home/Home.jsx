import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import { Link } from "react-router-dom";



const Home = () => {
    const [houses, setHouses] = useState([])

    console.log(houses);
    useEffect(() => {
        fetch('estate.json')
            .then(res => res.json())
            .then(data => setHouses(data))
    }, [])
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl font-bold text-center mt-12">Properties Available</h1>
                <div className="grid grid-cols-3 mt-10 border  gap-5">
                    {
                        houses.map(house => <div key={house.id} >
                            <div className=" border rounded-xl  ">
                                <div className="flex justify-center items-center py-2">
                                    <img className="w-96 rounded-xl " src={house.image} alt="" />
                                </div>
                                <div className="mb-4 flex justify-around items-center mt-5">
                                    <p className="text-xl font-semibold">{house.segment_name}</p>
                                    <button className="   bg-gray-600 text-2xl px-8 py-2 rounded-lg font-bold text-white">{house.status}</button>
                                </div>
                                <hr />
                                <div className="p-4">
                                    <Link to={`/house/${house.id}`}><button className="btn w-full bg-green-500 text-white font-bold text-xl hover:bg-green-700">View Details</button></Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;