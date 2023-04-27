import prisma from "@/lib/prisma"

export const getUserBySession = async (session) => {
	console.log({ session })
	if (session?.user?.id) {
		return getUserById(session.user?.id)
	} else if (session?.user?.email) {
		return getUserByEmail(session.user.email)
	} else return null
}

export const getUserById = async (id) => {
	return await prisma.user.findUnique({
		where: {
			id,
		},
		include: {
			traductions: true,
		},
	})
}

export const getUserByEmail = async (email) => {
	return await prisma.user.findUnique({
		where: {
			email,
		},
		include: {
			traductions: true,
		},
	})
}
