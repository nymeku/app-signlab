"use client"
import React from "react"
import { CacheProvider } from "@chakra-ui/next-js"
import { Box, ChakraProvider } from "@chakra-ui/react"

type Props = {
	children: React.ReactNode
}

const SigninLayout = ({ children }: Props) => {
	return (
		<Box w={"100vw"} h={"100vh"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
			{children}
		</Box>
	)
}

export default SigninLayout
