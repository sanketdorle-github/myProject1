import { Outlet } from 'react-router-dom';
import HeaderStyle2 from '../Components/Header/HeaderStyle2';
import NavBar from '../Components/Header/NavBar';
import Footer from '../Components/Footer/Footer';

const Main = () => {
    return (
        <div className='main-page-area'>
            {/* <HeaderStyle2></HeaderStyle2> */}
            <NavBar></NavBar>
            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;