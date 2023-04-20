import { generateAuthToken, sendVerificationRequest } from "@/src/lib/utils/mailer"
import nextAuth, { Profile } from "next-auth"
import EmailProvider from "next-auth/providers/email"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@/src/prisma"

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
	],

	pages: {
		signIn: "/login",
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
