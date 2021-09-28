import Plant from "./Plant"

const PlantList = (props) => {
    const plantComponents = props.plants.map(plant => {
        return <Plant plant={plant} />
    }) 

    return (
        <div className="plant">
        {plantComponents}
        </div>
    )
}

export default PlantList;