import "./journey.css"
import NavBar from "../../components/navbar/NavBar";
import HomeHero from "../../components/homeHero/HomeHero";
import MeetTeam from "../../components/meetTeam/MeetTeam";
import Footer from "../../components/footer/Footer";
import IntroHero from "../../components/introHero/IntroHero";
import ReadStory from "../../components/readStory/ReadStory";
import Encounter from "../../components/encounter/Encounter";

export default function Journey(){
    return(
        <>
            <NavBar/>
            <IntroHero title="OUR JOURNEY"/>
            {/*<MeetTeam meet="ENCOUNTER OUR STORIES" viewJourneyTag={true}  showViewJourneysTag={false} />*/}
            <Encounter meet="ENCOUNTER OUR STORIES"/>
            <ReadStory />
            <Footer />
        </>
    )
}