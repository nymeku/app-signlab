// import { generateAuthToken, sendVerificationRequest } from "@/src/lib/utils/mailer"
// import nextAuth, { Profile } from "next-auth"
// import EmailProvider from "next-auth/providers/email"
// import GoogleProvider from "next-auth/providers/google"
// import { PrismaAdapter } from "@next-auth/prisma-adapter"
// import prisma from "@/src/prisma"

// export default nextAuth({
// 	adapter: PrismaAdapter(prisma),
// 	providers: [
// 		EmailProvider({
// 			server: process.env.EMAIL_SERVER,
// 			from: process.env.EMAIL_FROM,
// 			generateVerificationToken: async () => {
// 				const token = await generateAuthToken()
// 				return token
// 			},
// 			sendVerificationRequest: sendVerificationRequest,
// 		}),
// 		GoogleProvider({
// 			clientId: process.env.GOOGLE_CLIENT_ID,
// 			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
// 			profile: async (profile) => {
// 				return {
// 					id: profile.sub,
// 					email: profile.email,
// 					firstname: String(profile.given_name).toLocaleUpperCase(),
// 					lastname: String(profile.family_name).toLocaleUpperCase(),
// 				}
// 			},
// 		}),
// 	],

// 	pages: {
// 		signIn: "/auth/signin",
// 	},
// 	session: {
// 		strategy: "database",
// 		maxAge: 3 * 24 * 60 * 60, // 3 days
// 	},
// 	secret: process.env.SECRET,
// 	callbacks: {
// 		async redirect(url) {
// 			return url.baseUrl
// 		},
// 	},
// })
