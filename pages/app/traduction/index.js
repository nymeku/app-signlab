import AppLayout from "@/components/AppLayout"
import { Box, Heading, Button } from "@chakra-ui/react"
import React from "react"

const Translation = () => {
	const launchVideo = () => {
        var video = document.querySelector("#video");
        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(function (stream) {
                    video.srcObject = stream;
                })
                .catch(function (err0r) {
                    console.log("Something went wrong!");
                });
        }
    }

	const stopVideo = () => {
		var video = document.querySelector("#video");
		video.srcObject.getTracks().forEach(function (track) {
			track.stop();
		});
		video.srcObject = null;
	}

	return (
		<AppLayout>
			<Box>
				<Heading fontSize={"lg"}>Nouvelle traduction</Heading>

				<video id="video" width="320" height="240" autoPlay></video>

				
					<Button colorScheme={"red"} id="stop-record" onClick={() => stopVideo()}>
						Stop
					</Button>
		
					<Button colorScheme="purple" id="start-record" onClick={() => launchVideo()}>
						Démarrer
					</Button>
	
			</Box>
		</AppLayout>
	)
}

export default Translation
