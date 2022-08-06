import "./footer.css"
import {MDBIcon} from "mdb-react-ui-kit";


export default function Footer(){
    return(
        <>

            <div className="footContainer">
                <hr/>
                <div className="footWrapper">
                    <div className="footlogo">
                        <img src="assets/logo.png" alt=""/>
                        <div className="copr">
                                <span> Copyright 2022.<br/>All Rights Reserved</span>
                                <div className="ico">
                                    <MDBIcon fab icon="twitter"  className="iconItem"/>
                                    <MDBIcon fab icon="facebook" className="iconItem" />
                                    <MDBIcon fab icon="instagram" className="iconItem" />
                                </div>
                        </div>
                    </div>
                    <div className="footAddress">
                        <div className="privacyP">
                            <ul className="footList">
                                <li>Privacy Policy</li>
                                <li>Terms and Conditions</li>
                            </ul>
                        </div>

                        <div className="footCampus">
                        <ul className="footList">
                            <li>+23058517209</li>
                            <li>ALC Campus </li>
                            <li>PowderMill Road,21001</li>
                        </ul>
                    </div>

                    </div>


                </div>
            </div>
        </>
    )
}