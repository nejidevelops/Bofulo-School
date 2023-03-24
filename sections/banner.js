import React from 'react';
// import image from '../assets/images/banner.png'
import image from '../public/banner.png'

const Banner = () => {
  return (
        <div className="carousel slide" data-bs-ride="carousel"
             id="carouselExampleIndicators">
          <div className="carousel-indicators">
            <button aria-label="Slide 1" className="active" data-bs-slide-to="0"
                    data-bs-target="#carouselExampleIndicators"
                    type="button"></button>
            <button aria-label="Slide 2" data-bs-slide-to="1"
                    data-bs-target="#carouselExampleIndicators"
                    type="button"></button>
            <button aria-label="Slide 3" data-bs-slide-to="2"
                    data-bs-target="#carouselExampleIndicators"
                    type="button"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img alt="..." className="d-block w-100" src="https://images.unsplash.com/photo-1661956601031-4cf09efadfce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"/>
                <div className="carousel-caption">
                  <h5>Write With Us!</h5>
                  <p>Deepen readers understanding of the world and to
                    empower writers to share their best work and biggest ideas.</p>
                  {/* <p><a className="btn btn-warning mt-3" href="#">Learn More</a>
                  </p> */}
                </div>
            </div>
            <div className="carousel-item">
              <img alt="..." className="d-block w-100" src="https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
                <div className="carousel-caption">
                  <h5>Authenticity</h5>
                  <p>Deepen readers understanding of the world and to
                    empower writers to share their best work and biggest ideas.</p>
                  {/* <p><a className="btn btn-warning mt-3" href="#">Learn More</a>
                  </p> */}
                </div>
            </div>
            <div className="carousel-item">
              <img alt="..." className="d-block w-100" src="https://images.unsplash.com/photo-1661956601031-4cf09efadfce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"/>
                <div className="carousel-caption">
                  <h5>True Champions</h5>
                  <p>Deepen readers understanding of the world and to
                    empower writers to share their best work and biggest ideas.</p>
                  {/* <p><a className="btn btn-warning mt-3" href="#">Learn More</a>
                  </p> */}
                </div>
            </div>
          </div>
          <button className="carousel-control-prev" data-bs-slide="prev"
                  data-bs-target="#carouselExampleIndicators"
                  type="button"><span
              aria-hidden="true" className="carousel-control-prev-icon"></span>
            <span
                className="visually-hidden">Previous</span></button>
          <button className="carousel-control-next" data-bs-slide="next"
                  data-bs-target="#carouselExampleIndicators"
                  type="button"><span
              aria-hidden="true" className="carousel-control-next-icon"></span>
            <span
                className="visually-hidden">Next</span></button>
        </div>
);
};

export default Banner;