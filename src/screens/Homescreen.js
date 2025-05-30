import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Room from '../components/Room'
import Loader from '../components/Loader';
import Error from '../components/Error';
import Featurecard from '../components/Featurecard';


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

       const features = [
     {
          title: 'Restaurant',
          image: '/restaurant.jpg',
          description: 'Enjoy exquisite dishes and a cozy atmosphere.',
     },
    {
         title: 'Spa Center',
         image: '/spa.jpg',
         description: 'Relax and rejuvenate in our world-class spa.'
    },
    {
        title: "Gym",
        image: '/gym.jpg',
        description: 'Stay fit with our fully equipped gym.'
    },
    {
        title: "Outdoor Swimming Pool",
        image: '/pool.jpg',
        description: 'Take a refreshing dip in our beautiful outdoor swimming pool, surrounded by lush gardens and sunshine.'
    }
  
  ];

    return (
        <div className="container">
          <div>
              <h1 className="welcome-text">Welcome to Hotel Royale</h1>
            </div>
            <div className="row justify-content-center mt-5">
              <div className="feature-cards-container mt-4 d-flex justify-content-center flex-wrap">
             {features.map((feature, index) => (
               <Featurecard 
                  key={index}
                  title={feature.title}
                  image={feature.image}
                  description={feature.description}
                  delay={`${index * 0.3}s`}
              />
              
            ))}
             </div>

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