import "./read-story.css"
import Images from "../image/Image";
import {details} from "../meetTeam/MeetTeam";
import {MDBIcon} from "mdb-react-ui-kit";
import {removeStory} from "../encounter/storyFunctions";
export default function ReadStory(props){

    return(
        <>
            <div className="readContainer">
                <div className="readWrapper">
                    <MDBIcon fas icon="times-circle" className="iconX" sx={{ fontSize:"2em" }}  />
                    <div className="readImgSide">
                        <Images img={details.david.img}  role={details.david.role}  name={details.david.name}  className="" />
                    </div>
                    <div className="readText">{details.david.story}</div>
                </div>
            </div>

        </>
    )
}






