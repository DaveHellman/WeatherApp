import PropTypes from "prop-types"

export default function Card({ hour, temperature }) {
    const currentHour = new Date().getHours()
    const cardHour = parseInt(hour.split(":")[0])

    const isCurrentHour = currentHour === cardHour
    return (
        <div
            className={
                "m-2 rounded-lg bg-white p-4 shadow-md " +
                (isCurrentHour ? "text-2xl" : "text-lg")
            }
        >
            <p className="mb-2">{hour}</p>
            <p className={isCurrentHour ? "font-bold" : "font-semibold"}>
                {temperature}°C
            </p>
        </div>
    )
}

Card.propTypes = {
    hour: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
}
