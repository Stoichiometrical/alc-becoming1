import "./gallery.css"
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navbar/NavBar";
import Mosaic from "../../components/mosaic/Mosaic";
import IntroHero from "../../components/introHero/IntroHero";

export default function Gallery(){
    return(
        <>
            <NavBar />
            <IntroHero title="GALLERY"/>
            <Mosaic/>
            <Footer/>
        </>
    )

}