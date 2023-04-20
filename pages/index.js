import Layout from "@/components/Layout"
import CTA from "@/components/ui/CTA"
import FAQs from "@/components/ui/FAQs"
import Features from "@/components/ui/Features"
import Hero from "@/components/ui/Hero"
import Pricing from "@/components/ui/Pricing"
import Testimonial from "@/components/ui/Testimonial"
import VisualFeatures from "@/components/ui/VisualFeatures"
import { getUserBySession } from "@/models/user.model"
import { getSession } from "next-auth/react"
import React from "react"

export const HomeContext = React.createContext(null)

export default function Home({ user }) {
	return (
		<HomeContext.Provider value={{ user }}>
			<Layout>
				<Hero />
				<VisualFeatures />
				<Features />
				<CTA />
				<Testimonial />
				<Pricing />
				<FAQs />
			</Layout>
		</HomeContext.Provider>
	)
}

export const getServerSideProps = () => {
	const session = getSession()
	if (session) {
		const user = getUserBySession(session)
		if (!user) {
			return {
				props: {},
			}
		} else {
			return {
				props: {
					user: JSON.stringify(user),
				},
			}
		}
	} else {
		return {
			props: {},
		}
	}
}
