import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import {Link} from "react-router-dom";
import styles from "CharacterSummary/styles.module.scss"
import * as routes from "routes";

const CharacterSummary = ({character, onClick}) => (
    <Link to={`${routes.ROUTE_CHARACTERS}/${character.id}`} onClick={() => onClick(character.id)} className={styles.link}>
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
                        {character.race}
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
    character: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string,
        level: PropTypes.number.isRequired,
        race: PropTypes.string,
        specialty: PropTypes.string
    }).isRequired,

    onClick: PropTypes.func
};

export default CharacterSummary;