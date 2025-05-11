import logo from './logo.svg';
import './App.css';

import Box from './Box';
import TimerDisplay from './TimerDisplay';
import TimerButton from './TimerButton';
import React, { useState, useEffect } from 'react';

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false); // 타이머 실행 여부

  // 자동 증가 타이머
  useEffect(() => {
    let interval = null;

    if(isRunning) {
      interval = setInterval(() => {
        setSeconds(prev => {
          if(prev === 20) {
            alert("20초가 지났습니다!");
            clearInterval(interval);
            setIsRunning(false);
            return 20;
          }
          return prev + 1;
        });
      }, 1000); // 1초마다 시간 증가
    } else {
      clearInterval(interval); // 멈췄을 때 타이머 제거
    }

    // cleanup: 컴포넌트가 unmount되거나 다시 실행될 때
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
    console.log("타이머 시작");
  };

  const handleStop = () => {
    setIsRunning(false);
    console.log("타이머 멈춤");
  };

  const handleReset = () => {
    setSeconds(0);
    setIsRunning(false);
    console.log("타이머 리셋");
  };

  return (
    <div className='container'>
      <TimerDisplay seconds={seconds} />
      <TimerButton onStart={handleStart} onStop={handleStop} onReset={handleReset}/>
    </div>
  );
}

export default App;