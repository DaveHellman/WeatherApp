import { useEffect, useMemo, useRef, useState } from "react"
import useWeatherData from "./Hooks/useWeatherData"
import Header from "./Components/Header.jsx"
import Card from "./Components/Card.jsx"
import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    background-color: #faf9f6;
`

function App() {
    const [latitude, setLatitude] = useState(59.3294)
    const [longitude, setLongitude] = useState(18.0687)

    const handleSetLatitude = (newLatitude) => {
        setLatitude(parseFloat(newLatitude))
    }

    const handleSetLongitude = (newLongitude) => {
        setLongitude(parseFloat(newLongitude))
    }

    const params = useMemo(
        () => ({
            latitude: latitude,
            longitude: longitude,
            current: "temperature_2m",
            hourly: "temperature_2m",
            timezone: "Europe/Berlin",
        }),
        [latitude, longitude]
    )
    const data = useWeatherData(params)

    const thisHourCard = useRef(null)

    const scrollToThisHour = () => {
        if (thisHourCard.current) {
            thisHourCard.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "center",
            })
        }
    }

    useEffect(() => {
        scrollToThisHour()
    }, [data.data])

    return (
        <>
            <Header
                latitude={latitude}
                setLatitude={handleSetLatitude}
                longitude={longitude}
                setLongitude={handleSetLongitude}
                callCounter={data.callCounter}
            />
            {data.loading ? <p>Loading...</p> : null}
            {data.error ? <p>Error: {data.error.message}</p> : null}
            {data.data ? (
                <Wrapper>
                    {data.data.map((item) => {
                        const isThisHour =
                            item.time === new Date().getHours() + ":00"
                        const props = {
                            hour: item.time,
                            temperature: item.temperature,
                        }
                        return (
                            <Card
                                key={item.time}
                                {...props}
                                ref={isThisHour ? thisHourCard : null}
                            />
                        )
                    })}
                </Wrapper>
            ) : null}
        </>
    )
}

export default App
