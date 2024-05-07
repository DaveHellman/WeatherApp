import { useMemo, useState } from "react"
import useWeatherData from "./Hooks/useWeatherData"
import Header from "./Components/Header.jsx"

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
                        <div
                            key={item.time}
                            className="rounded-lg bg-white p-4 shadow-md"
                        >
                            <p className="mb-2">
                                {new Date(item.time).toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}
                            </p>
                            <p>{item.temperature}°C</p>
                        </div>
                    ))}
                </div>
            ) : null}
        </>
    )
}

export default App
