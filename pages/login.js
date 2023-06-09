import Head from "next/head"
import React from "react"
import Brand from "@/components/ui/Brand"
import { Button, Input, FormLabel, FormControl } from "@chakra-ui/react"
import { signIn } from "next-auth/react"
import { useToast } from "@chakra-ui/react"
import { z } from "zod"

export default function Login() {
	const [email, setEmail] = React.useState("")
	const [loading, setLoading] = React.useState(false)
	const toast = useToast()
	return (
		<>
			<Head>
				<title>Connexion - Signlab</title>
			</Head>
			<main className="w-full h-screen flex flex-col items-center justify-center px-4">
				<div className="max-w-sm w-full ">
					<div className="text-center">
						<Brand className="mx-auto w-32" />
						<div className="mt-5 space-y-2">
							<h1 className="text-white text-2xl font-bold sm:text-2xl">Se connecter à mon compte</h1>
						</div>
					</div>
					<form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-5">
						<FormControl>
							<FormLabel className="font-medium text-gray-300">Email</FormLabel>
							<Input type="email" required color={"gray.300"} onChange={(event) => setEmail(event.target.value)} value={email} />
						</FormControl>
						<Button
							colorScheme="gray"
							w={"100%"}
							isLoading={loading}
							isDisabled={!z.string().email().safeParse(email).success}
							onClick={async () => {
								setLoading(true)
								signIn("email", { email, redirect: false, callbackUrl: "https://signlab.nymeku.com/app" })
									.then((res) => {
										if (res.ok) {
											setLoading(false)
											toast({
												status: "success",
												duration: 4000,
												isClosable: true,
												description: "Un lien de connexion unique vous a été envoyé par mail",
												colorScheme: "purple",
											})
										}
									})
									.catch(() => setLoading(false))
							}}
						>
							Connexion
						</Button>
					</form>
				</div>
			</main>
		</>
	)
}
