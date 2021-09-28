var path = process.env.PUBLIC_URL;

const Plant = (props) => {
    return (
        <div>
            <p>{props.plant.name}</p>
            <img src = {path + props.image}></img>    
        </div>
    )
}

export default Plant;