import React from "react";
import PropTypes from "prop-types";
import {Tabs, TabList, Tab, TabPanel} from "react-tabs";
import Bond from "Character/Bonds/Bond/component";
import Icon from "Icon/component";
import Add from "@material-ui/icons/Add";
import styles from "Character/Bonds/styles.module.scss";

const TABS = ["To-Do", "Completed"];

class Bonds extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bonds: props.bonds
        };
    }

    render() {
        const uncompletedBonds = this.state.bonds.filter(bond => !bond.completed);
        const completedBonds = this.state.bonds.filter(bond => !!bond.completed);

        return (
            <Tabs className={styles.tabs}>
                <TabList className={styles.tabList}>
                    {TABS.map(tabName => (
                        <Tab key={tabName} className={styles.tab} selectedClassName={styles.selectedTab}>
                            {tabName}
                        </Tab>
                    ))}
                </TabList>

                <TabPanel className={styles.tabPanel}>
                    {uncompletedBonds.length <= 0 ?
                    <p className={styles.noBonds}>No bonds to complete</p> :
                        uncompletedBonds.map(bond => (
                            <Bond key={bond.id || -1} {...bond}
                                  onSave={updatedBond => this.saveBond(updatedBond)}
                                  onDelete={() => this.deleteBond(bond.id)}
                                  onComplete={() => this.completeBond(bond.id)} />
                        ))
                    }

                    <button className={styles.addBondButton} onClick={this.createBond} disabled={this.hasUncreatedBond()}>
                        <Icon IconComponent={Add}
                              iconClassName={styles.addBond}
                              iconProps={{className: styles.icon__add}}
                              label="Create bond" />
                    </button>
                </TabPanel>

                <TabPanel className={styles.tabPanel}>
                    {completedBonds.length <= 0 ?
                        <p className={styles.noBonds}>No bonds completed yet</p> :
                        completedBonds.map(bond => (
                            <Bond key={bond.id} {...bond} onRevoke={() => this.revokeBond(bond.id)} />
                        ))
                    }
                </TabPanel>
            </Tabs>
        );
    }

    hasUncreatedBond = () => this.state.bonds.filter(bond => bond.isCreate).length > 0;

    createBond = () => this.setState({
        bonds: [...this.state.bonds, {isCreate: true}]
    });

    deleteBond = id => this.setState({
        bonds: this.state.bonds.filter(bond => bond.id !== id)
    });

    saveBond = bond => {
        let bonds;
        const existingBondIdx = this.state.bonds.findIndex(existingBond => existingBond.id === bond.id);

        if (existingBondIdx >= 0) {
            bonds = this.state.bonds.slice();
            bonds[existingBondIdx] = bond;
        } else {
            const id = Math.max(...this.state.bonds.map(bond => bond.id) + 1);
            bonds = [...this.state.bonds, {...bond, id}];
        }

        this.setState({bonds});
    };

    completeBond = id => this.setState({
        bonds: this.state.bonds.map(bond => bond.id === id ? {...bond, completed: true} : bond)
    });

    revokeBond = id => this.setState({
        bonds: this.state.bonds.map(bond => bond.id === id ? {...bond, completed: false} : bond)
    });
}

Bonds.defaultProps = {
    bonds: []
};

Bonds.propTypes = {
    bonds: PropTypes.arrayOf(PropTypes.shape(Bond.propTypes))
};

export default Bonds;