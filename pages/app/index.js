import AppLayout from "@/components/AppLayout"
import { getUserBySession } from "@/models/user.model"
import { getSession } from "next-auth/react"

const MainApp = () => {
	return <AppLayout></AppLayout>
}

export default MainApp

export const getServerSideProps = async (context) => {
	const session = await getSession(context)
	if (!session) return { redirect: { destination: '/login', permanent: false } }
	const user = await getUserBySession(session)
	if (!user) return { redirect: { destination: '/login', permanent: false } }
	
	return {
		props: {
			user: JSON.stringify(user)
		}
	}
}
