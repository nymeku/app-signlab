"use client"
import { Box, FormControl, FormLabel, HStack, Heading, Input, VStack } from "@chakra-ui/react"
import React from "react"

type Props = {}

const SigninPage = (props: Props) => {
	return (
		<HStack spacing={"20px"}>
			<Heading fontSize={"2xl"}>Bienvenue sur Signlab</Heading>
			<HStack>
				<FormControl>
					<FormControl>
						<FormLabel>Email</FormLabel>
						<Input />
					</FormControl>
				</FormControl>
			</HStack>
		</HStack>
	)
}

export default SigninPage
