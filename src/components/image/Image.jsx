import "./image.css"
import VisibilityIcon from "@mui/icons-material/Visibility";
import styled from "styled-components"


export default function Images(props){
    const first= props.first;
    return(
        <div className="cbox">
            <div className="cboxed">
                <img src={props.img} className="cImg" alt="Missing"/>
                <span className="cname">{props.name}</span>
                <h2 className="cnameRole">{props.role}</h2>
            </div>
            { first ? <ViewJourney/> : " "  }
        </div>
    )
}
export function ViewJourney(props){
    return(
        <>
            <div className="viewJourney">
                <VisibilityIcon/>
                <span id="view" className={props.cname}>View My Journey</span>
            </div>
        </>
    )
}
 export const Boxed = styled.div`
      border: 2px solid #191970;
      border-radius:15px;
      padding:10px;
      width: ${(props) => props.wid};
     height: ${(props) => props.height};
     margin-left:4%;
      margin-right:2%;
      
`;

export const Imaged = styled.img.attrs(props => ({
    src: props.custImg
}))`
  width:${(props) => props.imgWidth};
  height: ${(props) => props.imgHeight};
  position:relative;
  border-radius:15px;
  //border: 3px solid black;
  //top:-11px;
  //left:29px;
  top:-25px;
  left:10px;
  
`

export function ImageMosaic(props){

    return(
        <div className="mbox" style={{ width:'{props.width}' }}>
            <Boxed width={props.wid} height={props.height}>
                <Imaged src={props.custImg} height={props.imgHeight} width={props.imgWidth}/>
            </Boxed>
        </div>
    )
}

export function ImageStory(props){
    return(
        <div className="imgStoryCont">
            <div className="cbox">
                <div className="cboxed">
                    <img src={props.img} className="cImg" alt="Missing"/>
                    <span className="cname">{props.name}</span>
                    <h2 className="cnameRole">{props.role}</h2>
                </div>
            </div>
        </div>

    )
}