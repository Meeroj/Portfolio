'use client'
import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    I am a <span>Frontend Developer</span>
                  </h2>
                  <p>
                    Hi! My name is Meeroj. I am a Frontend developer, and I am
                    very passionate and dedicated to my work. With 1 years
                    experience as a your expertise, I have acquired the skills and
                    knowledge necessary to make your project a success. I enjoy
                    every step of the design process, from discussion and
                    collaboration.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Website : <span>meeroj-supermiya.netlify.app</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>sirojiddinovmerojiddin@email.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree : <span>Junior</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone : <span>+998 99 074 56 51</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City : <span>Tashkent</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Freelance : <span>Available</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                    <a href="./resume.pdf" className="btn">
          Download CV
        </a>
                      <a
                        href="#contact"
                        data-section-index={0}
                        className="btn hire-me"
                      >
                        Hire Me
                      </a>
                    </div>
                  </div>
                </div>
               
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2019
                          </h6>
                          <h4 className="timeline-title">
                            Self Taught (Programming)
                          </h4>
                          <p className="timeline-text">
                            Since 2019 I started to learn Programming. I have
                            learn Html, Css, Sass, JavaScript, Bootstrap. Now I
                            am a Professional Web Developer..
                          </p>
                        </div>
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2012 to 2023
                          </h6>
                          <h4 className="timeline-title">
                            Secondary School Certificate
                          </h4>
                          <p className="timeline-text">
                            In 2023 I passed Exam from 13-IDUMI with
                            GPA- 4.56. My school name was 13-IDUMI. High School.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2023
                          </h6>
                          <h4 className="timeline-title">
                            Tashkent of Information Technology University
                          </h4>
                          <p className="timeline-text">
                          I started studying at TUIT from 2023. And I&apos;m mastering the Sciences of that place at an excellent level.
                          </p>
                        </div>
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2023
                          </h6>
                          <h4 className="timeline-title">
                            Najot Ta&apos;lim IT edu center
                          </h4>
                          <p className="timeline-text">
                          I started studying at Najot ta&apos;lim from 2023. And I&apos;m mastering the Sciences of that place at an excellent level.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2020
                          </h6>
                          <h4 className="timeline-title">HTML, Css, Bootstrap </h4>
                          <p className="timeline-text">
                            From 2020 I am woking on Web Developer. And wrote my first web sites. These sites are not perfect for me
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2021
                          </h6>
                          <h4 className="timeline-title">JavaScript(basics)</h4>
                          <p className="timeline-text">
                            Since 2021 I started to learn JavaScript. Since I learned Python programming language in 2019, JavaScript was not difficult for me
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2022
                          </h6>
                          <h4 className="timeline-title">JavaScript (Advenced)</h4>
                          <p className="timeline-text">
                            Since 2022 I started to learn JavaScript advenced. But it seemed a little difficult
                          </p>
                        </div>
                        
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2023
                          </h6>
                          <h4 className="timeline-title">ReactJs, NextJs, TypeScript</h4>
                          <p className="timeline-text">
                          On October 16, 2023, I came to the educational center &quot;Najot ta&apos;lim&quot;. And I got a lot of knowledge and skills from here
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
