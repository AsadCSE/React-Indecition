import React from 'react'

const ActionButton = (props) => (
    <div>
        <button className="big-buton" disabled={props.activate} onClick={props.decide}>What should i do?</button>
    </div>
)

export default ActionButton