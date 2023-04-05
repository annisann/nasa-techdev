import styles from '@/styles/hero.module.css'
import Link from 'next/link'

export default function Hero() {
    const heroParagraph = `
	Technology development funded by NASA to explore space, understand the universe, and improve aeronautics
	`
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <p className={styles.title}> NASA TechDev </p>
                <p className={styles.paragraph}> {heroParagraph} </p>
                <button>
                    <Link href="/projects">
                        Explore
                    </Link>
                </button>
            </div>
            <div> I M A G EEEEEEEEEEEEEEEE EEEEEEE EEEEEEEE EEEEEEEEEEEEEEEEEEEEEEEEEEEEE </div>
        </div>
    )
}