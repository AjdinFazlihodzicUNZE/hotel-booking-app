import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import Loader from '../components/Loader';
import Error from '../components/Error';

function Bookingscreen({ match }) {
  const { roomid } = useParams();

  const [room, setroom] = useState();
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState();
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true);
        const response = await axios.post('/api/rooms/getroombyid', { roomid });
        const data = response.data;
        setroom(data);
        setloading(false);
      } catch (error) {
        seterror(true);
        console.log(error);
        setloading(false);
      }
    };

    fetchData();
  }, []);

  async function bookRoom(){
      const bookingDetails = {
        room: room.name,
        roomid: room._id,
        userid:JSON.parse(localStorage.getItem('currentUser'))._id,
        date: selectedDate,
        rentperday: room.rentperday

      }
      try {
        const result = await axios.post('/api/bookings/bookroom', bookingDetails);
        alert("Successfully booked the room!");
      } catch (error) {
        console.log(error);
        alert("Error occurred during booking!");
      }
  }

  return (
    <div className='m-5'>
      {loading ? (
        <Loader />
      ) : room ? (
        <div>
          <div className="row justify-content-center mt-5 shadowbox">

            <div className='col-md-6'>
              <h1>{room.name}</h1>
              <img src={room.imageurls[0]} className='bigimg' />
              <b>
                <p>Max count: {room.maxcount}</p>
                <p>Phone Number: {room.phonenumber}</p>
                <p>Type: {room.type}</p>
                </b>
            </div>


            <div className='col-md-6'>
              <div style={{ textAlign: 'right' }}>
                <h1>Booking details</h1>
                <hr />
                <b>
                  <p>Name : {JSON.parse(localStorage.getItem('currentUser')).name}</p>
                  <p>Max Count : {room.maxcount}</p>
                  <div className="mb-3 text-end">
                    <label htmlFor="bookingDate" className="form-label" style={{ fontWeight: 'bold' }}>
                      Choose Date:
                    </label>
                    <div>
                      <input
                        type="date"
                        id="bookingDate"
                        className="form-control d-inline-block"
                        style={{ width: '200px' }}
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                      />
                    </div>
                  </div>

                </b>
              </div>
              <div style={{ textAlign: 'right' }}>
                <b>
                  <h1>Amount</h1>
                  <hr />
                  <p>Date : {selectedDate}</p>
                  <p>Rent per day : {room.rentperday} $</p>
                </b>
              </div>

              <div style={{ float: 'right' }}>
                <button className='btn btn-luxury mt-2' onClick={bookRoom}>Pay Now</button>
              </div>

            </div>

          </div>
        </div>) : (<Error />)
      }
    </div>
  );
}

export default Bookingscreen;
