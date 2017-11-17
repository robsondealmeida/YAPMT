import React, { Component } from 'react';
import { hideMenu, showMenu } from "../../actions/menu-actions";

import BaseComponent from './base-component';
import Overlay from './overlay';
import { connect } from 'react-redux';

class ResponsiveMenu extends BaseComponent {
    constructor(props) {
        super(props);

        this.toggleSideMenu = this.toggleSideMenu.bind(this);
    }

    toggleSideMenu() {
        if (this.isMobile()) {
            !this.props.menuHidden ? this.props.hideMenu() : this.props.showMenu();
        }
    }

    renderHeader(icon) {
        return <div className="header" onClick={this.toggleSideMenu}>
            <i className={`fa ${icon}`}></i>
            <span>{this.props.headerText}</span>
        </div>
    }

    render() {
        return (
            <div className="responsive-menu">
                {this.renderHeader("fa-bars")}
                <hr />
                {
                    !this.isMobile() ?
                        <div className="container">
                            {this.props.children}
                        </div> : null
                }
                {
                    !this.props.menuHidden ? <Overlay onClick={this.toggleSideMenu} /> : null
                }
                <div className={`side-menu ${!this.props.menuHidden ? "show" : "hide"}`}>
                    {this.renderHeader("fa-chevron-left")}
                    {this.props.children}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        menuHidden: state.menu.hide
    }
}

export default connect(mapStateToProps, { showMenu, hideMenu })(ResponsiveMenu);