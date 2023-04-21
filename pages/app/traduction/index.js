import AppLayout from "@/components/AppLayout"
import WebcamRecorder from "@/components/ui/Webcam/WebcamRecorder"
import { Box, Heading, HStack, Button } from "@chakra-ui/react"
import React from "react"
const Translation = () => {
	const [stream, setStream] = React.useState(false)
	const videoRef = React.useRef(null)

	const stopStream = () => {
		if (stream) {
			stream.getTracks().forEach((track) => {
				track.stop()
			})
			setStream(null)
		}
	}

	const launchVideo = () => {
		var video = document.querySelector("#videoElement")
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

	React.useEffect(() => {
		if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
			navigator.mediaDevices
				.getUserMedia({ video: true })
				.then((stream) => {
					setStream(stream)
				})
				.catch((error) => {
					console.error(error)
				})
		}
	}, [])

	React.useEffect(() => {
		if (stream && videoRef.current) {
			videoRef.current.srcObject = stream
			videoRef.current.play()
		} else {
			setStream(false)
		}
	}, [stream])

	console.log(stream)
	return (
		<AppLayout>
			<Box>
				<Heading fontSize={"lg"}>Nouvelle traduction</Heading>

				<HStack>
					<WebcamRecorder setStream={setStream} stream={stream} videoRef={videoRef} />
				</HStack>

				{stream ? (
					<Button colorScheme={"red"} onClick={() => stopStream()}>
						{"Stop"}
					</Button>
				) : (
					<Button colorScheme="purple" onClick={() => launchVideo()}>
						Démarrer
					</Button>
				)}
			</Box>
		</AppLayout>
	)
}

export default Translation
