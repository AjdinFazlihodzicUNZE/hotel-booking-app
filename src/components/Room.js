import React from 'react'
import './Room.css';

function Room ({room}) {
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
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Room