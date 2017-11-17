import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProjects } from './actions/project-actions';

class DestinyChooser extends Component {
    componentDidMount() {
        this.props.fetchProjects();
    }

    render() {
        return (
            !this.props.projects ?
                <span>"Loading.."</span> :
                this.props.projects.length === 0 ?
                    <Redirect from='*' to='/projects/new' /> :
                    <Redirect from='*' to={`/project/${this.props.projects[0]._id}`} />

        );
    }
}

function mapStateToProps(state) {
    return {
        projects: state.projects.list
    }
}

export default connect(mapStateToProps, { fetchProjects })(DestinyChooser);