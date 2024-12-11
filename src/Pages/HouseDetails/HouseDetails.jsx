import { useLoaderData, useParams } from "react-router-dom";

const HouseDetails = () => {
    const { id } = useParams()
    const idInt = parseInt(id)
    const houses = useLoaderData()
    console.log(houses);
    const house = houses.find(house => house.id === idInt)
    console.log(house);
    const { image, description, estate_title, price, status, area, facilities, location } = house
    return (
        <div className=" max-w-6xl mx-auto mt-20 mb-32">
            <div className="flex gap-10 w-96 ">
                <img src={image} alt="" />
                <img src={image} alt="" />
                <img src={image} alt="" />
            </div>
            <h1 className="text-5xl text-center font-bold mt-10" >For {status}</h1>
            <div className="grid grid-cols-2 gap-10 mt-20">
                <div className="grid col-span-1">
                    <h1 className="font-bold text-xl">{estate_title}</h1>
                    <p>Description : {description}</p>
                    <p>Location : {location}</p>
                </div>
                <div className="grid col-span-1">
                    {/* <h1>Price {price}</h1>
                    <p>Area : {area}</p>
                    <p>Location  : {location}</p> */}
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>                             
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>  
                                    <td className="text-xl font-bold">Price</td>
                                    <td className="text-[17px] font-semibold">{price}</td>
                                    
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <td  className="text-xl font-bold">Area</td>
                                    <td className="text-[17px] font-semibold">{area}</td>
                                    
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    
                                    <td  className="text-xl font-bold">Facilities</td>
                                    <td className="text-[17px] font-semibold">{
                                            facilities.map((fac,ind)=> <ul key={ind}> {fac}</ul> )
                                        }</td>
                                    
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HouseDetails;