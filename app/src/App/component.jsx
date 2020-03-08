import React from 'react';
import { withAuthenticator } from 'aws-amplify-react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import CharacterSelection from "CharacterSelection/component";
import 'react-tabs/style/react-tabs.scss';
import * as routes from "routes";

const App = () => (
    <Router basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route path={routes.ROUTE_CHARACTERS} component={CharacterSelection} />
            <Redirect to={routes.ROUTE_CHARACTERS} />
        </Switch>
    </Router>
);

export default withAuthenticator(App, true, null, null, null, {
    hiddenDefaults: ["phone_number", "email"]
});