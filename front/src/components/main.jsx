import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import ProjectsList from './project/project-list';
import ResponsiveMenu from './common/responsive-menu';
import YAPMTNotification from './common/notification';
import { connect } from 'react-redux';
import { hideMenu } from '../actions/menu-actions';

class Main extends Component {
    render() {
        return (
            <div className="main">
                <ResponsiveMenu headerText="Projects">
                    <ProjectsList history={this.props.history} />
                    <Link className="link-new" onClick={() => this.props.hideMenu()} to="/projects/new">
                        <i className="fa fa-plus"></i>
                        New project
                    </Link>
                </ResponsiveMenu>
                {this.props.children}
                <YAPMTNotification />
            </div>
        );
    }
}

export default connect(null, { hideMenu })(Main);