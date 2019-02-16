import React from 'react'
import html5Logo from '../about/html5.png'
import css3Logo from '../about/css3.png'
import jsLogo from '../about/javascript.png'
import gitLogo from '../about/git.png'
import illustratorLogo from '../about/illustrator.jpg'
import sketchLogo from '../about/sketch.jpg'
import photoshopLogo from '../about/photoshop.png'
import invisionLogo from '../about/invision.png'
import profilePhoto from '../../assets/kate-sohng.jpg'

export default class AboutView extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row about">
                        <div className="col-12 align-self-center text-center">
                            <h1>About Kate Sohng</h1>
                            <p>Producing reponsive, accessible rich websites for exceptional user experience</p>
                        </div>
                    </div>
                </div>
                <main className="about-main">
                    <div className="container profile">
                        <div className="row">
                            <div className="col-lg-2 offset-lg-2 col-12"><img width={150} alt="a photo of Kate Sohng" src={profilePhoto} /></div>
                            <div className="col-lg-6 col-12 text">I am a front-end developer, a graduate from Interactive Media Design of the University of Washington. I have 2 years commercial experience providing graphic design and front-end development in South Korea. Since then, I have been focusing on producing high-quality responsive websites and exceptional user experience.</div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 text">
                                <p>Please approach me when you need a developer who can provide:</p>
                                <div className="logo">
                                    <img width={53} alt="HTML5 logo" src={html5Logo} />
                                    <img width={53} alt="CSS3 logo" src={css3Logo} />
                                    <img width={53} alt="JavaScript logo" src={jsLogo} />
                                    <img width={53} alt="Git logo" src={gitLogo} />
                                </div>
                                <ul>
                                    <li>Responsive HTML5/CSS3 (Bootstrap)</li>
                                    <li>JavaScript (ES6, React, NPM)</li>
                                    <li>Version Control(Git)</li>
                                </ul>
                                <p>Also, I have experienced as a UX researcher and designer from the Interactive Media Design program from the University of Washington. Furthermore, I had the half-year of internship from the POC laboratory of the University of Washington.</p>
                                <ul>
                                    <li>UX Research and Design</li>
                                    <li>Interaction and Interface Design</li>
                                    <li>Wireframing and Prototyping</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 text">
                                <p>I believe it is important to understand both design and development as a front-end developer to create a more successful user-centered design. I have worked as a graphic designer at an e-commerce company in South Korea for a year, and I have taken designs from mockups to implement during the course of study at the Interactive Media Design.</p>
                                <div className="logo">
                                    <img width={53} alt="photoshop logo" src={photoshopLogo} />
                                    <img width={53} alt="illustrator logo" src={illustratorLogo} />
                                    <img width={53} alt="sketch logo" src={sketchLogo} />
                                    <img width={53} alt="invision logo" src={invisionLogo} />
                                </div>
                                <ul>
                                    <li>Photoshop</li>
                                    <li>Illustrator</li>
                                    <li>Sketch</li>
                                    <li>Invision</li>
                                </ul>
                                <p>
                                    If you would like to know more about my projects and the work process,please visit my <a href="http://katesohng.com/blog/" target="_blank">blog</a>, or send an email to <a href="mailto:kheeya7@hotmail.com">Kate Sohng</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}