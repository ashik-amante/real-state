import { useLoaderData, useParams } from "react-router-dom";


const HouseDetails = () => {
    const {id} = useParams()
    const houses = useLoaderData()
    console.log(houses);
    return (
        <div>
            <p>id : {id} </p>
        </div>
    );
};

export default HouseDetails;