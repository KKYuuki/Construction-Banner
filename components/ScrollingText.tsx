"use client"
import { useEffect, useState } from "react"
import styles from "./scrolling.module.css"
import { AnimatePresence, motion } from "framer-motion"
import { abort } from "process"

export default function ScrollingText() {
    const [cur, setCur] = useState(0)
    const [hover, setHover] = useState(false)

    const text = [
        <>
            on the <span className={styles.second}>go.</span>
        </>,
        <>wrestling with code.</>,
        <>fueling up on coffee.</>,
        <>adding the final touch.</>,
    ]

    useEffect(() => {
        const scroll = setInterval(() => {
            if (!hover) {
                setCur(0)
            } else {
                setCur((cur + 1) % text.length)
            }
            console.log(hover)
        }, 1500)
        return () => clearInterval(scroll)
    }, [cur, hover])

    return (
        <div className={styles.container}>
            <h3>
                Our <span className={styles.first}>dev</span>elopers are
            </h3>
            <div
                className={styles.words}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <AnimatePresence>
                    <motion.h3
                        key={cur}
                        initial={{ opacity: 0, y: "-100%", position: 'absolute', top: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "100%" }}
                    >
                        {text[cur]}
                    </motion.h3>
                </AnimatePresence>
            </div>
        </div>
    )
}
