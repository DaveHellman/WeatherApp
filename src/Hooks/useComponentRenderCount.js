import { useEffect, useRef } from "react"

const useComponentRenderCount = () => {
    const renderCount = useRef(0)

    useEffect(() => {
        renderCount.current += 1
    })

    return renderCount.current
}

export default useComponentRenderCount
