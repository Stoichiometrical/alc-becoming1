import "./into-hero.css"

export default function IntroHero(props){
    return(
        <>
            <div className="introContainer">
                <div className="introWrapper">
                    <img src="assets/ba2.jpg" alt="Missing" className="introHeroImg"/>
                    <div className="introHeroTxtContainer">
                        <span className="smallHeroTxt">Hello, Holl, Bonjour</span>
                        <span className="introHeroTxt">{props.title}</span>
                    </div>
                </div>

            </div>

        </>
    )
}