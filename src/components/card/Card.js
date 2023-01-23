import axios from 'axios';
import { useState, useEffect } from 'react';

const Card = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    try {
      axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
        console.log(res.data);
        setApiData(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return <div></div>;
};

export default Card;
