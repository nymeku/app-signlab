import React from "react"
import { Box } from "@chakra-ui/react"
import Sidebar from "./Sidebar/sidebar"

const AppLayout = ({ children }) => {
	return (
		<Box w={"100vw"} h={"100vh"} color={"whiteAlpha.800"}>
			<Box position={"fixed"} top={0} left={0}>
				<Sidebar />
			</Box>
			<Box w={"100%"} padding={"20px 20px 20px 270px"}>
				{children}
			</Box>
		</Box>
	)
}

export default AppLayout
