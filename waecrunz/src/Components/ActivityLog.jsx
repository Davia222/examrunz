import React, { useState, useEffect } from 'react';

const TextCycle = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["Booked a paper", "Entered the workspace", "Referred someone"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex(prevIndex => (prevIndex + 1) % texts.length);
    }, 2000); // Change 2000 to adjust how frequently the text changes (in milliseconds)

    return () => clearInterval(interval);
  }, []);

  const [number, setNumber] = useState(0)

  useEffect(()=>{
    const min = 1000
    const max = 9000

    const numberInterval = setInterval(() => {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min

      setNumber(randomNumber)
    }, 4000);

    return () => clearInterval(numberInterval)
  },[])


  return (
    <>
    <div className='activity-feed'>
    <p className='activity-item'>+234******{number} {texts[textIndex]}</p>
    </div>
    </>
    
  );
};

export default TextCycle;
