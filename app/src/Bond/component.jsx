import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import Restore from "@material-ui/icons/Restore";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import Check from "@material-ui/icons/Check";
import Close from "@material-ui/icons/Clear";
import Icon from "Icon/component";
import styles from "Bond/styles.module.scss";
import {CONFIRM_COMPLETE_MESSAGE, CONFIRM_REVOKE_MESSAGE, validateBond} from "Bond/utils";

class Bond extends React.Component {
    constructor(props) {
        super(props);
        const {companion, description, isCreate} = props;
        this.state = {
            bond: {companion, description},
            isEdit: isCreate,
            isChecked: false
        };
    }

    render() {
        return (
            <div className={styles.container}>
                {this.state.isEdit ? this.renderEditingBond() : this.renderViewingBond()}
            </div>
        );
    }

    renderViewingBond = () => (
        <React.Fragment>
            <div className={styles.status}>
                {!this.props.completed ?
                    <div className={styles.checkbox} onClick={this.completeBond}>
                        <Check className={cn({
                            [styles.icon__complete]: true,
                            [styles["icon__complete--checked"]]: this.state.isChecked
                        })} />
                    </div> :
                    <Restore className={styles.restore} onClick={this.revokeBond} />
                }
            </div>

            <div className={styles.bond}>
                {!this.props.completed && (
                    <Icon IconComponent={Edit}
                          iconClassName={cn(styles.icon, styles["icon--edit"])}
                          iconProps={{className: styles.icon__edit}}
                          onClick={this.editBond}
                          label="Edit" />
                )}

                <h3 className={styles.companion}>
                    {this.state.bond.companion}
                </h3>
                <span className={styles.description}>
                    {this.state.bond.description}
                </span>
            </div>
        </React.Fragment>
    );

    renderEditingBond = () => (
        <div className={cn(styles.bond, styles["bond--editing"])}>
            <input className={styles.companion}
                   placeholder="Companion Name"
                   value={this.state.bond.companion}
                   onChange={e => this.setState({bond: {...this.state.bond, companion: e.target.value}})} />
            <textarea className={styles.description}
                      placeholder="Description of bond"
                      value={this.state.bond.description}
                      onChange={e => this.setState({bond: {...this.state.bond, description: e.target.value}})} />

            <div className={styles.buttons__row}>
                <div className={styles.buttons__row__left}>
                    <Icon IconComponent={Check}
                          iconClassName={cn(styles.icon, styles["icon--save"])}
                          iconProps={{className: styles.icon__save}}
                          onClick={this.saveBond}
                          label="Save" />

                    <Icon IconComponent={Close}
                          iconClassName={styles.icon}
                          iconProps={{className: styles.icon__cancel}}
                          onClick={() => this.props.isCreate ? this.deleteBond() : this.cancelEdit()}
                          label="Cancel" />
                </div>

                <Icon IconComponent={Delete}
                      iconClassName={styles.icon}
                      iconProps={{className: styles.icon__delete}}
                      onClick={this.deleteBond}
                      label="Delete" />
            </div>
        </div>
    );

    completeBond = () => {
        this.setState({isChecked: true});

        setTimeout(() => {
            window.confirm(CONFIRM_COMPLETE_MESSAGE) ?
                this.props.onComplete() :
                this.setState({isChecked: false});
        }, 500);
    };

    revokeBond = () => {
        window.confirm(CONFIRM_REVOKE_MESSAGE) && this.props.onRevoke();
    };

    editBond = () => !this.state.isChecked && this.setState({isEdit: true});

    cancelEdit = () => this.setState({
        isEdit: false,
        bond: {
            companion: this.props.companion,
            description: this.props.description
        }
    });

    saveBond = () => {
        if (!validateBond(this.state.bond)) {
            return false;
        }

        this.setState({isEdit: false});
        this.props.onSave({
            id: this.props.id,
            completed: this.props.completed,
            companion: this.state.bond.companion,
            description: this.state.bond.description
        });
    };

    deleteBond = () => this.props.onDelete();
}

Bond.defaultProps = {
    companion: "",
    description: "",
    onSave: () => {},
    onDelete: () => {},
    onComplete: () => {},
    onRevoke: () => {}
};

Bond.propTypes = {
    companion: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.number,
    completed: PropTypes.bool,
    isCreate: PropTypes.bool,
    onSave: PropTypes.func,
    onDelete: PropTypes.func,
    onComplete: PropTypes.func,
    onRevoke: PropTypes.func
};

export default Bond;