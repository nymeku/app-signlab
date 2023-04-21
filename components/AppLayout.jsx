import React from "react"
import { Box } from "@chakra-ui/react"
import Sidebar from "./Sidebar/sidebar"

const AppLayout = ({ children }) => {
	return (
		<Box w={"100vw"} h={"100vh"}>
			<Box maxW={"250px"} position={"fixed"} top={0} left={0}>
				<Sidebar />
			</Box>
			<Box w={'100%'} padding={'20px 20px 20px 250px'}>
				{children}
			</Box>
		</Box>
	)
}

export default AppLayout
