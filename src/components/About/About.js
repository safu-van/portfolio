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
          <ScrollAnimation animateIn="fadeInLeft">
            <Image src="/man-svgrepo-com.svg" alt="man-svgrepo" />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! My name is <strong>Mohamed Safuvan</strong>. I’m a passionate software developer who loves exploring new technologies and building useful things. I enjoy learning by doing, and I'm always excited to try new tools and ideas that help me grow as a developer.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              My journey in tech started with a strong interest in how things work. Over time, I’ve built real projects, improved my skills, and focused on solving problems through code. I believe in learning every day and creating software that makes a difference.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              <div className="tagline2">
                I have become confident using the following technologies:
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
