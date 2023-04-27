import AppLayout from "@/components/AppLayout"
import WebcamRecorder from "@/components/ui/Webcam/WebcamRecorder"
import { Box, Heading, HStack, Button } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"

const Translation = () => {
let camera_stream = null;
let media_recorder = null;
let blobs_recorded = [];

useEffect(() => {
	let video = document.querySelector("#video");
	let start_button = document.querySelector("#start-record");
	let stop_button = document.querySelector("#stop-record");

	const prepareRecording = async () => {

	start_button.addEventListener('click', async function() {
		camera_stream = await navigator.mediaDevices.getUserMedia({ video: true });
		video.srcObject = camera_stream;
		// set MIME type of recording as video/webm
		media_recorder = new MediaRecorder(camera_stream, { mimeType: 'video/webm' });
	
		// event : new recorded video blob available 
		media_recorder.addEventListener('dataavailable', function(e) {
			blobs_recorded.push(e.data);
		});
	
		// start recording with each recorded blob having 1 second video
		media_recorder.start(1000);
	});
	
	stop_button.addEventListener('click', function() {
		console.log('stopping recording')
		media_recorder.stop(); 
	});}

	prepareRecording()
}, [])

	return (
		<AppLayout>
			<Box>
				<Heading fontSize={"lg"}>Nouvelle traduction</Heading>

				<video id="video" width="320" height="240" autoPlay></video>

				
					<Button colorScheme={"red"} id="stop-record">
						{"Stop"}
					</Button>
		
					<Button colorScheme="purple" id="start-record">
						Démarrer
					</Button>
	
			</Box>
		</AppLayout>
	)
}

export default Translation
