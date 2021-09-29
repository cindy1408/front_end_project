import './Plant.css';

var path = process.env.PUBLIC_URL;

const Plant = (props) => {
    return (
        <div className='plant' id={props.plant.name}>
            <div className='plantInfo'>
                <p>Name: <b>{props.plant.name}</b></p>
                <p>Latin Name: {props.plant.latinName}</p>
                <p>Type: {props.plant.plantType}</p>
                <p>Experience: {props.plant.plantExperience}</p>
                <p>Light Exposure: {props.plant.light}</p>
                <p>Water Frequency: {props.plant.water}</p>
                <p>Rating: {props.plant.rating}</p>
            </div>
            <img src = {path + props.image} alt='plantImage'></img>  
        </div>
    )
}

export default Plant;