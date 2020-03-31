import React, { Component } from 'react'

export default class DelayedButton extends Component {
    handleClick = event => {
        event.persist();
        console.log(event);
        window.setTimeout(() => {
            this.props.onDelayedClick(event);
        }, this.props.delay);
    };
    
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Yaaa</button>
            </div>
        )
    }
}

