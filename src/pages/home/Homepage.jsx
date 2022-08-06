import "./home.css"
import NavBar from "../../components/navbar/NavBar";
import HomeHero from "../../components/homeHero/HomeHero";
import AboutSection from "../../components/aboutSection/AboutSection";
import SocialSection from "../../components/socialSection/SocialSection";
import MeetTeam from "../../components/meetTeam/MeetTeam";
import ExperienceSection from "../../components/experienceSection/ExperienceSection";
import Footer from "../../components/footer/Footer";

export default  function Home(){
    return(
        <>
            <NavBar />
            <HomeHero />
            <AboutSection/>
            <MeetTeam meet="MEET THE TEAM" showViewJourneysTag={true}/>
            <SocialSection/>
            <ExperienceSection/>
            <Footer/>

        </>
    )
}