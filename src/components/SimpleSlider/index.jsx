import React, { Component } from "react";
import Slider from "react-slick";
import ProjectImg from '../Image/ProjectImg';
import { Container, Row, Col } from 'react-bootstrap';
import Tilt from 'react-tilt';
import Img from "gatsby-image"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", marginTop:"10%", top: "0", alignSelf: "flexStart", background: "#60706f", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", marginTop:"10%", top: "0", alignSelf: "flexStart", background: "#60706f", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}



export default class SimpleSlider extends Component {
  render() {
    const { screenshotsArr } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      // autoplaySpeed: 7000,
      cssEase: "linear",
      // slidesToShow: 1,
      // slidesToScroll: 1,
      adaptiveHeight: true,
      // autoplay: true,
      lazyLoad: false,
      pauseOnDotsHover: true,
      pauseOnHover: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      
      // customPaging: function(i) {
      //   return (
      //     <a>
      //       <span>{i+1}</span>
      //     </a>
      //   );
      // },      
    };
    return (
      <Slider {...settings}>
        {
          this.props.screenshotsArr ?
            this.props.screenshotsArr.map(screenshot => {
              return (
                <div key={screenshot} className="project-wrapper__image" style={{ boxShadow: "0 0 25px #C0C0C0" }}>
                  <a
                    href={this.props.url || '#!'}
                    target="_blank"
                    aria-label="Project Link"
                    rel="noopener noreferrer"
                  >
                    <Tilt
                      options={{
                        reverse: false,
                        max: 8,
                        perspective: 1000,
                        scale: 1,
                        speed: 300,
                        transition: true,
                        axis: null,
                        reset: true,
                        easing: 'cubic-bezier(.03,.98,.52,.99)',
                      }}
                    >
                      <div data-tilt className="thumbnail rounded" >
                        {/* <img src={screenshot} height="auto" width="100%"/> */}
                        <ProjectImg filename={screenshot} />
                      </div>
                    </Tilt>
                  </a>
                </div>
              )
            }) : null
        }
      </Slider>
    );
  }
}


{/* 
  
    
              
              
  <img src={screenshot} width="100%" height="100%"/>
<ProjectImg filename={'firstPage.png'} />
<ProjectImg filename={'giftastic.png'} />
<ProjectImg filename={'NameGuess2.png'} />
<img src='firstPage.png' width="100%" height="100%"/>
<img src='giftastic.png' width="100%" height="100%"/>
<img src='NameGuess2.png' width="100%" height="100%"/> */}