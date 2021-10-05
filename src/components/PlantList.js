import Plant from "./Plant";
import './PlantList.css'

var fiddle = 'fiddle.jpg';
var anthurium ='anthurium.jpg';
var kentia = 'kentiaPalm.jpeg';
var cactus = 'cactus.jpg';
var mahonganyFern = 'mahoganyFern.jpg';
var birdsOfParadise = 'birdsOfParadise.jpg';
var lemonTree = 'lemonTree.jpg';
var snakePlant = 'snakePlant.jpeg';
var mediteranean = 'mediteraneanFanPalm.jpg';
var bayTree = 'bayTree.jpg';
var commonBox = 'commonBox.jpeg';

let plants = [fiddle, anthurium, kentia, cactus, mahonganyFern, birdsOfParadise, lemonTree, snakePlant, mediteranean, bayTree, commonBox]

const PlantList = (props) => {
    let plantComponents = [];

    for(let i = 0; i < props.plants.length; i++){
        let plant = props.plants[i]
        let plantImage = plants[i]
        let plantComponent = <Plant id={plant.id} plant={plant} image={plantImage} />
        plantComponents.push(plantComponent)
    }

    return (
        <div className="plantComponent">
            <h1>Find your potential BUD.DY Plant!</h1>
            {plantComponents}
        </div>
    )
}

export default PlantList;