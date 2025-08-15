import './ColorButton.css';

function ColorButton({ color, label, isSelected = false }) {
    return (
        <span
            title={label}
            className={`color-button ${isSelected ? 'selected' : ''}`}
            style={{backgroundColor: color}}
        />
    );
}
export default ColorButton;