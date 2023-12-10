import './useEffect.css'
import React, { useState, useEffect } from 'react';

const TryUseEffect = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This code will run after the component is mounted
    // It simulates an asynchronous data fetching operation
    const fetchData = async () => {
      try {
        // Simulating a delay (e.g., fetching data from an API)
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Fetching data
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const result = await response.json();
        
        // Setting the data in the state
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        // Marking data loading as complete
        setLoading(false);
      }
    };

    // Call the fetchData function
    fetchData();

    // The useEffect function can optionally return a cleanup function
    // This cleanup function will run before the component unmounts or before the next useEffect runs
    return () => {
      // Cleanup code (if needed)
    };
  }, []); // The empty dependency array [] means that this effect will run only once, similar to componentDidMount

  return (
    <div>
      <h1 className='text-light' >React useEffect Example</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2 className='text-warning' >Data fetched:</h2>
          <pre className='text-light' >{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};
 

export default TryUseEffect;