import "./about-section.css"

export default function AboutSection(){
    return(
        <>
            <div className="aboutContainer">
                <div className="aboutWrapper">
                    <div className="aboutNPic">
                        <h2 className="aboutTxt">ABOUT</h2>
                        <div className="box">
                            <div className="abox">
                                <img src="assets/n21.jpg" className="aboutImg" alt="Missing"/>
                            </div>
                        </div>
                    </div>

                    <div className="aboutParagraph">
                        <p className="ap1">Hello, Holla, Bonjour, Bonzour, Salve, nǐn hǎo, olá, asalaam alaikum,
                            konnichiwa </p>
                        <p className="ap2">
                            We, students at the African Leadership College, welcome you to this website.
                            We are honored to present our journey and experience so far in Mauritius and
                            on campus.<br/>
                            You must be curious, right? Do not just be amazed by the beautiful pictures,
                            there is more fantastic content.
                        </p>
                </div>
            </div>

            </div>


        </>
    )
}