import "./social-section.css"
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function SocialSection(){
    return(
        <>
            <div className="socialContainer">
                <div className="socialWrapper">
                    <div className="socialParagraph">
                        <p className="ap1">rem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla ligula sed urna sagittis, eu placerat massa condimentum. Nulla rutrum odio in lectus vestibulum aliquet. Suspendisse quis leo nec risus consectetur sodales. </p>
                        <p className="ap2">
                            Etiam dictum, felis consequat convallis elementum, quam lacus ultrices sapien, non iaculis erat urna quis augue. Suspendisse ultrices, est at aliquet venenatis, lorem erat venenatis tellus, sit amet dignissim eros nisl ac lectus.
                            Donec ultricies a enim condimentum tempus. Curabitur hendrerit odio massa, in malesuada urna consectetur a. Nam ut efficitur dolor, in commodo ex. Proin fermentum risus sed sollicitudin posuere. Morbi non tristique nisi, at vestibulum dui. Sed eget lectus lacinia, placerat lacus vitae, semper ipsum. Nulla blandit turpis eu consectetur hendrerit
                        </p>

                    </div>

                    <div className="socialNPic">
                        <h2 className="socialTxt">SOCIAL LIFE</h2>
                        <div className="box">
                            <div className="rbox">
                                <img src="assets/bh1.jpeg" className="socialImg" alt="Missing"/>
                            </div>
                        </div>
                        <div className="view">
                            <VisibilityIcon/>
                            View Gallery
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}