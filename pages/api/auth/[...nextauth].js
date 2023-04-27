import { generateAuthToken, sendVerificationRequest } from "@/lib/mailer"
import nextAuth, { Profile } from "next-auth"
import EmailProvider from "next-auth/providers/email"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@/lib/prisma"

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
		maxAge: 3 * 24 * 60 * 60 * 10, // 30 days
	},
	secret: process.env.SECRET,
	callbacks: {
		async redirect(url) {
			return url.baseUrl
		},
	},
})
