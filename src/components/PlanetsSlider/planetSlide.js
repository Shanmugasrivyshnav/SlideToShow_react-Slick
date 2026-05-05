import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PlanetItem from "../PlanetItem/planetList";

import "./planetSlide.css";

const PlanetsSlider = (props) => {
  const set = {
    dot: False,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const { planetsList } = props;
  return (
    <div className="planets-container">
      <Slider {...set} className="slider-container">
        {planetsList.map((eachPlanet => (
          <PlanetItem planetList={eachPlanet} key={eachPlanet.id} />
        ))}
      </Slider>
    </div>
  );
};
export default PlanetsSlider;
