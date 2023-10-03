import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://api.salonized.com/widget_api/locations/78zr3G2MxMHjcVxn2iQKuKjU/services',
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        setServices(response.data.service_categories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className='App'>
      {services.map((serviceCategory) => (
        <div className='services'>
          <h3 className='category'>
            {`${serviceCategory.id}, ${serviceCategory.name}`}
          </h3>
          {serviceCategory.services.map((service) => (
            <div className='service'>{`${service.id}, ${service.name}`}</div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
