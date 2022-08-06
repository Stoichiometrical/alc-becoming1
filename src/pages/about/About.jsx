import "./about.css"
import NavBar from "../../components/navbar/NavBar";
import IntroHero from "../../components/introHero/IntroHero";
import Footer from "../../components/footer/Footer";
import {Boxed, Imaged} from "../../components/image/Image";

export default function About(){
    return(
        <>
            <NavBar/>
            <IntroHero title="CONTACT US" />
            <div className="boxedContainer">
                <Boxed wid="50%" height="370px" className="aboutBoxed" >
                    <Imaged imgWidth="105%" imgHeight="380px" style={{ backgroundColor:"#132e57", top: "-40px" }} />
                </Boxed>
            </div>

            <Footer/>

        </>
    )
}