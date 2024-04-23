
import { Navbar } from '@material-tailwind/react';
import SideBar from '../components/SideBar';

export const TestSideBar = () => {
    return (
        <div>
            <Navbar color="blue" fixed/> 
            <SideBar/>
        </div>
    );
}

export default TestSideBar;
