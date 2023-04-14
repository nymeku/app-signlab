"use client"
import { CacheProvider } from "@chakra-ui/next-js"
import "./globals.css"
import { ChakraProvider } from "@chakra-ui/react"

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<CacheProvider>
			<ChakraProvider>{children}</ChakraProvider>
		</CacheProvider>
	)
}
