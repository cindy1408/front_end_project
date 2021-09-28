import Plant from "./Plant"

var fiddle = './fiddle.jpg';
var anthurium ='anthurium.jpg';
var kentia = 'kentiaPalm';
var cactus = '.img/Cactus';
var mahonganyFern = '.img/MahoganyFern';
var birdsOfParadise = '.img/birdsofparadise';
var lemonTree = '.img/LemonTree';

let plants = [fiddle, anthurium, kentia, cactus, mahonganyFern, birdsOfParadise, lemonTree]

const PlantList = (props) => {
    let i = 0
    const plantComponents = props.plants.map(plant => {
        return <Plant plant={plant} image={plants[i]} />
    })    
    i++;
    return (
        <div className="plant">
            {plantComponents}
        </div>
    )
}

export default PlantList;