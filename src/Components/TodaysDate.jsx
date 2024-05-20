import styled from "styled-components"

const DateStyle = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
`

export default function TodaysDate() {
    const date = new Date().toLocaleDateString("sv-SE")

    return <DateStyle>{date}</DateStyle>
}
