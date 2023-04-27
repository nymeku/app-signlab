import { Button, Drawer, DrawerBody, DrawerCloseButton, ChakraProps, DrawerContent, DrawerOverlay, DrawerHeader, Box, Input, DrawerFooter, useDisclosure } from "@chakra-ui/react"
import React from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { FcExport } from "react-icons/fc"
import { AiOutlinePlus } from "react-icons/ai"
import { FcOpenedFolder, FcReddit, FcCallback } from "react-icons/fc"
import { useRouter } from "next/router"
import Link from "next/link"
import { Avatar } from "@chakra-ui/react"

function DrawerComponent({ display }) {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const btnRef = React.useRef()
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
		<>
			<Box ref={btnRef} onClick={onOpen} display={display} marginLeft={"20px"} marginTop={"20px"} marginBottom={"50px"} cursor={"pointer"}>
				<GiHamburgerMenu size={24} />
			</Box>
			<Drawer isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={btnRef}>
				<DrawerOverlay />
				<DrawerContent bg={"#121826"} paddingX={"15px"} paddingY={"15px"}>
					<DrawerCloseButton color={"white"} />

					<div className="flex flex-col h-full">
						<div className="h-20 flex items-center px-8 mb-6">
							<Link href="/app" className="flex-none">
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
										<Link href={item.href} className="flex items-center gap-x-2 text-white p-2 text-base rounded-lg hover:bg-[#805ad5] active:bg-[#805ad5] duration-150">
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
										<Avatar />
										<div>
											<span className="block text-white text-sm font-semibold">Arnaud Andrieu</span>
											<Link href="/app/profil" className="block mt-px text-white hover:text-indigo-600 text-xs">
												Mon profil
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</DrawerContent>
			</Drawer>
		</>
	)
}

export default DrawerComponent
