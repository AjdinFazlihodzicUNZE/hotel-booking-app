import React, { useState } from 'react';
import './Room.css';
import { Modal, Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Room({ room }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="room-container">
      <div className="row shadowbox align-items-center">
        <div className="col-md-4 col-12 mb-3 mb-md-0">
          <img src={room.imageurls[0]} className="smallimg" alt={room.name} />
        </div>
        <div className="col-md-8 col-12">
          <h1>{room.name}</h1>
          <b>
            <p>Max count: {room.maxcount}</p>
            <p>Phone Number: {room.phonenumber}</p>
            <p>Type: {room.type}</p>
          </b>
          <div className="btn-holder">
            <Link to={`/book/${room._id}`}>
              <button className="btn-luxury m-2">Book now</button>
            </Link>
            <button className="btn-luxury m-2" onClick={handleShow}>
              View Details
            </button>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel prevLabel="" nextLabel="">
            {room.imageurls.map((url, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100 bigimg"
                  src={url}
                  alt={`Room ${index}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
          <p className="room-description">{room.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            className="luxury-button"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Room;