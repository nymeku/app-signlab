import React, { useState, useEffect, useRef } from "react"
import { Box } from "@chakra-ui/react"

const WebcamRecorder = ({ stream, setStream, videoRef }) => {
	return (
		<Box rounded={"lg"} transform={"scaleX(-1)"} overflow={"hidden"}>
			<video ref={videoRef} id={"videoElement"} />
		</Box>
	)
}

export default WebcamRecorder
