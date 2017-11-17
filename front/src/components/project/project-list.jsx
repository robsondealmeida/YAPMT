import React, { Component } from 'react';
import { activateProject, fetchProjects } from '../../actions/project-actions';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { hideMenu } from '../../actions/menu-actions';

class ProjectList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProjects();
    }

    changeActive(id) {
        this.props.hideMenu();
        this.props.activateProject(id, (response) => {
            this.props.history.push(`/project/${id}`);
        });
    }

    renderProjects() {
        return this.props.projects ?
            this.props.projects.map((project) => {
                return <a onClick={() => this.changeActive(project._id)} href="#" className="link" key={project._id}>
                    <div className="project">
                        {project.name}
                    </div>
                </ a>
            }) : null;
    }

    render() {
        return (
            <div className="project-list">
                {this.renderProjects()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        projects: state.projects.list
    }
}

export default connect(mapStateToProps, { fetchProjects, activateProject, hideMenu })(ProjectList);