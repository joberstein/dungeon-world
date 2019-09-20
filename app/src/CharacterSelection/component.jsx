import React from "react";
import {Route, Switch} from "react-router";
import {BrowserRouter as Router} from "react-router-dom";
import CharacterSummary from "CharacterSummary/component";
import styles from "CharacterSelection/styles.module.scss";
import * as routes from "routes";

class CharacterSelection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {characterId: undefined};
    }

    render = () => this.state.characterId ? this.renderRoutes() : this.renderCharacterOptions();

    renderCharacterOptions = () => (
        <div className={styles.container}>
            <h1 className={styles.headerText}>
                Your Characters
            </h1>
            <div className={styles.characters}>
                {data.map(character => (
                    <CharacterSummary character={character} onClick={this.selectCharacter} key={character.id} />
                ))}
            </div>
        </div>
    );

    renderRoutes = () => (
        <Router basename={`${routes.ROUTE_CHARACTERS}/${this.state.characterId}`}>
            <Switch>
                <Route exact path={routes.ROUTE_BASE} />
                <Route path={routes.ROUTE_ACTIONS} />
                <Route path={routes.ROUTE_BAG} />
                <Route path={routes.ROUTE_BATTLE} />
                <Route path={routes.ROUTE_BONDS} />
                <Route path={routes.ROUTE_IDENTITY} />
            </Switch>
        </Router>
    );

    selectCharacter = characterId => this.setState({characterId});
}

export default CharacterSelection;

const data = [
    {
        id: 1,
        name: "Charf",
        level: 2,
        race: "Salamander",
        specialty: "Immolator"
    }, {
        id: 2,
        name: "Kiya",
        level: 3,
        race: "Halfling",
        specialty: "Thief"
    }, {
        id: 3,
        name: "Yosha",
        level: 5,
        race: "Goblin",
        specialty: "Wizard"
    }
];