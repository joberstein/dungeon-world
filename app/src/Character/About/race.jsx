import React from "react";
import PropTypes from "prop-types";
import styles from "Character/About/styles.module.scss";

const Race = ({race}) => (
    <React.Fragment>
        <h2 className={styles.race}>
            {race.name}
        </h2>

        <span className={styles.race__description}>
            {race.description}
        </span>
    </React.Fragment>
);

Race.propTypes = {
    race: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    })
};

export default Race;