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
import { z } from "zod"

export const HomeContext = React.createContext(null)

const CompleteUser = z.object({
	email: z.string().email(),
})

export default function Home({ userFromServer }) {
	let user = JSON.parse(userFromServer ?? "{}")
	if (!CompleteUser.safeParse(user).success) {
		user = null
	}

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

export const getServerSideProps = async (context) => {
	const session = await getSession(context)
	if (session) {
		const userFromServer = await getUserBySession(session)
		if (!userFromServer) {
			return {
				props: {
					user: null,
				},
			}
		} else {
			return {
				props: {
					userFromServer: JSON.stringify(userFromServer),
				},
			}
		}
	} else {
		return {
			props: {
				user: null,
			},
		}
	}
}
