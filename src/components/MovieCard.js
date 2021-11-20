import {Card} from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component';


const MovieCard = ({m}) => {
    return (

        <div >
            
            <Card className ="box" style={{ width: "400px" ,height:"700px",marginLeft :"30px" ,marginBottom :"30px" ,transition: "1s"}} >
                <Card.Img  style={{height:"450px" }} variant="top" src={m.Image} />
                <Card.Body>
                <Card.Title   style={{ color: '#FF8C00', fontWeight:'bold' }}>{m.title} </Card.Title>
                    <StarRatingComponent value={ m.rate } />
                    <Card.Text>
                    {m.description}
                    </Card.Text>
                </Card.Body>
            </Card> 

        </div>
    )
}

export default MovieCard

