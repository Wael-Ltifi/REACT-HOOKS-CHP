import {useState} from "react";
import {Button, Modal, FormControl } from 'react-bootstrap'

function Add(props) {
  const [newMovie, setNewMovie] = useState(
    {  title:"",
      description:"",
      Image:"",
      rate:"",}
    )
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChange = (e) =>{
        setNewMovie({...newMovie, [e.target.name] : e.target.value});
    }

  return (
    <div className="App" >
      <Button variant="primary " onClick={handleShow}>
        Add movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FormControl type="text" placeholder="title" name="title" className="mr-sm-2" onChange={handleChange} />
            <FormControl type="text" placeholder="description" name="description" className="mr-sm-2" onChange={handleChange} />
            <FormControl type="text" placeholder="Image" name="Image" className="mr-sm-2" onChange={handleChange} />
            <FormControl type="text" placeholder="rate" name="rate" className="mr-sm-2" onChange={handleChange} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() =>{handleClose() ;props.a(newMovie)}} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Add;