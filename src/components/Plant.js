import './Plant.css';

var path = process.env.PUBLIC_URL;

const Plant = (props) => {
    return (
        <div className='plant' id={props.plant.name}>
            <div className='plantInfo'>
                <h4>Name: {props.plant.name}</h4>
                <p>Latin Name: <b>{props.plant.latinName}</b></p>
                <p>Type: <b>{props.plant.plantType}</b></p>
                <p>Experience: <b>{props.plant.plantExperience}</b></p>
                <p>Light Exposure: <b>{props.plant.light}</b></p>
                <p>Water Frequency: <b>{props.plant.water}</b></p>
                <p>Rating: <b>{props.plant.rating}</b></p>
            </div>
            <img src = {path + props.image} alt='plantImage'></img>  
        </div>
    )
}

export default Plant;