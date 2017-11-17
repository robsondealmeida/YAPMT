import { createProject, fetchProjects } from "../../actions/project-actions";

import BaseComponent from "../common/base-component";
import Input from "../common/input";
import ProjectDAO from "../../api/project/dao/project-dao";
import React from 'react';
import { connect } from 'react-redux';
import { createNotification } from '../../actions/notification-actions';

class ProjectNew extends BaseComponent {
    constructor(props) {
        super(props);

        this.state = {
            ...this.state,
            name: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        createProject({ name: this.state.name }, ({ data }) => {
            this.props.createNotification("success", "Project created");
            this.props.fetchProjects();
            this.setState({ name: "" });
        }, (err) => {
            this.handleError(err);
        });
    }

    render() {
        return (
            <div className="project-new">
                <form onSubmit={this.onSubmit}>
                    <Input
                        placeholder={"Type new project name"}
                        value={this.state.name}
                        onChange={this.handleChange.bind(this, "name")}
                        error={this.state.errors.name}
                        maxlength={50} />

                    { this.isMobile() ? <button type="submit">Create project</button> : null }
                </form>
            </div>
        );
    }
}

export default connect(null, { createProject, fetchProjects, createNotification })(ProjectNew);