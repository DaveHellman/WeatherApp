import PropTypes from "prop-types"
import styled from "styled-components"

const NumberInputStyled = styled.input`
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0.5rem;
    color: black;
`

export default function NumberInput({ id, value, onChange }) {
    return (
        <NumberInputStyled
            type="number"
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    )
}

NumberInput.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
}
