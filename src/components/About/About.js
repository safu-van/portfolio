import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! I’m Mohamed Safuvan a software developer and sales strategist. I’m passionate about building impactful projects, exploring new technologies, and solving real-world problems. I also leverage market insights and customer understanding to drive successful sales strategies, combining technical skills with business impact.
            </ScrollAnimation>

            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              My journey in tech started with a strong interest in how things work. Over time, I’ve built real projects, improved my skills, and focused on solving problems through code. I believe in learning every day and creating software that makes a difference.
            </ScrollAnimation>

            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              <div className="tagline2">
                Over the years, I’ve gained hands-on experience in:
              </div>
            </ScrollAnimation>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt="" />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
