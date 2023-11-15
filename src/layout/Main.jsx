import { Outlet } from "react-router-dom";
import Nav from "../Routes/Home/Nav";
import Footer from "../Routes/Home/Footer";

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;