import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PlanetItem from "../PlanetItem/planetList";

import "./planetSlide.css";

const PlanetsSlider = (props) => {
  const set = {
    dot: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // nextArrow: <button className="slick-next">Next</button>,
    // prevArrow: <button className="slick-prev">Prev</button>,
  };
  const { planetsList } = props;
  return (
    <div className="planets-container">
      <Slider {...set} className="slider-container">
        {planetsList.map((eachPlanet) => (
          <PlanetItem planetList={eachPlanet} key={eachPlanet.id} />
        ))}
      </Slider>
    </div>
  );
};
export default PlanetsSlider;
