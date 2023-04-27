import AppLayout from "@/components/AppLayout"
import { Box, Heading, Button } from "@chakra-ui/react"
import React, { useEffect } from "react"

const Translation = () => {
let camera_stream = null;
let media_recorder = null;
let blobs_recorded = [];

useEffect(() => {
	let video = document.querySelector("#video");
	let start_button = document.querySelector("#start-record");
	let stop_button = document.querySelector("#stop-record");

	const resetAll = () => {
		blobs_recorded = [];
		video.srcObject = null;
		video.src = null;
		camera_stream = null;
		media_recorder = null;
	}

	const prepareRecording = async () => {

	start_button.addEventListener('click', async function() {
		camera_stream = await navigator.mediaDevices.getUserMedia({ video: true });
		video.srcObject = camera_stream;
		media_recorder = new MediaRecorder(camera_stream, { mimeType: 'video/webm' });
	
		media_recorder.addEventListener('dataavailable', function(e) {
			blobs_recorded.push(e.data);
		});
	
		media_recorder.start(1000);
	});
	
	stop_button.addEventListener('click', function() {
		resetAll()
	});}

	prepareRecording()
}, [])

	return (
		<AppLayout>
			<Box>
				<Heading fontSize={"lg"}>Nouvelle traduction</Heading>

				<video id="video" width="320" height="240" autoPlay></video>

				
					<Button colorScheme={"red"} id="stop-record">
						Stop
					</Button>
		
					<Button colorScheme="purple" id="start-record">
						Démarrer
					</Button>
	
			</Box>
		</AppLayout>
	)
}

export default Translation
