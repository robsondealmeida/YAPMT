import React, { Component } from 'react';

import { createNotification } from "../../actions/notification-actions";

class BaseComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ...this.state,
            errors: {}
        }

        this.handleChange = this.handleChange.bind(this);
    }

    isMobile() {
        return window.navigator.userAgent.indexOf(/android|ios/i) !== -1
            || window.innerWidth <= 600;
    }

    handleError(err) {
        const data = err && err.response ? err.response.data : null;
        const defaultMessage = "Sorry, there was an error processing your request. Try again later."

        if (data) {
            this.setState({ ...this.state, errors: data.errors });
        } else {
            this.props.createNotification("error", defaultMessage);
        }
    }

    /**
     * Transforms a string in the format "MM/dd" to a valid date object
     * @param {*} str the string to be transformed
     */
    toDate(str) {
        const now = new Date();
        try {
            if (str.indexOf("/") === -1) {
                return null;
            }
            
            if (str.split("/").length > 2) {
                return null;
            }
            
            const month = str.split("/")[0];
            const day = str.split("/")[1];

            if ((day > 31 || day <= 0) ||
                (month <= 0 || month > 12)) {
                return null;
            }
            
            return new Date(now.getFullYear(), month-1, day);
        } catch (e) {
            return null;
        }
    }

    /**
     * Transforms a date to a friendly string
     * @param {*} dt the date to be transformed
     */
    toFriendlyString(dt) {
        const now = new Date();
        now.setHours(0, 0, 0, 0);
        const nowTime = now.getTime();
        const oneDayOffset = (24 * 60 * 60 * 1000);

        if (typeof (dt) !== Date) {
            dt = new Date(dt);
        }

        dt.setHours(0, 0, 0, 0);
        const dtTime = dt.getTime();
        if (dtTime === nowTime) {
            return "today";
        }
        else if (dtTime > nowTime && dtTime <= (nowTime + oneDayOffset)) { // this means the dt is tomorrow
            return "tomorrow"
        } else if (dtTime < nowTime && dtTime >= (nowTime - oneDayOffset)) { // this mean the dt is yesterday
            return "yesterday";
        } else {
            return dt.getMonth() + 1 + "/" + dt.getDate();
        }
    }

    /**
     * Handle change of any field, clearing its errors on change
     * @param {*} property the property on the state that will receive the value of the field
     * @param {*} value the value to give to the property
     */
    handleChange(property, e) {
        const val = e.target.value;
        const errors = this.state.errors;
        if (this.state.errors[property]) {
            delete errors[property];
        }
        this.setState({ ...this.state, [property]: val, errors });
    }
}

export default BaseComponent;