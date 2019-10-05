import PropTypes from "prop-types";
import React from "react";
import ProgressBar from "ProgressBar/component";
import styles from "Character/styles.module.scss";

class CharacterStats extends React.Component {

    render() {
        const statBarWidth = this.getStatBarWidth();

        return (
            <React.Fragment>
                {this.getSortedStats().map(stat => (
                    <div className={styles.stat} key={stat[0]}>
                        <ProgressBar label={this.getStatLabel(stat[0], stat[1])}
                                     width={statBarWidth}
                                     progress={stat[1]}
                                     color={this.getStatBarColor(stat[1])} />
                    </div>
                ))}
            </React.Fragment>
        );
    };

    getStatBarWidth = () => 2 + Math.max(...Object.values(this.props.stats));

    getStatBarColor = stat => stat > 12 ?
        "#00AA00" :
        stat > 8 ? "#FFCC00" : "#CC0000";

    getSortedStats = () => {
        const statList = Object.entries(this.props.stats).slice();
        statList.sort((a, b) => a[1] > b[1] ? -1 : 1);
        return statList;
    };

    getStatLabel = (statName, statValue) => (
        <div className={styles.statLabel}>
            <span className={styles.statAbbreviation}>
                {this.getStatAbbreviation(statName)}
            </span>
            <sup className={styles.statModifier}>
                {this.getStatModifier(statValue)}
            </sup>
        </div>
    );

    getStatModifier = stat => {
        if (stat > 17) {
            return "+3";
        } else if (stat > 15) {
            return "+2";
        } else if (stat > 12) {
            return "+1";
        } else if (stat > 8) {
            return "+0";
        } else if (stat > 5) {
            return "-1";
        } else if (stat > 3) {
            return "-2";
        } else {
            return "-3";
        }
    };

    getStatAbbreviation = stat => {
        switch (stat.toLowerCase()) {
            case "charisma":
                return "CHA";
            case "constitution":
                return "CON";
            case "dexterity":
                return "DEX";
            case "intelligence":
                return "INT";
            case "strength":
                return "STR";
            case "wisdom":
                return "WIS";
            default:
                console.error(`Stat ${stat} does not have an abbreviation`);
                return "";
        }
    };
}

CharacterStats.propTypes = {
    stats: PropTypes.shape({
        constitution: PropTypes.number.isRequired,
        charisma: PropTypes.number.isRequired,
        dexterity: PropTypes.number.isRequired,
        intelligence: PropTypes.number.isRequired,
        strength: PropTypes.number.isRequired,
        wisdom: PropTypes.number.isRequired
    })
};

export default CharacterStats;