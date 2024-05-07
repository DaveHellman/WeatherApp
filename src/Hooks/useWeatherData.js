import { useState, useEffect, useCallback, useRef } from "react"

const useWeatherData = (params) => {
    const callCounter = useRef(0)
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const { latitude, longitude, hourly } = params

    const fetchData = useCallback(async () => {
        setLoading(true)
        try {
            const response = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=${hourly}&forecast_days=1`
            )
            const data = await response.json()

            console.log("api called")

            const { time, temperature_2m } = data.hourly
            const transformedData = time.map((time, index) => ({
                time,
                temperature: temperature_2m[index],
            }))

            setData(transformedData)
            setError(null)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }, [latitude, longitude, hourly])

    useEffect(() => {
        fetchData()
        callCounter.current += 1
    }, [fetchData])

    return { data, loading, error, callCounter: callCounter.current }
}

export default useWeatherData
