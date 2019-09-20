import React from 'react';
import { withAuthenticator } from 'aws-amplify-react';
import {Route} from "react-router";
import {BrowserRouter as Router} from "react-router-dom";
import {ROUTE_BASE} from "routes";
import CharacterSelection from "CharacterSelection/component";

const App = () => (
    <Router basename={process.env.PUBLIC_URL}>
        <Route path={ROUTE_BASE} component={CharacterSelection} />
    </Router>
);

export default withAuthenticator(App, true, null, null, null, {
    hiddenDefaults: ["phone_number", "email"]
});