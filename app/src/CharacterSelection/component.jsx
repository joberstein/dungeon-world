import React from "react";
import {withRouter, Link, Route, Switch, Redirect} from "react-router-dom";
import Add from "@material-ui/icons/Add";
import CharacterSummary from "CharacterSummary/component";
import styles from "CharacterSelection/styles.module.scss";
import Character from "Character/component";
import Icon from "Icon/component";
import {ROUTE_CHARACTERS, ROUTE_CHARACTER, ROUTE_CHARACTER_NEW} from "routes";

class CharacterSelection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {characters};
    }

    render() {
        return (
            <Switch>
                <Route path={this.props.match.path} exact strict render={({match}) => (
                    <div className={styles.container}>
                        <h1 className={styles.headerText}>
                            Your Characters
                        </h1>
                        <div className={styles.characters}>
                            {this.state.characters.map(character => (
                                <CharacterSummary character={character} key={character.id} />
                            ))}
                        </div>

                        <Link to={`${match.path}${ROUTE_CHARACTER_NEW}`} className={styles.newCharacterLink}>
                            <button className={styles.newCharacterButton}>
                                    <Icon IconComponent={Add}
                                          iconClassName={styles.createCharacter}
                                          iconProps={{className: styles.icon__add}}
                                          label="New Character" />
                            </button>
                        </Link>
                    </div>
                )} />

                <Route path={`${this.props.match.path}${ROUTE_CHARACTER_NEW}`} render={() => {}} />
                <Route path={`${this.props.match.path}${ROUTE_CHARACTER}`} render={props => <Character {...this.getCharacter(props)} />}/>
                <Redirect to={ROUTE_CHARACTERS} />
            </Switch>
        );
    }

    getCharacter = props => this.state.characters.find(c => c.id === parseInt(props.match.params.id));
}

export default withRouter(CharacterSelection);

const characters = [
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