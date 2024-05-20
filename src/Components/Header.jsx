import NumberInput from "./NumberInput"
import StyledLabel from "./StyledLabel"
import PropTypes from "prop-types"
import TodaysDate from "./TodaysDate"
import styled from "styled-components"

const HeaderStyled = styled.header`
    background-color: #333;
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
`

const TitleStyled = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    flex: 1;
`

const FormStyled = styled.form`
    display: flex;
`

const InputDivStyled = styled.div`
    margin: 0 0.5rem;
`
const CounterDivStyled = styled.div`
    margin-left: 0.5rem;
    display: flex;
    flex-direction: column;
`

const DateDivStyled = styled.div`
    text-align: end;
    flex: 1;
`

export default function Header({
    latitude,
    setLatitude,
    longitude,
    setLongitude,
    callCounter,
}) {
    return (
        <HeaderStyled>
            <TitleStyled>Weather</TitleStyled>
            <FormStyled>
                <InputDivStyled>
                    <StyledLabel htmlFor="latitude">Latitude</StyledLabel>
                    <NumberInput
                        id="latitude"
                        value={latitude}
                        onChange={setLatitude}
                    />
                </InputDivStyled>
                <InputDivStyled>
                    <StyledLabel htmlFor="longitude">Longitude</StyledLabel>
                    <NumberInput
                        id="longitude"
                        value={longitude}
                        onChange={setLongitude}
                    />
                </InputDivStyled>
                <CounterDivStyled>
                    <StyledLabel>api calls: {callCounter}</StyledLabel>
                    <p className="">Stockholm by default</p>
                </CounterDivStyled>
            </FormStyled>
            <DateDivStyled>
                <TodaysDate />
            </DateDivStyled>
        </HeaderStyled>
    )
}

Header.propTypes = {
    latitude: PropTypes.number.isRequired,
    setLatitude: PropTypes.func.isRequired,
    longitude: PropTypes.number.isRequired,
    setLongitude: PropTypes.func.isRequired,
    callCounter: PropTypes.number.isRequired,
}
