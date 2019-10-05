import React from "react";
import PropTypes from "prop-types";
import styles from "Character/styles.module.scss";
import Race from "Character/components/race";
import Stats from "Character/components/stats";
import Level from "Character/components/level";
import Attributes from "Character/components/attributes";
import Alignment from "Character/components/alignment";

const Character = ({name, level, xp, race, age, look, specialty, stats, alignment}) => (
    <div className={styles.container}>
        <div className={styles.character}>
            <h1 className={styles.name}>
                {name}
            </h1>
            <h2 className={styles.specialty}>
                {specialty}
            </h2>


            <div className={styles.row}>
                <div className={styles.column}>
                    <div className={styles.dataGroup}>
                        <Level xp={xp} level={level} />
                    </div>
                    <div className={styles.dataGroup}>
                        <Race race={race} />
                    </div>
                    <div className={styles.dataGroup}>
                        <Alignment alignment={alignment}/>
                    </div>
                </div>

                <div className={styles.column}>
                    <div className={styles.dataGroup}>
                        <Stats stats={stats} />
                    </div>

                    {(age || Object.keys(look).length > 0) &&
                        <div className={styles.dataGroup}>
                            <Attributes age={age} looks={look}/>
                        </div>
                    }
                </div>
            </div>
        </div>
    </div>
);

Character.propTypes = {
    name: PropTypes.string.isRequired,
    specialty: PropTypes.string.isRequired,
    ...Race.propTypes,
    ...Level.propTypes,
    ...Stats.propTypes,
    ...Attributes.propTypes
};

export default Character;