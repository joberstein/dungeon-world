import React from "react";
import PropTypes from "prop-types";

const Icon = ({IconComponent, iconClassName, iconProps, label, labelClassName, onClick}) => (
    <div className={iconClassName} onClick={onClick}>
        <IconComponent {...iconProps} />
        {!!label && (
            <div className={labelClassName}>
                {label}
            </div>
        )}
    </div>
);

Icon.defaultProps = {
    iconClassName: "",
    iconProps: {},
    label: "",
    labelClassName: "",
    onClick: () => {}
};

Icon.propTypes = {
    IconComponent: PropTypes.object.isRequired,
    iconClassName: PropTypes.string,
    iconProps: PropTypes.object,
    label: PropTypes.string,
    labelClassName: PropTypes.string,
    onClick: PropTypes.func
};

export default Icon;