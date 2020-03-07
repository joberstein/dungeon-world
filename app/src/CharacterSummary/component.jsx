import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "CharacterSummary/styles.module.scss";
import Character from "Character/component";
import * as routes from "routes";
import barbarian from "CharacterSummary/img/barbarian-inverted.png";
import bard from "CharacterSummary/img/bard-inverted.png";
import cleric from "CharacterSummary/img/cleric-inverted.png";
import druid from "CharacterSummary/img/druid-inverted.png";
import fighter from "CharacterSummary/img/fighter-inverted.png";
import immolator from "CharacterSummary/img/immolator-inverted.png";
import paladin from "CharacterSummary/img/paladin-inverted.png";
import ranger from "CharacterSummary/img/ranger-inverted.png";
import thief from "CharacterSummary/img/thief-inverted.png";
import wizard from "CharacterSummary/img/wizard-inverted.png";

const CharacterSummary = ({character, onClick}) => (
    <Link to={routes.ROUTE_CHARACTER} onClick={() => onClick(character.id)} className={styles.link}>
        <div className={styles.summary}>
            <div className={styles.row}>
                <h1>
                    {character.name}
                </h1>
            </div>

            <div className={styles.row}>
                <div className={styles.classIcon}>
                    <img src={getClassIcon(character.specialty.toLowerCase())} alt={character.specialty} />
                </div>
            </div>

            <div className={styles.row}>
                <h2>
                    Lvl. {character.level}
                </h2>
            </div>
        </div>
    </Link>
);

const getClassIcon = specialty => {
    switch (specialty) {
        case "barbarian":   return barbarian;
        case "bard":        return bard;
        case "cleric":      return cleric;
        case "druid":       return druid;
        case "fighter":     return fighter;
        case "immolator":   return immolator;
        case "paladin":     return paladin;
        case "ranger":      return ranger;
        case "thief":       return thief;
        case "wizard":      return wizard;
        default:            return "";
    }
};

CharacterSummary.defaultProps = {
    onClick: () => {}
};

CharacterSummary.propTypes = {
    character: PropTypes.shape(Character.propTypes),
    onClick: PropTypes.func
};

export default CharacterSummary;