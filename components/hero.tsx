import styles from '@/styles/Home.module.css'

export default function Hero() {
    const heroParagraph = `
	Technology development funded by NASA to explore space, understand the universe, and improve aeronautics
	`
    return (
        <div className={styles.hero}>
            <div className={styles.text}>
                <p className="title"> NASA TechDev </p>
                <p className="paragraph"> {heroParagraph} </p>
                <button> Explore </button>
            </div>
            <div> I M A G E </div>
        </div>
    )
}