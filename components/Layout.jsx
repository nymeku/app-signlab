import Head from "next/head"
import Footer from "./ui/Footer"
import Navbar from "./ui/Navbar"

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<title>Sign Lab</title>
				<meta name="description" content="Faciliter l'échange autour de la langue des signes" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	)
}

export default Layout
