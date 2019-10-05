import React from "react";
import PropTypes from "prop-types";
import styles from "Character/styles.module.scss";

const Attributes = ({age, looks}) => (
    <React.Fragment>
        <div className={styles.age}>
            <span className={styles.age__key}>
                Age:
            </span>
            <span>
                {age || "Unknown"}
            </span>
        </div>

        <div className={styles.looks}>
            {Object.keys(looks)
                .filter(lookKey => !!looks[lookKey])
                .map(lookKey => (
                    <div className={styles.looks} key={lookKey}>
                        <span className={styles.looks__key}>
                            {lookKey.slice(0, 1).toUpperCase() + lookKey.slice(1).toLowerCase()}:
                        </span>
                        <span>
                            {looks[lookKey]}
                        </span>
                    </div>
                ))
            }
        </div>
    </React.Fragment>
);

Attributes.defaultProps = {
    looks: {}
};

Attributes.propTypes = {
    age: PropTypes.number,
    looks: PropTypes.shape({
        body: PropTypes.string,
        eyes: PropTypes.string,
        voice: PropTypes.string,
        demeanor: PropTypes.string
    })
};

export default Attributes;