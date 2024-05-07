export default function TodaysDate() {
    const date = new Date().toLocaleDateString()
    return <p className="text-lg font-semibold">{date}</p>
}
