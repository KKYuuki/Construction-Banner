"use client"
import { CursorGrad, MobileGrad } from "@/utils/assets"
import styles from "./landing.module.css"
import { motion } from "framer-motion"
import ScrollingText from "@/components/ScrollingText"

export default function LandingPage() {
    return (
        <>
            <section className={styles.main}>
                <div className={styles.top}>
                    <motion.h4
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: {
                                duration: 0.5,
                                ease: "easeIn",
                                delay: 0.3 * 0,
                            },
                        }}
                    >
                        DEV<span>GO</span>
                    </motion.h4>
                    <motion.h4
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: {
                                duration: 0.5,
                                ease: "easeIn",
                                delay: 0.3 * 0,
                            },
                        }}
                    >
                        Site under construction
                    </motion.h4>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            duration: 0.5,
                            ease: "easeIn",
                            delay: 0.3 * 1,
                        },
                    }}
                    className={styles.middle}
                >
                    <motion.h1>This site is</motion.h1>
                    <motion.h1>under construction</motion.h1>
                    <ScrollingText />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            duration: 0.5,
                            ease: "easeIn",
                            delay: 0.3 * 2,
                        },
                    }}
                    className={styles.bottom}
                >
                    <h4>Website developed by DEVGO Studio</h4>
                    <h4>© 2024. All Rights Reserved.</h4>
                </motion.div>
                <div className={styles.bg_noise} />
                <CursorGrad className={styles.cursor} />
                <MobileGrad className={styles.mobileGrad} />
            </section>
        </>
    )
}
