import { useState, useEffect } from "react"

export function useFollowPointer(ref) {
	const [point, setPoint] = useState({ x: 0, y: 0 })

	useEffect(() => {
		if (!ref.current) return

		const handlePointerMove = ({ clientX, clientY }) => {
			const element = ref.current

			const x = clientX - element.offsetLeft
			const y = clientY - element.offsetTop

			setPoint({ x, y })
		}

		window.addEventListener("pointermove", handlePointerMove)

		return () => window.removeEventListener("pointermove", handlePointerMove)
	}, [])

	return { point }
}
