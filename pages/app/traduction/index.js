import AppLayout from "@/components/AppLayout"
import WebcamRecorder from "@/components/ui/Webcam/WebcamRecorder"
import { Box, Heading, HStack, Button } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"

const Translation = () => {
	const [blobs, setBlobs] = React.useState([])
	const [stop, setStop] = React.useState(false)
	let video = null 
	useEffect(() => {
		video = document.querySelector("#video")
	}, [])

	const stopStream = () => {
		const download = URL.createObjectURL(new Blob(blobs, { type: "video/webm" }))
		console.log(download)
	}

	const startStream = async (permission) => {
		video.srcObject = permission
		const record = new MediaRecorder(permission, { mimeType: "video/webm" })
		record.addEventListener('dataavailable', (e) => {
			if (e.data.size > 0) {
				setBlobs([...blobs, e.data])
			}
		})
		record.start()
	}

	const askPermission = async () => {	
		const permission = await navigator.mediaDevices.getUserMedia({video: true})		
		startStream(permission)
	}

	return (
		<AppLayout>
			<Box>
				<Heading fontSize={"lg"}>Nouvelle traduction</Heading>

				<video id="video" width="320" height="240" autoPlay></video>

				{false ? (
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
