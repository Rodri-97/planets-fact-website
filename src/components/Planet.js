import "../styles/Planet.css";

const Planet = (props) => {
    const { name } = props;
    return (
        <div className="planet page">{name}</div>
    )
}

export default Planet;