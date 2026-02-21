import Featured from "../Featured/Featured";
import Footer from "../Footer/Footer";
import Hedar from "../Hedar/Hedar";
import TheHost from "../TheHost/TheHost";
import WhyTechWave from "../WhyTechWave/WhyTechWave";


const Home = () => {
    return (
        <div>
            <Hedar></Hedar>
            <WhyTechWave></WhyTechWave>
            <Featured></Featured>
            <TheHost></TheHost>
            
        </div>
    );
};

export default Home;