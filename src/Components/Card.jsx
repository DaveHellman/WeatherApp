import PropTypes from "prop-types"
import { forwardRef } from "react"
import styled from "styled-components"

const Wrapper = styled.div.attrs((props) => ({
    ref: props.ref,
}))`
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    margin: 5rem 0.5rem;
    border-radius: 0.5rem;
    background-color: white;
    padding: 1rem;
    width: 25vw;
    height: 50vh;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-size: ${(props) => (props.$isCurrentHour ? "1.5rem" : "1rem")};
    font-weight: ${(props) => (props.$isCurrentHour ? "bold" : "600")};
`

const Image = styled.img`
    width: 10rem;
    height: 10rem;
    margin-bottom: 0.5rem;
`

const HourStyle = styled.p`
    margin-bottom: 0.5rem;
`

const Card = forwardRef(({ hour, temperature }, ref) => {
    const currentHour = new Date().getHours()
    const cardHour = parseInt(hour.split(":")[0])

    const isCurrentHour = currentHour === cardHour

    const isDay = cardHour >= 6 && cardHour < 18

    return (
        <Wrapper $isCurrentHour={isCurrentHour} ref={ref}>
            <HourStyle>{hour}</HourStyle>
            <Image src={isDay ? "/day.svg" : "/night.svg"} alt="weather icon" />
            <p>{temperature}°C</p>
        </Wrapper>
    )
})

Card.displayName = "Card"

export default Card

Card.propTypes = {
    hour: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
}
