import AppLayout from "@/components/AppLayout"
import { Box, Heading, Button, ButtonGroup } from "@chakra-ui/react"
import React from "react"

const Translation = () => {
	const launchVideo = () => {
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
				<Box transform={"scaleX(-1)"} display={"flex"} justifyContent={"center"} marginBottom={"20px"}>
					<video id="video" width="700" height="700" autoPlay></video>
				</Box>

				<ButtonGroup>
					<Button colorScheme={"red"} id="stop-record" onClick={() => stopVideo()}>
						Stop
					</Button>

					<Button colorScheme="purple" id="start-record" onClick={() => launchVideo()}>
						Démarrer
					</Button>
				</ButtonGroup>
			</Box>
		</AppLayout>
	)
}

export default Translation
