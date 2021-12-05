import "../styles/Planet.css";

const Planet = (props) => {
    const { planet } = props;
    return (
        <div className="planet page">
            <div className="selector selector-top">
                <div className="selector-item selector-top-item">Overview</div>
                <div className="selector-item selector-top-item">Internal</div>
                <div className="selector-item selector-top-item">Surface</div>
            </div>
            {planet.name}
        </div>
    )
}

export default Planet;