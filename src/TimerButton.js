import React from "react";

function TimerButton(props) {
    return (
        <div>
            <button onClick={props.onStart}>시작</button>
            <button onClick={props.onStop}>멈춤</button>
            <button onClick={props.onReset}>리셋</button>
        </div>
    );
}

export default TimerButton;