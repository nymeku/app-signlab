export const getUserBySession = async (session) => {
	if (session?.user?.id) {
		return getUserById(session.user?.id)
	} else if (session?.user?.email) {
		return getUserByEmail(session.user.email)
	} else return false
}

export const getUserById = async (id) => {
	return await prisma.user.findUnique({
		where: {
			id,
		},
		select: {
			email: true,
		},
	})
}

export const getUserByEmail = async (email) => {
	return await prisma.user.findUnique({
		where: {
			email,
		},
		select: {
			email: true,
		},
	})
}
