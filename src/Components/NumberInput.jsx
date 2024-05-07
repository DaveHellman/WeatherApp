import PropTypes from "prop-types"

export default function NumberInput({ id, value, onChange }) {
    return (
        <input
            type="number"
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="rounded-md border border-gray-300 p-2 text-black"
        />
    )
}

NumberInput.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
}
