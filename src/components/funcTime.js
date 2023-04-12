import React, { useState, useEffect } from 'react';

function changeState(state){
    state = true;
}

function FunTime(state) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (count <= 4){
        setCount(count + 1);
      } else {

        return changeState(state);
      }
        
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [count]);

  console.log(count);
}

export default FunTime;