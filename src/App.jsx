import { useMemo, useState } from "react"
import useWeatherData from "./Hooks/useWeatherData"
import Header from "./Components/Header.jsx"
import Card from "./Components/Card.jsx"

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
            {data.error ? (
                <p className="text-red-500">Error: {data.error.message}</p>
            ) : null}
            {data.data ? (
                <div className="flex flex-row flex-wrap">
                    {data.data.map((item) => (
                        <Card
                            key={item.time}
                            hour={item.time}
                            temperature={item.temperature}
                        />
                    ))}
                </div>
            ) : null}
        </>
    )
}

export default App
