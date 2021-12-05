import "../styles/Planet.css";

const Planet = (props) => {
    const { planet } = props;
    return (
        <div className="planet page">{planet.name}</div>
    )
}

export default Planet;