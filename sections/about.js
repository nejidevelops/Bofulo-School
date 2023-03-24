import React from 'react';
import image from '../public/banner.png';

const About = () => {
  return (
      <div className="about section-padding" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-12">
              <div className="about-img"><img alt="" className="img-fluid"
                                              src="https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
              <div className="about-text">
                <h2>We Provide The Best Educative <br/>
                  Blogging Platform</h2>
                <p>In a world where we are increasingly connected online,
                  blogging provides an important way to connect with others. The
                  best blogging platforms make it easy for people to share their
                  thoughts and ideas with the world, connect with others who
                  share similar interests, and they promote open dialogue and
                  the exchange of ideas. It can also be a useful tool for
                  marketing and branding as strong blogs can reach a large
                  audience and build a loyal following.</p>
                  {/* <a
                  className="btn btn-warning" href="#">Learn More</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default About;