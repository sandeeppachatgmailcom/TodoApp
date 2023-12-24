import React from 'react';
import { useNavigate  } from 'react-router-dom';

function FunComp() {
    const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/about');
  };

  return (
    <div>
      <h4 className='text-light'>Functional Component</h4>
      <button type='button' className='btn btn-primary' onClick={handleButtonClick}> About</button>
    </div>
  );
}

export default FunComp;
