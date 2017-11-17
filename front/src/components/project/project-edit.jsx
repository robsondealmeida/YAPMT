import React, { Component } from 'react';
import { activateProject, deleteProject, fetchProjects, loadProject, updateProject } from "../../actions/project-actions";

import BaseComponent from "../common/base-component";
import Input from '../common/input';
import { connect } from 'react-redux';
import { createNotification } from "../../actions/notification-actions";

class ProjectEdit extends BaseComponent {
    constructor(props) {
        super(props);

        this.state = {
            ...this.state,
            description: "",
            owner: "",
            dueDate: ""
        }

        this.renderTaskForm = this.renderTaskForm.bind(this);
        this.addTask = this.addTask.bind(this);
        this.renderProjectOverview = this.renderProjectOverview.bind(this);
    }

    componentDidMount() {
        this.props.loadProject(this.props.match.params.id);
    }

    validateTask() {
        if (!this.state.description) {
            this.setState({ ...this.state, errors: { description: "Required" } });
            this.props.createNotification("error", "Description is required.");
            return false;
        }

        if (!this.state.owner) {
            this.setState({ ...this.state, errors: { owner: "Required" } });
            this.props.createNotification("error", "Owner is required.");
            return false;
        }

        const dueDate = this.toDate(this.state.dueDate);
        if (dueDate === null || dueDate == 'Invalid Date') {
            this.setState({ ...this.state, errors: { dueDate: "Required" } });
            this.props.createNotification("error", "Invalid due date");
            return false;
        }

        return true;
    }

    addTask(e) {
        e.preventDefault();

        if (this.validateTask()) {
            const dueDate = this.toDate(this.state.dueDate);
            const task = {
                description: this.state.description,
                owner: this.state.owner,
                dueDate
            }

            const project = this.props.project;
            project.tasks = project.tasks ? [...project.tasks, task] : [task];

            this.props.updateProject(project, () => {
                this.props.createNotification("success", "Task created");
                this.props.loadProject(project._id);
                this.setState({ description: "", owner: "", dueDate: "", creatingTask: false });
            }, (err) => {
                this.handleError(err);
            });
        }
    }

    renderProjectOverview() {
        if (!this.props.project || !this.props.project.tasks) {
            return null;
        } else {
            let countLate = 0, countCompleted = 0;
            this.props.project.tasks.forEach((task) => {
                if (task.completed) {
                    countCompleted++;
                } else if (this.isTaskLate(task)) {
                    countLate++;
                }
            });

            return <span className="project-overview">
                {countCompleted}/{countLate}/{this.props.project.tasks.length}
            </span>
        }
    }

    setTaskCreating() {
        this.setState({ ...this.state, creatingTask: true });
    }

    renderTaskForm() {
        return <form className="form-new-task" onSubmit={this.addTask}>
            <Input
                inline
                placeholder="Type new task"
                value={this.state.description}
                onChange={this.handleChange.bind(this, "description")}
                error={this.state.errors.description}
                maxlength={150} />

            {!this.isMobile() ? ", @" : null}

            <Input
                inline
                placeholder="owner"
                value={this.state.owner}
                onChange={this.handleChange.bind(this, "owner")}
                error={this.state.errors.owner}
                maxlength={50} />

            {!this.isMobile() ? ", " : null}

            <Input
                inline
                placeholder="due date (mm/dd)"
                value={this.state.dueDate}
                onChange={this.handleChange.bind(this, "dueDate")}
                error={this.state.errors.dueDate}
                maxlength={5} />

            {this.isMobile() ? <button type="submit">Create task</button> : null}
            <input className="hidden" type="submit" />
        </form>
    }

    isTaskLate(task) {
        const tdate = new Date(task.dueDate)
        const now = new Date();
        now.setHours(0, 0, 0, 0);
        tdate.setHours(0, 0, 0, 0);
        return tdate < now;
    }

    toggleComplete(e, targetTask) {
        const project = this.props.project;

        targetTask.completed = e.target.checked;

        this.props.updateProject(this.props.project, () => {
            this.props.loadProject(project._id);
        });
    }

    renderTasksList() {
        if (!this.props.project || !this.props.project.tasks) {
            return null;
        }

        this.props.project.tasks.sort((a, b) => {
            const dueDateA = new Date(a.dueDate);
            const dueDateB = new Date(b.dueDate);

            if (dueDateA > dueDateB) {
                return 1;
            } else if (dueDateA < dueDateB) {
                return -1;
            } else {
                return a.description > b.description ? 1 : -1;
            }
        })

        return this.props.project.tasks.map((task) => {
            const isLate = this.isTaskLate(task);
            return <div
                className={`task ${task.completed ? "completed" : ""} ${isLate ? "late" : ""}`}
                key={task._id || task.description}>
                <input id={`completed${task._id}`} type="checkbox" onChange={(e) => this.toggleComplete(e, task)} checked={task.completed} />
                <label htmlFor={`completed${task._id}`}>{task.description}, </label>
                <label htmlFor={`completed${task._id}`} className={isLate ? "" : "light-gray"}>@{task.owner}, </label>
                <label htmlFor={`completed${task._id}`} className={isLate ? "" : "light-gray"}>{this.toFriendlyString(task.dueDate)} </label>
            </div>
        })
    }

    deleteProject() {
        if (this.props.project) {
            if (confirm("Are you sure you want to delete this project?")) {
                this.props.deleteProject(this.props.project._id);
                this.props.fetchProjects();
                this.props.history.push("/projects/new");
            }
        }
    }

    render() {
        return <div className="project-edit">
            <div className="title">
                <Input readOnly
                    value={this.props.project ? this.props.project.name : "Loading..."}
                    onChange={this.handleChange.bind(this, "name")}
                    error={this.state.errors.name}
                    maxlength={50} />
                <a onClick={this.deleteProject.bind(this)} className="delete-project" href="#">
                    <i className="fa fa-times"></i>
                    Delete project
                </a>
                {this.renderProjectOverview()}
            </div>
            <div className="tasks">
                <div className="list">
                    {this.renderTasksList()}
                </div>
                {
                    this.state.creatingTask ?
                        this.renderTaskForm() :
                        <a onClick={this.setTaskCreating.bind(this)} className="add-task" href="#">
                            <i className="fa fa-plus"></i>
                            Add task
                        </a>
                }
            </div>
        </div>;
    }
}

function mapStateToProps(state) {
    return {
        project: state.projects.active
    }
}

export default connect(mapStateToProps,
    {
        loadProject,
        updateProject,
        fetchProjects,
        createNotification,
        deleteProject,
        activateProject
    }
)(ProjectEdit);