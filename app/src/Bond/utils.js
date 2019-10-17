
export const CONFIRM_COMPLETE_MESSAGE =
    "Ready to complete this bond?  You'll gain 100 XP!";

export const CONFIRM_REVOKE_MESSAGE =
    "Are you sure you'd like to restore this bond?" +
    "\n\n" +
    "Warning: you'll lose the 100 XP you gained for completing it.";

export const validateBond = ({companion, description}) => {
    if (!companion) {
        alert("Bond companion cannot be left blank.");
        return false;
    }

    if (!description) {
        alert("Bond description cannot be left blank.");
        return false;
    }

    return true;
};