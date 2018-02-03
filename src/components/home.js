import React, { Component } from 'react';
import Avatar from 'react-avatar';
import ScrollableAnchor from 'react-scrollable-anchor'
import 'font-awesome/css/font-awesome.css'
import Header from './header';
import Page from './page';
import Section from './section';
import ContactForm from './contact-form';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Page>
          <ScrollableAnchor id={'top'}>
            <Section styles='hero'>
              <div className='background-image' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/img/bondst_large.jpg)`}}></div>
              <div><Avatar src={`${process.env.PUBLIC_URL}/img/marcel.jpg`} size={200} round={true} /></div>
              <h1>Marcel Galang</h1>
              <h3>Full Stack Web Developer</h3>
              <h3 style={{ maxWidth: 480 }}>Ruby on Rails | JavaScript | React | Redux </h3>
              <div style={{ marginBottom: '30px' }}>
                <a href='https://linkedin.com/in/marcel-galang' className='btn-icon' target='_blank'><i className='fa fa-linkedin-square'></i></a>
          			<a href='https://github.com/marcelgalang' className='btn-icon' target='_blank'><i className='fa fa-github-square'></i></a>
              </div>
              <a href='#hire-me' className='btn'>Let's connect!</a>
            </Section>
          </ScrollableAnchor>

          <ScrollableAnchor id={'projects'}>
            <Section styles='our-work'>
              <h3 className='title'>Projects</h3>
                <Section className=" photolinks clearfix">
                  <ul className="img-list-16-9" minWidth={480} >
                    <li>
                      <img src={`${process.env.PUBLIC_URL}/img/drb-screenshot.png`}  />
                      <span className="text-content-16-9">
                        <span>
                          <a href="https://marcelgalang.github.io/dr-b-v2" target='_blank'>
                            <h2>Dr. B Mac Repair</h2></a>
                              <h3>An online retail service store with product listings and a shopping cart. React JS | redux | Rails API
                              </h3>
                              <br/>
                        <ul>
                          <li><span>+ Applied Javascript front end that employs React JS, redux, React Router for client side views</span></li>
                          <li><span>+ Used Rails API to persist the database with serialized JSON</span></li><br/>
                          <li><span>+ Added Bootstrap CSS styling through reactstrap for react</span></li>
                        </ul>
                              </span></span>
                    </li>
                    <li>
                      <img src={`${process.env.PUBLIC_URL}/img/drb-screenshot.png`}  />
                      <span className="text-content-16-9">
                        <span>
                          <a href="https://marcelgalang.github.io/dr-b-v2" target='_blank'>
                            <h2>Dr. B Mac Repair</h2></a>
                              <h3>An online retail service store with product listings and a shopping cart. React JS | redux | Rails API
                              </h3>
                              <br/>
                        <ul>
                          <li><span>+ Applied Javascript front end that employs React JS, redux, React Router for client side views</span></li>
                          <li><span>+ Used Rails API to persist the database with serialized JSON</span></li><br/>
                          <li><span>+ Added Bootstrap CSS styling through reactstrap for react</span></li>
                        </ul>
                              </span></span>
                    </li>
                  </ul>

                </Section>
              <a href='#top'>^ Back to Top</a>
            </Section>
          </ScrollableAnchor>

          <ScrollableAnchor id={'background'} >
            <Section styles='our-work'>
              <h3 className='title'>About Me</h3>
              <article className=" photolinks clearfix">
                <ul className="img-list">
                  <li>
                    <img src={`${process.env.PUBLIC_URL}/img/bondst.jpg`} width="200px" height="200px"  />
                    <span className="text-content"><span>I'm a New Yorker.</span></span>
                  </li>
                  <li>
                    <img src={`${process.env.PUBLIC_URL}/img/cheesehead.jpg`} width="200px" height="200px" />
                    <span className="text-content"><span><a href="http://www.packers.com" target='_blank'>But I stay loyal to home.</a></span></span>
                  </li>
                  <li>
                    <img src={`${process.env.PUBLIC_URL}/img/mplswinter.jpg`} width="200px" height="200px" />
                    <span className="text-content"><span><a href="http://www.weather.com/sports-recreation/ski/news/20-coldest-large-cities-america-20140107#/20" target='_blank'>I also used to live in MPLS.</a></span></span>
                  </li>
                </ul>
                <ul className="img-list">
                  <li>
                    <img src={`${process.env.PUBLIC_URL}/img/HSUptownBar1.jpg`} width="200px" height="200px" />
                    <span className="text-content"><span><a href="http://www.kordarecords.com/the-hang-ups/">Where I played in band</a><a /><a href="https://myspace.com/heavysleeper/music/songs">s.</a></span></span>
                  </li>
                  <li>
                    <img src={`${process.env.PUBLIC_URL}/img/xmas17.jpg`} width="200px" height="200px" />
                    <span className="text-content"><span>Nowadays, I'm a father and husband. </span></span>
                  </li>
                  <li>
                    <img src={`${process.env.PUBLIC_URL}/img/magps.jpg`} width="200px" height="200px" />
                    <span className="text-content"><span><a href="#projects">And a developer. </a></span></span>
                  </li>
                </ul>
              </article>
              <a href='#top'>^ Back to Top</a>
            </Section>
          </ScrollableAnchor>



          <ScrollableAnchor id={'hire-me'}>
            <Section styles='contact'>
          		<h3 className='title'>Let's Connect!</h3>
          		<ContactForm />
              <p></p>
              <a href='#top'>^ Back to Top</a>
          	</Section>
          </ScrollableAnchor>
        </Page>
      </div>
    )
  }
}
