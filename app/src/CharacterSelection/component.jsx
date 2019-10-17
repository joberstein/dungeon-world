import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {Route, Switch} from "react-router";
import CharacterSummary from "CharacterSummary/component";
import styles from "CharacterSelection/styles.module.scss";
import Character from "Character/component";
import Bonds from "Bonds/component";
import Navigation from "Navigation/component";
import * as routes from "routes";

class CharacterSelection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {characterId: undefined};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {pathname} = this.props.location;

        if (pathname !== prevProps.location.pathname && pathname === routes.ROUTE_BASE) {
            this.selectCharacter(undefined);
        }
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
        <Router basename={this.props.match.path}>
            <Navigation/>
            <Switch>
                <Route path={routes.ROUTE_CHARACTER} render={() => <Character {...this.getMockCharacterData()} />} />
                <Route path={routes.ROUTE_BONDS} render={() => <Bonds bonds={this.getMockCharacterData().bonds}/>} />
                <Route path={routes.ROUTE_SESSIONS} />
                <Route path={routes.ROUTE_ACTIONS} />
                <Route path={routes.ROUTE_BAG} />
                <Route path={routes.ROUTE_BATTLE} />
            </Switch>
        </Router>
    );

    selectCharacter = characterId => this.setState({characterId});
    getMockCharacterData = () => data.find(c => c.id === this.state.characterId);
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
        },
        bonds: [
            {
                id: 1,
                companion: "Yasha",
                description: "They have felt the hellish touch of fire, now they know my strength.",
                completed: false
            },
            {
                id: 2,
                companion: "Kiya",
                description: "I will teach them the true meaning of sacrifice.",
                completed: true
            },
            {
                id: 3,
                companion: "Steve",
                description: "I cast something into the fire for them and still owe them their due.",
                completed: false
            }
        ]
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