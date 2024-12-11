
import { Outlet } from 'react-router-dom';
import Navber from '../Pages/Shared/Navber/Navber';
import Footer from '../Pages/Shared/footer/Footer';

const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;