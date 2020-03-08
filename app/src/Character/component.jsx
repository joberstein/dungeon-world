import React from "react";
import PropTypes from "prop-types";
import {Redirect, Route, Switch} from "react-router";
import {withRouter} from "react-router-dom";
import styles from "Character/styles.module.scss";
import Race from "Character/components/race";
import Stats from "Character/components/stats";
import Level from "Character/components/level";
import Attributes from "Character/components/attributes";
import Alignment from "Character/components/alignment";
import Navigation from "Navigation/component";
import Bonds from "Bonds/component";
import {ROUTE_CHARACTERS, ROUTE_ABOUT, ROUTE_BONDS, ROUTE_ACTIONS, ROUTE_SESSIONS, ROUTE_BATTLE, ROUTE_BAG} from "routes";

class Character extends React.Component {

    render() {
        const {match, id, name, specialty, xp, level, race, alignment, stats, age, look, bonds} = this.props;

        return (
            <React.Fragment>
                <Navigation/>
                <Switch>
                    <Route path={`${match.path}${ROUTE_ABOUT}`} render={() => (
                        <div className={styles.container}>
                            <div className={styles.character}>
                                <h1 className={styles.name}>
                                    {name}
                                </h1>
                                <h2 className={styles.specialty}>
                                    {specialty}
                                </h2>


                                <div className={styles.row}>
                                    <div className={styles.column}>
                                        <div className={styles.dataGroup}>
                                            <Level xp={xp} level={level} />
                                        </div>
                                        <div className={styles.dataGroup}>
                                            <Race race={race} />
                                        </div>
                                        <div className={styles.dataGroup}>
                                            <Alignment alignment={alignment}/>
                                        </div>
                                    </div>

                                    <div className={styles.column}>
                                        <div className={styles.dataGroup}>
                                            <Stats stats={stats} />
                                        </div>

                                        {(age || Object.keys(look).length > 0) && (
                                            <div className={styles.dataGroup}>
                                                <Attributes age={age} looks={look}/>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )} />

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
    name: PropTypes.string.isRequired,
    specialty: PropTypes.string.isRequired,
    ...Race.propTypes,
    ...Level.propTypes,
    ...Stats.propTypes,
    ...Attributes.propTypes
};

export default withRouter(Character);