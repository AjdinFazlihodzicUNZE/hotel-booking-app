import React, { useEffect, useState } from "react";
import { Tabs, Divider, Tag } from "antd";
import axios from "axios";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Swal from "sweetalert2";
import "./Profilescreen.css";

function Profilescreen() {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    if (!user) {
      window.location.href = "/login";
    }
  }, [user]);

  const items = [
    {
      key: "1",
      label: "Profile",
      children: (
        <div className="profile-info">
          <h1>My Profile</h1>
          <Divider />
          <p><b>Name:</b> {user.name}</p>
          <p><b>Email:</b> {user.email}</p>
          <p><b>Admin Status:</b> {user.isAdmin ? "YES" : "NO"}</p>
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
    <div className="profilescreen-container">
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
}

export default Profilescreen;

export function MyBookings() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const [bookings, setbookings] = useState([]);
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
        setbookings(data);
        setloading(false);
      } catch (error) {
        console.log(error);
        setloading(false);
        seterror(error);
      }
    };

    fetchBookings();
  }, [user._id]);

  async function cancelBooking(bookingid, roomid) {
    try {
      setloading(true);
      await (
        await axios.post("/api/bookings/cancelbooking", { bookingid, roomid })
      ).data;
      setloading(false);
      Swal.fire("Congrats", "Your booking has been canceled", "success").then(
        (result) => {
          window.location.reload();
        }
      );
    } catch (error) {
      console.log(error);
      setloading(false);
      Swal.fire("Oops", "Something went wrong", "error");
    }
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          {loading && <Loader />}
          {bookings &&
            bookings.map((booking) => {
              return (
                <div className="bs" key={booking._id}>
                  <h1>{booking.room}</h1>
                  <p><b>Booking ID</b>: {booking._id}</p>
                  <p><b>Check in</b>: {booking.date}</p>
                  <p><b>Amount</b>: {booking.totalamount}</p>
                  <p>
                    <b>Status</b>:{" "}
                    {booking.status === "cancelled" ? (
                      <Tag color="red">CANCELED</Tag>
                    ) : (
                      <Tag color="green">CONFIRMED</Tag>
                    )}
                  </p>

                  {booking.status !== "cancelled" && (
                    <div style={{ float: "right" }}>
                      <button
                        className="luxury-button"
                        onClick={() => cancelBooking(booking._id, booking.roomid)}
                      >
                        CANCEL BOOKING
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
