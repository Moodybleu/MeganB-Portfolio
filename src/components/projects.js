import React from 'react'

import PropTypes from 'prop-types'

import './projects.css'

const Projects = (props) => {
  return (
    <div className={`projects-projects ${props.rootClassName} `}>
      <div className="projects-container">
        <div className="projects-blog-post-card">
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className="projects-image"
          />
          <div className="projects-container01">
            <span className="projects-text">{props.text1}</span>
            <a
              href={props.link_heading1}
              target="_blank"
              rel="noreferrer noopener"
              className="projects-link"
            >
              <h1 className="projects-text01">{props.heading1}</h1>
            </a>
            <div className="projects-container02">
              <span className="projects-text02">{props.text5}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="projects-container03">
        <div className="projects-blog-post-card1">
          <img
            alt={props.image_alt2}
            src={props.image_src2}
            className="projects-image1"
          />
          <div className="projects-container04">
            <span className="projects-text03">{props.text2}</span>
            <a
              href={props.link_heading2}
              target="_blank"
              rel="noreferrer noopener"
              className="projects-link1"
            >
              <h1 className="projects-text04">{props.heading2}</h1>
            </a>
            <div className="projects-container05">
              <span className="projects-text05">{props.text6}</span>
            </div>
          </div>
        </div>
        <div className="projects-blog-post-card2">
          <img
            alt={props.image_alt3}
            src={props.image_src3}
            className="projects-image2"
          />
          <div className="projects-container06">
            <span className="projects-text06">{props.text3}</span>
            <a
              href={props.link_heading3}
              target="_blank"
              rel="noreferrer noopener"
              className="projects-link2"
            >
              <h1 className="projects-text07">{props.heading3}</h1>
            </a>
            <div className="projects-container07">
              <span className="projects-text08">{props.text7}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="projects-blog-post-card3">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="projects-image3"
        />
        <div className="projects-container08">
          <span className="projects-text09">{props.text}</span>
          <a
            href={props.link_heading}
            target="_blank"
            rel="noreferrer noopener"
            className="projects-link3"
          >
            <h1 className="projects-text10">{props.heading}</h1>
          </a>
          <div className="projects-container09">
            <span className="projects-text11">{props.text4}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

Projects.defaultProps = {
  image_src: '/playground_assets/pet_pals1-1400w.png',
  image_alt: 'image',
  image_src1:
    '/playground_assets/screenshot%202022-12-12%20at%201.03.34%20pm-1400w.png',
  image_alt1: 'image',
  image_src2: '/playground_assets/a_mile_in_her_mindExample.png',
  image_alt2: 'image',
  image_src3:
    '/playground_assets/screenshot%202022-12-13%20at%208.01.46%20pm-1400w.png',
  image_alt3: 'image',
  text: 'Project 4',
  heading: 'Pet Pal',
  link_heading: 'https://github.com/Moodybleu/pet-pal-client',
  text1: 'Project 1',
  heading1: "Heidi Say's",
  link_heading1: 'https://github.com/Moodybleu/Heidi-Says',
  text2: 'Project 2',
  heading2: 'A Mile In Her Mind',
  link_heading2: 'https://github.com/Moodybleu/A-Mile-In-Her-Mind',
  text3: 'Project 3',
  heading3: 'Goal Digger',
  link_heading3: 'https://github.com/Moodybleu/goal-digger',
  text4:
    "Pet Pals is an all-in-one app for pet owners, initially focused on dog owners, but with plans to expand to support all types of pets in the future. This app is designed to make it easy for pet owners to manage their pet's daily needs, including tracking feeding times, potty breaks, appointments, playdates, vet visits, and medication reminders. It also allows you to store relevant information from vet appointments, making it a convenient one-stop-shop for all your pet care needs.",
  text5:
    'Test your memory and dexterity with my first project - a color-sequence guessing game. In this game, you will be presented with a series of colors that will glow on the screen, and your task is to correctly order them. You have an unlimited number of attempts to get the sequence right. However, if you make a mistake, the game will end and Heidi, who the game is themed after, will take her tennis balls away. Challenge yourself and see how many rounds you can successfully complete!',
  text6:
    'Introducing my second project at General Assembly, A Mile In Her Mind, a word-prompt app designed for individuals who have experienced trauma. This app aims to provide a safe and supportive platform for users to express their emotions and thoughts about their traumatic experiences. Through its selection of thought-provoking word prompts, the app encourages users to process and overcome the pain and negative feelings associated with their trauma. This app is a tool for self-discovery and personal growth, helping users to find healing and understanding.',
  text7:
    'Goal Digger was my first collaborative project during my time at General Assembly. Together with my team, we developed an app that empowers users to document and organize their bucket list items. The app allows you to create a comprehensive list of your goals, categorize them for better organization and even track progress by marking items as completed. It was an enriching experience working with my team and I am proud of what we accomplished.',
  rootClassName: '',
}

Projects.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src2: PropTypes.string,
  image_alt2: PropTypes.string,
  image_src3: PropTypes.string,
  image_alt3: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.string,
  link_heading: PropTypes.string,
  text1: PropTypes.string,
  heading1: PropTypes.string,
  link_heading1: PropTypes.string,
  text2: PropTypes.string,
  heading2: PropTypes.string,
  link_heading2: PropTypes.string,
  text3: PropTypes.string,
  heading3: PropTypes.string,
  link_heading3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
  text7: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Projects
