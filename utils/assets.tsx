"use client"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect } from "react"

export function CursorGrad({ className }: { className?: string }) {
    const curX = useMotionValue(-100)
    const curY = useMotionValue(-100)

    useEffect(() => {
        const moveCur = (e: MouseEvent) => {
            curX.set(e.clientX - 400)
            curY.set(e.clientY - 400)
        }
        window.addEventListener("mousemove", moveCur)
        return () => window.removeEventListener("mousemove", moveCur)
    }, [])

    const spring = { damping: 25, stiffness: 100, mass: 1 }

    const curXspring = useSpring(curX, spring)
    const curYspring = useSpring(curY, spring)

    return (
        <motion.svg
            xmlns='http://www.w3.org/2000/svg'
            version='1.1'
            viewBox='0 0 100% 100%'
            opacity='0.6'
            className={className}
            initial={{ position: "fixed", top: 0, left: 0, zIndex: "-2" }}
        >
            <defs>
                <filter
                    id='bbblurry-filter'
                    x='-100%'
                    y='-100%'
                    width='400%'
                    height='400%'
                    filterUnits='objectBoundingBox'
                    primitiveUnits='userSpaceOnUse'
                    colorInterpolationFilters='sRGB'
                >
                    <feGaussianBlur
                        stdDeviation='94'
                        x='0%'
                        y='0%'
                        width='100%'
                        height='100%'
                        in='SourceGraphic'
                        edgeMode='none'
                        result='blur'
                    ></feGaussianBlur>
                </filter>
            </defs>
            <g filter='url(#bbblurry-filter)'>
                <motion.ellipse
                    rx='300'
                    ry='250'
                    cx='400'
                    cy='400'
                    fill='#4EA588'
                    style={{ x: curXspring, y: curYspring }}
                />
            </g>
        </motion.svg>
    )
}
