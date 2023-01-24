import axios from 'axios';
import { useState, useEffect } from 'react';
import Modal from '../../modal/Modal';

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

  return (
    <>
      {apiData.map((item) => {
        return (
          <div key={item.id}>
            <button>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-x'
                viewBox='0 0 16 16'
              >
                <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
              </svg>
            </button>
            <p>
              <strong>{item.name}</strong>
            </p>
            <p>
              <strong>Contact No.</strong>
              {item.phone}
            </p>
            <p>
              <strong>Website :</strong>
              {item.website}
            </p>
          </div>
        );
      })}
      <div>
        <Modal />
      </div>
    </>
  );
};

export default Card;
