import React from "react";
import PropTypes from "prop-types";
import {Link, withRouter} from "react-router-dom";
import styles from "Character/Summary/styles.module.scss";
import Character from "Character/component";
import barbarian from "Character/Summary/img/barbarian-inverted.png";
import bard from "Character/Summary/img/bard-inverted.png";
import cleric from "Character/Summary/img/cleric-inverted.png";
import druid from "Character/Summary/img/druid-inverted.png";
import fighter from "Character/Summary/img/fighter-inverted.png";
import immolator from "Character/Summary/img/immolator-inverted.png";
import paladin from "Character/Summary/img/paladin-inverted.png";
import ranger from "Character/Summary/img/ranger-inverted.png";
import thief from "Character/Summary/img/thief-inverted.png";
import wizard from "Character/Summary/img/wizard-inverted.png";
import {ROUTE_ABOUT} from "routes";

const CharacterSummary = ({id, about, match}) => (
    <Link to={`${match.url}/${id}${ROUTE_ABOUT}`} className={styles.link}>
        <div className={styles.summary}>
            <div className={styles.row}>
                <h1>
                    {about.name}
                </h1>
            </div>

            <div className={styles.row}>
                <div className={styles.classIcon}>
                    <img src={getClassIcon(about.specialty.toLowerCase())} alt={about.specialty} />
                </div>
            </div>

            <div className={styles.row}>
                <h2>
                    Lvl. {about.level}
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

CharacterSummary.propTypes = {
    character: PropTypes.shape(Character.propTypes)
};

export default withRouter(CharacterSummary);