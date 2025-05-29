import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import axios from "axios";
import Loader from '../components/Loader';
import Error from '../components/Error';
import './Profilescreen.css';
import { set } from "mongoose";
import Swal from 'sweetalert2'
import { Divider, Flex, Tag } from 'antd';
function Profilescreen() {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    if (!user) {
      window.location.href = "/login";
    }
  }, []);

  const items = [
    {
      key: "1",
      label: "Profile",
      children: (
        <div>
          <h1>My Profile</h1>
          <br />
          <h1>Name: {user.name}</h1>
          <h1>Email: {user.email}</h1>
          <h1>isAdmin: {user.isAdmin ? "YES" : "NO"}</h1>
        </div>
      ),
    },
    {
      key: "2",
      label: "Bookings",
      children: <MyBookings />,
    },
  ];

  return (
    <div className="ml-3 mt-3">
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
}

export default Profilescreen;

export function MyBookings() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const[bookings, setbookings] = useState([])
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState();
 useEffect(() => {
  const fetchBookings = async () => {
    try {
        setloading(true);
      const data = (
        await axios.post("/api/bookings/getbookingsbyuserid", {
          userid: user._id,
        })
      ).data;
      console.log(data);
      setbookings(data)
      setloading(false)
    } catch (error) {
      console.log(error);
      setloading(false)
      seterror(error)
    }
  };

  fetchBookings();
}, []);

async function cancelBooking(bookingid, roomid){


    try {
        setloading(true)
        const result= await (await axios.post("/api/bookings/cancelbooking" , {bookingid, roomid})).data
        console.log(result)
        setloading(false)
        Swal.fire('Congrats', 'Your booking has been canceled' , 'success').then(result=>{
            window.location.reload()
        })
    } catch (error) {
        console.log(error)
        setloading(false)
        Swal.fire('Oops', 'Something went wrong', 'error')
    }
}


  return (
    <div>
      <div className="row">
         <div className="col-md-6">
             {loading && (<Loader/>)}
             {bookings && (bookings.map(booking=>{
                return <div className="bs">
                    <h1>{booking.room}</h1>
                    <p><b>Booking ID</b> : {booking._id}</p>
                    <p><b>Check in</b> : {booking.date}</p>
                    <p><b>Amount</b> : {booking.totalamount}</p>
                    <p><b>Status</b> : {" "}
                        {booking.status=='cancelled' ? ( <Tag color="red">CANCELED</Tag>) : (<Tag color="green">CONFIRMED</Tag>)}
                    </p>

                  {booking.status !== 'cancelled' && (
                      <div style={{float: "right"}}>
                        <button className='luxury-button' onClick={() => cancelBooking(booking._id, booking.roomid)}>CANCEL BOOKING</button>
                    </div>
                  )}
                </div>
             }))}
         </div>
      </div>
    </div>
  );
}
