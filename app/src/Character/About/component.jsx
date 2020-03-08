import React from "react";
import PropTypes from "prop-types";
import styles from "Character/About/styles.module.scss";
import Race from "Character/About/race";
import Stats from "Character/About/stats";
import Level from "Character/About/level";
import Attributes from "Character/About/attributes";
import Alignment from "Character/About/alignment";

class About extends React.Component {

    render() {
        const {name, specialty, xp, level, race, alignment, stats, age, look} = this.props;

        return (
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

                            {(age || Object.keys(look).length > 0) && (
                                <div className={styles.dataGroup}>
                                    <Attributes age={age} looks={look}/>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

About.propTypes = {
    name: PropTypes.string.isRequired,
    specialty: PropTypes.string.isRequired,
    ...Race.propTypes,
    ...Level.propTypes,
    ...Stats.propTypes,
    ...Attributes.propTypes
};

export default About;