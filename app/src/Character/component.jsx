import React from "react";
import PropTypes from "prop-types";
import {Redirect, Route, Switch} from "react-router";
import {withRouter} from "react-router-dom";
import Navigation from "Character/Navigation/component";
import About from "Character/About/component";
import Bonds from "Character/Bonds/component";
import {ROUTE_CHARACTERS, ROUTE_ABOUT, ROUTE_BONDS, ROUTE_ACTIONS, ROUTE_SESSIONS, ROUTE_BATTLE, ROUTE_BAG} from "routes";

class Character extends React.Component {

    render() {
        const {match, id, about, bonds} = this.props;

        return (
            <React.Fragment>
                <Navigation/>
                <Switch>
                    <Route path={`${match.path}${ROUTE_ABOUT}`} render={() => <About {...about} />} />
                    <Route path={`${match.path}${ROUTE_BONDS}`} render={() => <Bonds bonds={bonds}/>} />
                    <Route path={`${match.path}${ROUTE_SESSIONS}`} />
                    <Route path={`${match.path}${ROUTE_ACTIONS}`} />
                    <Route path={`${match.path}${ROUTE_BAG}`} />
                    <Route path={`${match.path}${ROUTE_BATTLE}`} />
                    <Redirect to={`${ROUTE_CHARACTERS}/${id}${ROUTE_ABOUT}`}/>
                </Switch>
            </React.Fragment>
        );
    }
}

Character.propTypes = {
    id: PropTypes.number.isRequired,
    about: PropTypes.object.isRequired,
    bonds: PropTypes.array.isRequired
};

export default withRouter(Character);