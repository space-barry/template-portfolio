// there are 3 ways to create a component
// method 1: default functional component
// method 2: arrow function component
// method 3: default return component

// method 2:


import profileImage from '../assets/images/img.png'
export const HeroSection = () => {
    return(
        <>
            <div className="row">
                <div className="container col-sm-12 col-md-12 col-lg-6">
                    <h1 className={"text-heading"}>Hi, Fahad here</h1>
                    <p className={"text-subheading"}>Senior Software Engineer</p>
                </div>
                <div className="container col-sm-12 col-md-12 col-lg-6">
                    <img src={profileImage} alt=""/>
                </div>
            </div>
        </>
    )
}