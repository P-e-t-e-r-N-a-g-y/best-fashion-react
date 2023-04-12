import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Slideshow from "../components/Slideshow";

function Home(){
    return (
        <div>
            <Navbar />
            <Slideshow/>
        </div> 
    );
}

export default Home;