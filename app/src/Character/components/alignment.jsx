import React from "react";
import PropTypes from "prop-types";
import styles from "Character/styles.module.scss";

const Alignment = ({alignment}) => (
    <React.Fragment>
        <h2 className={styles.alignment}>
            {alignment.name}
        </h2>

        <span className={styles.alignment__description}>
            {alignment.description}
        </span>
    </React.Fragment>
);

Alignment.propTypes = {
    alignment: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    })
};

export default Alignment;