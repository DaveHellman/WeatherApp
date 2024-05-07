import NumberInput from "./NumberInput"
import StyledLabel from "./StyledLabel"
import PropTypes from "prop-types"

export default function Header({
    latitude,
    setLatitude,
    longitude,
    setLongitude,
    callCounter,
}) {
    return (
        <header className="flex justify-between bg-gray-800 p-4 text-white">
            <h1 className="flex-1 text-4xl font-bold">Weather</h1>
            <form className="flex">
                <div className="mx-1">
                    <StyledLabel htmlFor="latitude">Latitude</StyledLabel>
                    <NumberInput
                        id="latitude"
                        value={latitude}
                        onChange={setLatitude}
                    />
                </div>
                <div className="mx-1">
                    <StyledLabel htmlFor="longitude">Longitude</StyledLabel>
                    <NumberInput
                        id="longitude"
                        value={longitude}
                        onChange={setLongitude}
                    />
                </div>
                <div className="ml-1 flex flex-col">
                    <StyledLabel>api calls: {callCounter}</StyledLabel>
                    <p className="">Stockholm by default</p>
                </div>
            </form>
            <div className="flex-1"></div>
        </header>
    )
}

Header.propTypes = {
    latitude: PropTypes.number.isRequired,
    setLatitude: PropTypes.func.isRequired,
    longitude: PropTypes.number.isRequired,
    setLongitude: PropTypes.func.isRequired,
    callCounter: PropTypes.number.isRequired,
}
