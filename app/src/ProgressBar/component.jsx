import React from "react";
import PropTypes from "prop-types";
import styles from "ProgressBar/styles.module.scss";

const ProgressBar = ({label, progress, width, outline, color, thickness, maxSections}) => (
    <div className={styles.container} style={getContainerStyle(thickness)}>
        {label && label}
        <div className={styles.bar} style={getBarStyle(outline, thickness)}>
            <div className={styles.progress} style={getBarFillStyle(progress, width, color)}/>

            {maxSections > 1 && [...Array(maxSections - 1).keys()].map(i => (
                <div className={styles.barBreak} key={i} style={{left: getBreakPosition(maxSections, i)}}/>
            ))}
        </div>
    </div>
);

const getBreakPosition = (maxSections, breakIdx) => `${(100 / maxSections) * (breakIdx + 1)}%`;

const getContainerStyle = thickness => ({
    height: thickness
});

const getBarStyle = outline => ({
    border: outline ? "1px solid #aaa" : "none"
});

const getBarFillStyle = (progress, width, color) => ({
    width: progress > 0 ? `${(progress / width) * 100}%` : '1%',
    background: color
});

ProgressBar.defaultProps = {
    progress: 0,
    width: 100,
    outline: false,
    color: "#000",
    thickness: "100%",
    maxBreaks: 0
};

ProgressBar.propTypes = {
    label: PropTypes.object,
    progress: PropTypes.number,
    width: PropTypes.number,
    outline: PropTypes.bool,
    color: PropTypes.string,
    thickness: PropTypes.number,
    maxBreaks: PropTypes.number
};

export default ProgressBar;