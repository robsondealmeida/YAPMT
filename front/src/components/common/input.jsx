import React, { Component } from 'react';

class Input extends Component {
    render() {
        return (
            <div className={this.props.inline ? "inline" : ""}>
                <input className={`title-input ${this.props.error ? "error" : ""} `}
                    onChange={this.props.onChange}
                    maxLength={this.props.maxlength}
                    value={this.props.value}
                    placeholder={this.props.placeholder}
                    readOnly={this.props.readOnly}
                />
                {
                    this.props.error && this.props.error.message ? 
                        <span className="title-input-error-message">{this.props.error.message}</span> : null
                }
            </div>
        );
    }
}

export default Input;