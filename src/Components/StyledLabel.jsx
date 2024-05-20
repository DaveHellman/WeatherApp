import PropTypes from "prop-types"
import styled from "styled-components"

const LabelStyled = styled.label`
    margin-bottom: 0.5rem;
    display: block;
    font-weight: bold;
`

export default function StyledLabel({ htmlFor, children }) {
    return <LabelStyled htmlFor={htmlFor}>{children}</LabelStyled>
}

StyledLabel.propTypes = {
    htmlFor: PropTypes.string,
    children: PropTypes.node.isRequired,
}
