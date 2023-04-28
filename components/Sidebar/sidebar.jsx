import { Button } from "@chakra-ui/react"
import { signOut } from "next-auth/react"
import { useRouter } from "next/router"
import { AiOutlinePlus } from "react-icons/ai"
import { FcCallback, FcOpenedFolder, FcReddit, FcExport } from "react-icons/fc"
import { Box } from "@chakra-ui/react"
import Link from "next/link"
import { Avatar } from "@chakra-ui/react"

const Sidebar = ({ display, user }) => {
	const router = useRouter()
	const navigation = [
		{
			href: "/app/historique",
			name: "Historique",
			icon: <FcOpenedFolder size={24} />,
		},
		{
			href: "/app/profil",
			name: "Profil",
			icon: <FcReddit size={24} />,
		},
		{
			href: "/app/support",
			name: "Support",
			icon: <FcCallback size={24} />,
		},
	]

	const navsFooter = [
		{
			href: "/",
			name: "Déconnexion",
			icon: (
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
					/>
				</svg>
			),
		},
	]

	return (
		<Box display={display}>
			<nav className="fixed top-0 left-0 h-full border-r border-[#333C4B] bg-#1f2937 space-y-8 w-[250px] px-6 pt-8">
				<div className="flex flex-col h-full">
					<div className="h-20 flex items-center px-8 mb-6">
						<Link href="#" className="flex-none">
							<img src="/signlab.svg" width={140} className="mx-auto" />
						</Link>
					</div>
					<div className="flex-1 flex flex-col h-full overflow-auto">
						<Button colorScheme="purple" leftIcon={<AiOutlinePlus size={"24px"} />} mb={"40px"} onClick={() => router.push("/app/traduction")}>
							Nouvelle Traduction
						</Button>
						<ul className="text-sm font-medium flex-1 space-y-4">
							{navigation.map((item, idx) => (
								<li key={idx}>
									<Link
										href={item.href}
										className={`flex items-center gap-x-2 text-white p-2 text-base rounded-lg hover:bg-[#805ad5] active:bg-[#805ad5] duration-150 ${
											router.pathname === item.href ? "bg-[#805ad5]" : ""
										}`}
									>
										<div className="text-white">{item.icon}</div>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
						<div>
							<ul className="pb-4 text-sm font-medium">
								{navsFooter.map((item, idx) => (
									<li key={idx}>
										<div
											onClick={() => signOut()}
											href={item.href}
											className="flex items-center gap-x-2 text-red-400 font-bold p-2 rounded-lg  hover:bg-white active:bg-[#805ad5] duration-150 cursor-pointer"
										>
											<FcExport size={24} />
											Déconnexion
										</div>
									</li>
								))}
							</ul>
							<div className="py-4 px-4 border-t border-[#333C4B]">
								<div className="flex items-center gap-x-4">
									<Avatar name={user?.name} />
									<div>
										{/* <span className="block text-white text-sm font-semibold"></span> */}
										<Link href="/app/profil" className="block mt-px text-white hover:text-indigo-600 text-xs">
											Compléter mon profil
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</Box>
	)
}

export default Sidebar
