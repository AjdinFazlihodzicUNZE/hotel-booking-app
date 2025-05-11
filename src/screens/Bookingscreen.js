import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
function Bookingscreen({match}) {
  const { roomid } = useParams();

   const[room,setroom] = useState();
   const [loading, setloading] = useState();
   const [error, seterror] = useState();

  useEffect(() => {
        const fetchData = async () => {
            try {
                setloading(true);
                const response = await axios.post('/api/rooms/getroombyid', {roomid});
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
  
  return (
    <div>
        <h1>Booking</h1>
        <h1>Room id: {roomid}</h1>
        </div>
  )
}

export default Bookingscreen