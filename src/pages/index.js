import React from 'react';

import Layout from '../components/Layout';

// import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';
import pic8 from '../assets/images/snack-stalker.png';
import codee from '../assets/images/codee3square.jpg';
import dance from '../assets/images/womandancing.jpg';
import typing from '../assets/images/womantyping.jpg';

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <span className="icon fa-diamond"></span>
        </div>
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/#" className="image">
            <img src={codee} alt="" />
          </a>
          <div className="content">
            <h2 className="major">About Me</h2>
            <p>
            As a software engineer and dancer I use my deeply ingrained passion for mastering new techniques to bridge the gap between technology and art. I always follow my gut and I am highly motivated by my inner voice.
            </p>
            {/* <a href="/#" className="special">
              Learn more
            </a> */}
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          {/* <a href="/#" className="image">
            <img src={pic2} alt="" />
          </a> */}
          <div className="content">
            <h2 className="major">Experience</h2>
            <p>

            <h3>Software Engineering Fellow - General Assembly</h3>
						<blockquote>
              <p>Three-month, 500-hour full-time and full-stack web development program where I expanded on experience with latest front and back-end programming languages, tools, and methodologies.</p>

              <p>Developed a portfolio of individually and collaboratively focused projects, including:</p>
               <ul>
									<li><u>Austin Dance Community</u> - An app exclusively for learning about and posting dance events (individual project using Node, Express, Mongoose, and MongoDB)</li>
									<li><u>SnackStalker</u> - Worked on a team of two UX designers and two developers to create a full-stack python application using the Django framework (My roles in addition to developer- Scrum master, GitHub manager)</li>
									
								</ul>
                </blockquote>

            </p>
            <a href="https://drive.google.com/file/d/13dR4d9vfhNzzvLLayQZwXIG7uY1l5cYo/view" className="special">
              View full resume
            </a>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="/#" className="image">
            <img src={typing} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Technologies I work with</h2>
            <p>
              HTML | CSS | JavaScript | React | Node | jQuery | MongoDB | Python | Django | PostgreSQL | GraphQL | Gatsby | Firebase | Git | GitHub | Photoshop | Lightroom | After Effects | Premiere
            </p>
            {/* <a href="/#" className="special">
              Learn more
            </a> */}
          </div>
        </div>
      </section>

      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">Things I've Built</h2>
          <p>
            These are some applications that I've built recently.
          </p>
          <section className="features">
            <article>
              <a href="https://github.com/Codeebk/snackstalker1" className="image">
                <img src={pic8} alt="" />
              </a>
              <h3 className="major">SnackStalker</h3>
              <p>
              Worked on a team of two UX designers and two developers to create a full-stack Python application using the Django framework.
              </p>
              <a href="https://github.com/Codeebk/snackstalker1" className="special">
                View Project
              </a>
            </article>
            <article>
              <a href="https://github.com/Codeebk/dance-community-app" className="image">
                <img src={dance} alt="" />
              </a>
              <h3 className="major">Austin Dance Community</h3>
              <p>
              An app exclusively for learning about and posting dance events (individual project using Node, Express, Mongoose, and MongoDB)
              </p>
              <a href="https://github.com/Codeebk/dance-community-app" className="special">
                View Project
              </a>
            </article>
            {/* <article>
              <a href="/#" className="image">
                <img src={pic6} alt="" />
              </a>
              <h3 className="major">Ante fermentum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic7} alt="" />
              </a>
              <h3 className="major">Fusce consequat</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article> */}
          </section>
          {/* <ul className="actions">
            <li>
              <a href="/#" className="button">
                Browse All
              </a>
            </li>
          </ul> */}
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
