import React from "react";
import {withRouter, Link} from "react-router-dom";
import Add from "@material-ui/icons/Add";
import CharacterSummary from "Character/Summary/component";
import styles from "Characters/Selection/styles.module.scss";
import Icon from "Icon/component";
import {ROUTE_CHARACTER_NEW} from "routes";

const  CharacterSelection = ({match, characters}) => (
    <div className={styles.container}>
        <h1 className={styles.headerText}>
            Your Characters
        </h1>
        <div className={styles.characters}>
            {characters.map(character => <CharacterSummary {...character} key={character.id} /> )}
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
);

export default withRouter(CharacterSelection);