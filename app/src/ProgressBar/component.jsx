import React from "react";
import PropTypes from "prop-types";
import styles from "ProgressBar/styles.module.scss";

const ProgressBar = ({label, progress, width, outline, color, thickness}) => (
    <div className={styles.container}>
        {label && label}
        <div className={styles.bar} style={getBarStyle(outline, thickness)}>
            <div className={styles.progress} style={getBarFillStyle(progress, width, color)}/>
        </div>
    </div>
);

const getBarStyle = (outline, thickness) => ({
    border: outline ? "1px solid #aaa" : "none",
    height: thickness
});

const getBarFillStyle = (progress, width, color) => ({
    width: progress > 0 ? `${(progress / width) * 100}%` : '1%',
    borderColor: color,
    background: color
});

ProgressBar.defaultProps = {
    progress: 0,
    width: 100,
    outline: false,
    color: "#000",
    thickness: 8
};

ProgressBar.propTypes = {
    label: PropTypes.object,
    progress: PropTypes.number,
    width: PropTypes.number,
    outline: PropTypes.bool,
    color: PropTypes.string,
    thickness: PropTypes.number
};

export default ProgressBar;