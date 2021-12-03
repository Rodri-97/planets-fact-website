import "../styles/Planet.css";

const Planet = (props) => {
    const { setIsNavbarHidden, name } = props;
    setIsNavbarHidden(false);
    return (
        <div className="planet page">{name}</div>
    )
}

export default Planet;