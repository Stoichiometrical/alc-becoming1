import "./encounter.css"
import ImageStory, {ViewJourney} from "../image/Image";
import {details} from "../meetTeam/MeetTeam";


export default function Encounter(props){

    return(
        <>
            <div className="encounterContainer">
                <div className="encounterWrapper">
                    <span className="meetTxt">{props.meet}</span>
                </div>
                <div className="encounterSect">
                    <div className="er1">
                         <div className="p">
                             <ImageStory img={details.david.img}  role={details.david.role}  name={details.david.name} />
                             <ViewJourney className="view david" />
                         </div>

                        <div className="p">
                            <ImageStory img={details.arasen.img}  role={details.arasen.role}  name={details.arasen.name} />
                            <ViewJourney className="view arasen"/>
                        </div>
                        <div className="p">
                            <ImageStory img={details.tiam.img}  role={details.tiam.role}  name={details.tiam.name} />
                            <ViewJourney className="view team"/>
                        </div>

                    </div>
                    <div className="er2">
                        <div className="p">
                            <ImageStory img={details.amos.img}  role={details.amos.role}  name={details.amos.name} />
                            <ViewJourney className="view amos"/>
                        </div>

                        <div className="p">
                            <ImageStory img={details.rokia.img}  role={details.rokia.role}  name={details.rokia.name} />
                            <ViewJourney className="view rokia"/>
                        </div>

                        <div className="p">
                            <ImageStory img={details.reggie.img}  role={details.reggie.role}  name={details.reggie.name} />
                            <ViewJourney className="view reggie"/>
                        </div>
                    </div>


                </div>
            </div>

        </>
    )

}