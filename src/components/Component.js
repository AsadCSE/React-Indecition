import React from 'react'

const Component = (props) => (
    <div className="option">
        <p className="option__text">
            {props.count}. {props.option}
        </p>
        <button
            className="button button--link"
            onClick={() => {
                props.removeAnOption(props.option)
            }}
        >
            Remove
        </button>
    </div>
)

export default Component