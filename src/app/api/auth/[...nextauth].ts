import { generateAuthToken, sendVerificationRequest } from "@/lib/mailer"
import nextAuth from "next-auth"
import EmailProvider from "next-auth/providers/email"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@/prisma"

export default nextAuth({
	adapter: PrismaAdapter(prisma),
	providers: [
		EmailProvider({
			server: process.env.EMAIL_SERVER,
			from: process.env.EMAIL_FROM,
			generateVerificationToken: async () => {
				const token = await generateAuthToken()
				return token
			},
			sendVerificationRequest: sendVerificationRequest,
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
			profile: async (profile) => {
				return {
					id: profile.sub as string,
					email: profile.email as string,
					firstname: String(profile.given_name).toLocaleUpperCase() as string,
					lastname: String(profile.family_name).toLocaleUpperCase() as string,
				}
			},
		}),
	],

	pages: {
		signIn: "/auth/signin",
	},
	session: {
		strategy: "database",
		maxAge: 3 * 24 * 60 * 60, // 3 days
	},
	secret: process.env.SECRET,
	callbacks: {
		async redirect(url) {
			return url.baseUrl
		},
	},
})
