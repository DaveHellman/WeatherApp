import PropTypes from "prop-types"

export default function StyledLabel({ htmlFor, children }) {
    return (
        <label htmlFor={htmlFor} className="mb-2 block font-bold">
            {children}
        </label>
    )
}

StyledLabel.propTypes = {
    htmlFor: PropTypes.string,
    children: PropTypes.node.isRequired,
}
