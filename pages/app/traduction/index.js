import AppLayout from "@/components/AppLayout"
import { Box, Heading, Button, ButtonGroup, Text } from "@chakra-ui/react"
import React, { useState } from "react"

const Translation = () => {
	const [message, setMessage] = useState(false)
	const fakeTexte = "Bonjour, je m'appelle Jean, j'ai besoin d'aide pour retrouver le quai 7 de la gare d'Austerlitz. Pouvez-vous m'indiquer le chemin ?"

	const launchVideo = () => {
		setMessage(false)
		var video = document.querySelector("#video")
		if (navigator.mediaDevices.getUserMedia) {
			navigator.mediaDevices
				.getUserMedia({ video: true })
				.then(function (stream) {
					video.srcObject = stream
				})
				.catch(function (err0r) {
					console.log("Something went wrong!")
				})
		}
	}

	const stopVideo = () => {
		setMessage(true)
		var video = document.querySelector("#video")
		if (video.srcObject) {
			video.srcObject.getTracks().forEach(function (track) {
				track.stop()
			})
		}
		video.srcObject = null
	}

	return (
		<AppLayout>
			<Heading fontSize={"lg"}>Nouvelle traduction</Heading>

			<Box display={"flex"} justifyContent={"center"} flexDirection={"column"} alignItems={"center"}>
				{message && (
					<Box display={"flex"} justifyContent={"center"} marginTop={"80px"} marginBottom={"80px"}>
						<Text id="text" fontSize={"xl"}>
							{fakeTexte}
						</Text>
					</Box>
				)}

				{!message && (
					<Box transform={"scaleX(-1)"} display={"flex"} justifyContent={"center"} marginBottom={"20px"}>
						<video id="video" width="700" height="700" autoPlay></video>
					</Box>
				)}

				<ButtonGroup>
					{!message && (
						<Button colorScheme={"red"} id="stop-record" onClick={() => stopVideo()}>
							Stop
						</Button>
					)}

					<Button colorScheme="purple" id="start-record" onClick={() => launchVideo()}>
						{!message ? "Démarrer" : "Redémarrer"}
					</Button>
				</ButtonGroup>
			</Box>
		</AppLayout>
	)
}

export default Translation
