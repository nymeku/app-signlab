import AppLayout from "@/components/AppLayout"
import Pagination from "@/components/Pagination/pagination"
import Table from "@/components/Table/table"
import { getSession } from "next-auth/react"
import { getUserBySession } from "models/user.model"

const Historique = ({ userFromServer }) => {
	const user = JSON.parse(userFromServer)
	return (
		<AppLayout>
			<Table traductions={user.traductions} />
			{/* <Pagination /> */}
		</AppLayout>
	)
}

export const getServerSideProps = async (context) => {
	const session = await getSession(context)
	const user = await getUserBySession(session)

	if (!user) {
		return {
			redirect: {
				destination: "/login",
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

export default Historique
