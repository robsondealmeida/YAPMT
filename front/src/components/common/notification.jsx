import React, { Component } from "react";
import { createNotification, hideNotification } from '../../actions/notification-actions';

import BaseComponent from "./base-component";
import { connect } from 'react-redux';

class YAPMTNotification extends BaseComponent {
    render() {
        if (this.isMobile()) { // no time to make it mobile-ready :(
            return null;
        }
        
        if (this.props.show) {
            window.setTimeout(() => {
                this.props.hideNotification(this.props.type, this.props.message);
            }, 3000);

            return (
                <div className={`notification fade-in ${this.props.type}`}>
                    <span className="title">{this.props.type}!</span>
                    <span className="message">{this.props.message}</span>
                </div>
            );
        } else {
            return (
                <div className={`notification fade-out ${this.props.type}`}>
                    <span className="title">{this.props.type}!</span>
                    <span className="message">{this.props.message}</span>
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        message: state.notification.message,
        type: state.notification.type,
        show: state.notification.show
    }
}

export default connect(mapStateToProps, { createNotification, hideNotification })(YAPMTNotification);