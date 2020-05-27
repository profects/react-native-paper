export const handlePress = ({ onPress, value, onValueChange, }) => {
    onValueChange ? onValueChange(value) : onPress?.();
};
export const isChecked = ({ value, status, contextValue, }) => {
    if (contextValue) {
        return contextValue === value ? 'checked' : 'unchecked';
    }
    else {
        return status;
    }
};
