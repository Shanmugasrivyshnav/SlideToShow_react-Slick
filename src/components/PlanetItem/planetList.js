import "./planetList.css";

const PlanetItems = (props) => {
  const { planetList } = props;
  const { name, imageUrl, description } = planetList;
  return (
    <div className="planet-container">
      <h1 className="planet-main-heading">PLANETS</h1>
      <img src={imageUrl} alt={`planet ${name}`} className="image" />
      <h1 className="planet-name-heading">{name}</h1>
      <p className="planet-description">{description}</p>
    </div>
  );
};
export default PlanetItems;
