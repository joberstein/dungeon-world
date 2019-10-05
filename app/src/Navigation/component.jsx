import React from "react";
import {NavLink} from "react-router-dom";
import Menu from "@material-ui/icons/Menu";
import Close from "@material-ui/icons/Close";
import Media from "react-media";
import styles from "Navigation/styles.module.scss";
import {ROUTE_ACTIONS, ROUTE_BAG, ROUTE_BATTLE, ROUTE_BONDS, ROUTE_CHARACTER, ROUTE_SESSIONS} from "routes";

const ROUTES = {
    [ROUTE_CHARACTER]: "Character",
    [ROUTE_BONDS]: "Bonds",
    [ROUTE_SESSIONS]: "Sessions",
    [ROUTE_ACTIONS]: "Actions",
    [ROUTE_BATTLE]: "Battle",
    [ROUTE_BAG]: "Bag"
};

class Navigation extends React.Component {

    constructor() {
        super();
        this.state = {
            isOpen: false
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!prevState.isOpen && this.state.isOpen) {
            document.body.style.overflow = "hidden";
        }
        if (prevState.isOpen && !this.state.isOpen) {
            document.body.style.overflow = "visible";
        }
    }

    render() {
        return (
            <Media queries={{small: "(max-width: 1080px)", large: "(min-width: 1081px)"}}>
                {matches => (
                    <React.Fragment>
                        {matches.small && this.renderSmallScreenNavigation()}
                        {matches.large && this.renderLargeScreenNavigation()}
                    </React.Fragment>
                )}
            </Media>
        )
    }

    renderLargeScreenNavigation() {
        return (
            <div className={styles.container}>
                {this.renderNavigationLinks()}
            </div>
        );
    }

    renderSmallScreenNavigation() {
        return this.state.isOpen ? this.renderSmallNavigationOpened() : this.renderSmallNavigationClosed();
    }

    renderSmallNavigationOpened() {
        return (
            <div className={styles.container}>
                <div className={styles.close}>
                    <Close onClick={this.closeNavigation}/>
                </div>
                {this.renderNavigationLinks()}
            </div>
        );
    }

    renderSmallNavigationClosed() {
        return (
            <div className={styles.mobileContainer}>
                <div className={styles.open}>
                    <Menu onClick={this.openNavigation}/>
                </div>
            </div>
        );
    }

    renderNavigationLinks() {
        return (
            <React.Fragment>
                {Object.keys(ROUTES).map(routePath => (
                    <NavLink key={routePath} to={routePath} className={styles.link} activeClassName={styles.active}>
                        {ROUTES[routePath]}
                    </NavLink>
                ))}
            </React.Fragment>
        );
    }

    openNavigation = () => this.setState({isOpen: true});
    closeNavigation = () => this.setState({isOpen: false});
}

export default Navigation;