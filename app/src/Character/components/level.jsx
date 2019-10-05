import React from "react";
import ProgressBar from "ProgressBar/component";
import styles from "Character/styles.module.scss";
import PropTypes from "prop-types";

const Level = ({level, xp}) => (
  <React.Fragment>
      <h2 className={styles.currentLevel}>
          Level {level}
      </h2>
      <div className={styles.nextLevel}>
        <span style={{fontWeight: "bold", marginRight: 5}}>
            {7 + level - xp}
        </span>
          XP needed for next level
      </div>
      <div className={styles.experienceBar}>
          <ProgressBar progress={xp} width={7 + level} outline={true} color={"#0077CC"} thickness={15} />
      </div>
  </React.Fragment>
);

Level.defaultProps = {
    level: 1,
    xp: 0
};

Level.propTypes = {
    level: PropTypes.number,
    xp: PropTypes.number
};

export default Level;