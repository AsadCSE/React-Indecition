import React from 'react'
import Component from './Component'

const Components = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button 
                className="button button--link"
                onClick={props.removeAllOptions}>
                Remove All
            </button>
        </div>
        {
            !props.options.length && <p className="widget__message">There are no options. Add options to decide</p>
        }
        {
            props.options.map((option, index) => (
                <div key={option}>
                    <Component 
                        option={option}
                        count={index + 1}
                        removeAnOption={props.removeAnOption}
                    />
                </div>
            ))
        }
    </div>
)

export default Components