import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Fade from 'react-reveal/Fade';
import './Medicine.css'


const Medicine = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div>
      <div>
        <Fade top>
          <h2 className="text-center mb-5 mt-5">Your <span style={{color:"#003f91"}}>Medicine</span></h2>
        </Fade>
        <Slider {...settings}>
          <div className="medicine">
            <img src="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
          </div>
          <div className="medicine">
            <img src="https://images.unsplash.com/photo-1626351545208-28c9080106ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fG1lZGljaW5lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="" />
          </div>
          <div className="medicine">
            <img src="https://images.unsplash.com/photo-1626710115566-1be358df7197?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fG1lZGljaW5lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="" />
          </div>
          <div className="medicine">
            <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fG1lZGljaW5lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="" />
          </div>
          <div className="medicine">
            <img src="https://images.unsplash.com/photo-1522335579687-9c718c5184d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="" />
          </div>
          <div className="medicine"   id="home">
            <img src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1lZGljaW5lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
}
export default Medicine;
