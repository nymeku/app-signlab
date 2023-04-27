import AppLayout from "@/components/AppLayout"
import { getUserBySession } from "@/models/user.model"
import { getSession } from "next-auth/react"
import { Box, FormControl, FormLabel, Heading, Input, Button } from "@chakra-ui/react"
import deepEqual from "deep-equal"
import { z } from "zod"
import React from "react"

const userSchema = z.object({
	email: z.string().email(),
	name: z.string().optional().nullable(),
	firstname: z.string().optional().nullable(),
})

const Profile = ({ userFromServer }) => {
	const user = JSON.parse(userFromServer)
	const [newUser, setnewUser] = React.useState(user)
	const [isModified, setisModified] = React.useState(false)

	React.useEffect(() => {
		if (!deepEqual(user, newUser)) {
			setisModified(true)
		} else {
			setisModified(false)
		}
	}, [newUser, user])

	return (
		<AppLayout>
			<Box color={"whiteAlpha.800"}>
				<Heading fontSize={"xl"} marginBottom={"50px"}>
					Modifier mon profil
				</Heading>
				<FormControl maxW={"300px"} display={"flex"} flexDirection={"column"} gap={"20px"}>
					<FormControl>
						<FormLabel>Email</FormLabel>
						<Input value={newUser.email} onChange={(event) => setnewUser((old) => ({ ...old, email: event.target.value }))} />
					</FormControl>

					<FormControl>
						<FormLabel>Nom</FormLabel>
						<Input value={newUser.name} onChange={(event) => setnewUser((old) => ({ ...old, name: event.target.value }))} />
					</FormControl>

					<FormControl>
					<FormLabel>Prénom</FormLabel>
						<Input value={newUser?.firstname} onChange={(event) => setnewUser((old) => ({ ...old, firstname: event.target.value }))} />
					</FormControl>

					<Button colorScheme="purple" isDisabled={!isModified || !userSchema.safeParse(newUser).success}>
						Terminer
					</Button>
				</FormControl>
			</Box>
		</AppLayout>
	)
}

export default Profile

export const getServerSideProps = async (context) => {
	const session = await getSession(context)
	if (!session) {
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		}
	}
	const user = await getUserBySession(session)
	if (!user) {
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		}
	}

	return {
		props: {
			userFromServer: JSON.stringify(user),
		},
	}
}
