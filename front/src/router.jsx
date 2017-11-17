import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';

import DestinyChooser from './destiny-chooser';
import Main from './components/main';
import ProjectEdit from './components/project/project-edit';
import ProjectNew from './components/project/project-new';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={DestinyChooser} />
                    <Route exact path='/projects/new'
                        render={(options) =>
                            <Main history={options.history}>
                                <ProjectNew />
                            </Main>}
                    />
                    <Route exact path='/project/:id'
                        render={(options) =>
                            <Main history={options.history}>
                                <ProjectEdit history={options.history} match={options.match} />
                            </Main>}
                    />
                    <Redirect from='*' to='/' />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default (Router);