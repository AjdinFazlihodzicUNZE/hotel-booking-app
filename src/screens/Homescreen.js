import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Room from '../components/Room'
import Loader from '../components/Loader';
import Error from '../components/Error';


function Homescreen() {
    const [rooms, setrooms] = useState([]);
    const [loading, setloading] = useState();
    const [error, seterror] = useState();
    useEffect(() => {
        const fetchData = async () => {
            try {
                setloading(true);
                const response = await axios.get('/api/rooms/getallrooms');
                const data = response.data;
                setrooms(data);
                setloading(false);
            } catch (error) {
                seterror(true);
                console.log(error);
                setloading(false);
            }
        };

        fetchData();
    }, []);


    return (
        <div className="container">
          <div>
              <h1 className="welcome-text">Welcome</h1>
            </div>
            <div className="row justify-content-center mt-5">
            {loading ? (
  <Loader />
) : rooms.length > 0 ? (
  rooms.map(room => {
    return (
      <div className="col-md-9 mt-2" key={room._id}>
        <Room room={room} />
      </div>
    );
  })
) : (
  <Error />
)}

            </div>
        </div>
    )
}

export default Homescreen