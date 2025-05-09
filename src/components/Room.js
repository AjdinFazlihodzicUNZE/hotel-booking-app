import React,{useState} from 'react'
import './Room.css';
import { Modal, Button, Carousel } from 'react-bootstrap';

function Room ({room}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
        <div className="row shadowbox" >
            <div className="col-md-4">
                <img src={room.imageurls[0]} className="smallimg" />
            </div>
            <div className="col-md-7">
                <h1>{room.name}</h1>
                <b>
                <p>Max count: {room.maxcount}</p>
                <p>Phone Number: {room.phonenumber}</p>
                <p>Type: {room.type}</p>
                </b>

                <div className="btn-holder">
                    <button className="btn btn-primary" onClick={handleShow}>View Details</button>
                </div>
            </div>
        </div>

        

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Carousel prevLabel='' nextLavel=''>
      
      {room.imageurls.map(url=>{
        return <Carousel.Item>
            <img
                className="d-block w-100 bigimg"
                src={url}
                
            />
        </Carousel.Item>
      })}
      
        </Carousel>
        <p>{room.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>

    </div>
  );
}
export default Room