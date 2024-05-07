export default function TodaysDate() {
    const date = new Date().toLocaleDateString("sv-SE")
    return <p className="text-lg font-semibold">{date}</p>
}
