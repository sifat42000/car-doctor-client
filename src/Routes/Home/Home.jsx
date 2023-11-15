import Banner from "./Banner";
import Chooseus from "./Chooseus";
import HomeAbout from "./HomeAbout";
import Populerproduct from "./Populerproduct";
import Servicearea from "./Servicearea";


const Home = () => {
    return (
        <div>
            <div className="mb-20">
            <Banner></Banner>
            </div>
            <div className="mb-20">
            <HomeAbout></HomeAbout>
            </div>
            <div className="mb-20">
            <Servicearea></Servicearea>
            </div>
            
            <Populerproduct></Populerproduct>
            <Chooseus></Chooseus>
            
            
        </div>
    );
};

export default Home;