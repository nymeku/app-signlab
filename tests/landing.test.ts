import { test, expect } from "@playwright/test"

test("has title", async ({ page }) => {
	await page.goto("http://localhost:3000/")

	// Expect a title "to contain" a substring.
	await expect(page).toHaveURL("Sign Lab")
})

test("go to login", async ({ page }) => {
	const loginButton = await page.$("#login-button")
	await loginButton.click()
	await expect(page).toHaveURL("http://localhost:3000/login")
})
