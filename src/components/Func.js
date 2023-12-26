import React from 'react';
import { useNavigate  } from 'react-router-dom';

function FunComp() {
    const navigate = useNavigate();

  const handleButtonClick = (input) => {
    navigate('/'+input);
  };

  return (
    <div>
      <h4 className='text-light'>Functional Component</h4>
      <button type='button' className='btn btn-primary' onClick={()=>handleButtonClick('about')}> About</button>
      <button type='button' className='btn btn-warning' onClick={()=>handleButtonClick('')}> home</button>
      <button type='button' className='btn btn-danger' onClick={()=>handleButtonClick('contact')}> contact</button>

    </div>
  );
}

export default FunComp;
