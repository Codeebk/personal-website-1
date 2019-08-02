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
          <a href="/#" className="image">
            <img src={pic2} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Experience</h2>
            <p>

            <h3>Software Engineering Fellow</h3>
						<blockquote>
              Three-month, 500-hour full-time and full-stack web development program where I expanded on experience with latest front and back-end programming languages, tools, and methodologies.

              Developed a portfolio of individually and collaboratively focused projects, including:
               <ul>
									<li><u>Austin Dance Community</u> - An app exclusively for learning about and posting dance events (individual project using Node, Express, Mongoose, and MongoDB)</li>
									<li><u>SnackStalker</u> - Worked on a team of two UX designers and two developers to create a full-stack python application using the Django framework (My roles in addition to developer- Scrum master, GitHub manager)</li>
									
								</ul>
                </blockquote>

            </p>
            <a href="/#" className="special">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic3} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Nullam dignissim</h2>
            <p>
              Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras
              turpis ante, nullam sit amet turpis non, sollicitudin posuere
              urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim
              dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla
              cursus.
            </p>
            <a href="/#" className="special">
              Learn more
            </a>
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
              <a href="/#" className="image">
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
              <a href="/#" className="image">
                <img src={pic5} alt="" />
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
