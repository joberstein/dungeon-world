import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import {Link} from "react-router-dom";
import styles from "CharacterSummary/styles.module.scss";
import Character from "Character/component";
import * as routes from "routes";

const CharacterSummary = ({character, onClick}) => (
    <Link to={routes.ROUTE_CHARACTER} onClick={() => onClick(character.id)} className={styles.link}>
        <div className={styles.summary}>
            <div className={cn(styles.column, styles.characterPortrait)}>
                <img src="" alt="Character Portrait"/>
            </div>
            <div className={cn(styles.column, styles.characterData)}>
                <div className={styles.row}>
                    <h2 className={cn(styles.dataPoint, styles.mainDataPoint)}>
                        {character.name}
                    </h2>
                    <h2 className={cn(styles.dataPoint, styles.mainDataPoint)}>
                        {character.specialty}
                    </h2>
                </div>
                <div className={styles.row}>
                    <span className={cn(styles.dataPoint, styles.subDataPoint)}>
                        {character.race.name}
                    </span>
                </div>
                <div className={styles.row}>
                    <span className={cn(styles.dataPoint, styles.subDataPoint)}>
                        Level {character.level}
                    </span>
                </div>
            </div>
        </div>
    </Link>
);

CharacterSummary.defaultProps = {
    onClick: () => {}
};

CharacterSummary.propTypes = {
    character: PropTypes.shape(Character.propTypes),
    onClick: PropTypes.func
};

export default CharacterSummary;