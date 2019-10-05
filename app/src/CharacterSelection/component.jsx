import React from "react";
import {Route, Switch} from "react-router";
import {BrowserRouter as Router} from "react-router-dom";
import CharacterSummary from "CharacterSummary/component";
import styles from "CharacterSelection/styles.module.scss";
import Character from "Character/component";
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
                <Route exact path={routes.ROUTE_BASE} render={() => <Character {...data.find(c => c.id === this.state.characterId)} />}/>
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
        specialty: "Immolator",
        xp: 0,
        race: {
            name: "Salamander",
            description: "Non-magical heat and fire cannot harm you."
        },
        alignment: {
            name: "Chaotic",
            description: "Spread a dangerous new idea."
        },
        look: {
            body: "Perfect Skin",
            eyes: "Warm",
            voice: "Whispering",
            demeanor: "Imperious Bearing"
        },
        stats:  {
            constitution: 13,
            charisma: 16,
            dexterity: 9,
            intelligence: 8,
            strength: 12,
            wisdom: 15
        }
    }, {
        id: 2,
        name: "Kiya",
        level: 3,
        specialty: "Thief",
        xp: 8,
        race: {
            name: "Halfling",
            description: "Non-magical heat and fire cannot harm you."
        },
        alignment: {
            name: "Neutral",
            description: "Exchange a sacrifice, freely given, for a service rendered."
        },
        look: {},
        stats: {
            constitution: 8,
            charisma: 9,
            dexterity: 16,
            intelligence: 13,
            strength: 15,
            wisdom: 12
        }
    }, {
        id: 3,
        name: "Yosha",
        level: 5,
        specialty: "Wizard",
        age: 21,
        xp: 3,
        race: {
            name: "Goblin",
            description: "Non-magical heat and fire cannot harm you."
        },
        alignment: {
            name: "Evil",
            description: "Sacrifice an unwilling victim to the flames."
        },
        look: {
            body: "Tall",
            voice: "Loud",
            eyes: "",
            demeanor: "Happy"
        },
        stats: {
            constitution: 9,
            charisma: 8,
            dexterity: 15,
            intelligence: 12,
            strength: 16,
            wisdom: 13
        }
    }
];