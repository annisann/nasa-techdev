import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Hero from '@/components/hero'
import Showcase from '@/components/showcase'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

	return (
		<>
			<Head>
				<title> NASA TechDev </title>
				<meta name="description" content="Made with NASA TechPort API" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Hero />
				<Showcase />
			</main>
		</>
	)
}
