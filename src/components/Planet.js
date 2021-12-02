const Planet = (props) => {
    const { name } = props;
    return (
        <div className="planet">{name}</div>
    )
}

export default Planet;