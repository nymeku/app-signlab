import AppLayout from "@/components/AppLayout"
import WebcamRecorder from "@/components/ui/Webcam/WebcamRecorder"
import { Box, Heading, HStack, Button } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"

const Translation = () => {
	let video = null
	let permission = null
	let record = null
	let blobs = []
	const [recording, setRecording] = useState(false)

	useEffect(() => {
		video = document.getElementById("video")
	}, [])

	const stopStream = async () => {
		const download = URL.createObjectURL(new Blob(blobs, { type: "video/webm" }))
		permission = await navigator.mediaDevices.getUserMedia({video: true})		
		record = new MediaRecorder(permission, { mimeType: "video/webm" })
		record.stop()
		setRecording(false)
	}

	const startStream = async (permission) => {
		setRecording(true)
		video.srcObject = permission
		record = new MediaRecorder(permission, { mimeType: "video/webm" })
		record.addEventListener('dataavailable', (e) => {
			if (e.data.size > 0) {
				blobs.push(e.data)
			}
		})
		record.start()
	}

	const askPermission = async () => {	
		permission = await navigator.mediaDevices.getUserMedia({video: true})		
		startStream(permission)
	}

	return (
		<AppLayout>
			<Box>
				<Heading fontSize={"lg"}>Nouvelle traduction</Heading>

				<video id="video" width="320" height="240" autoPlay></video>

				{recording ? (
					<Button colorScheme={"red"} onClick={() => stopStream()}>
						{"Stop"}
					</Button>
				) : (
					<Button colorScheme="purple" onClick={() => askPermission()}>
						Démarrer
					</Button>
				)}
			</Box>
		</AppLayout>
	)
}

export default Translation
