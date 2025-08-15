import "./ColorPicker.css"

const ColorPicker = ({ colors, selectedColor, onSelect, label, className }) => {
    return (
        <div className={`color-button ${className}`} role="group" aria-label={label}>
            {colors.map((color) => (
                <button
                    key={color.hex}
                    type="button"
                    className={`color-picker ${selectedColor === color.name ? 'selected' : ''}`}
                    style={{ backgroundColor: color.hex }}
                    onClick={() => onSelect(color.name)}
                    aria-label={`Select ${color.name} ${label}`}
                    title={color.name}
                />
            ))}
        </div>
    );
};

export default ColorPicker;