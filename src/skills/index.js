import React from 'react'

export default class SkillsView extends React.Component {
    render() {
        return (
            <section>
                <div className="container skills">
                    <h2 className="row col">Skills</h2>
                    <div className="row mb-xs-60 mb-md-80">
                        <div className="col-xs-12 col-md-6 mb-xs-80 mb-md-0">
                            <p>I build websites, and I love creating digital production for the web. Here is my skillset I am good at and passionate about.</p>
                        </div>
                        <div className="col-xs-12 col-md-6">
                            <div className="row" data-component="skillsList">
                                <div className="col-xs-12 col-sm-6 col-md-12 mb-xs-20 mb-md-40">
                                    <h3>Development</h3>
                                    <p> Front-End development is not only one of my skills but also my favorite hobby. Writing codes for my web design and UX design is so rewarding, so I have trained myself for years to keep my coding skill sharp. My interest in the field keeps me exploring and studying more for upcoming technologies.</p>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-12 mb-xs-20 mb-md-40">
                                    <h3>Design</h3>
                                    <p> I started building my career in the field as a graphic designer and web designer. I am comfortable using Photoshop, Illustrator, and Sketch and take designs from mock-up to implementation.</p>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-12 mb-xs-20 mb-md-40">
                                    <h3>User Experience Design</h3>
                                    <p> I believe it is important to understand both design and development as a front-end developer to create a more successful user-centered design. I have studied how to conduct research-based UX design considering usability heuristics and empathy.
</p>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-12 mb-xs-20 mb-md-40">
                                    <h3>Project Management</h3>
                                    <p> I have experienced project management during the course of study at the University of Washington. Most of my personal/team projects had applied lean UX approaches for agile environments. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}