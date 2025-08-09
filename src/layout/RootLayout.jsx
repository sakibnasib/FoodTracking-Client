
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../Components/NavBar/NavBar';
import Loading from '../Components/Loading/Loading';
import Footer from '../Components/Footer/Footer';

const RootLayOut = () => {
    const {state}=useNavigation();
    return (
        <div className=''>
           <Navbar/>
              {state === "loading" ? <Loading/>:<Outlet></Outlet>}
            <Footer/>
        </div>
    );
};

export default RootLayOut;