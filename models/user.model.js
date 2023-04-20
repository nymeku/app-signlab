export const getUserBySession = async (session) => {
	if (session.user?.id) {
		return db_users.getUserById(session.user?.id)
	} else if (session.user.email) {
		return db_users.getUserByEmail(session.user.email)
	} else return false
}

export const getUserById = async (id) => {
	return await prisma.user.findUnique({
		where: {
			id,
		},
		...selector,
	})
}

export const getUserByEmail = async (email) => {
	return await prisma.user.findUnique({
		where: {
			email,
		},
		...selector,
	})
}
