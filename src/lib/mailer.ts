import { Theme } from "next-auth"
import Mailjet from "node-mailjet"
import { customAlphabet } from "nanoid"

export const sendVerificationRequest = async (params: any) => {
	const mailjet = new Mailjet({
		apiKey: process.env.MJ_APIKEY,
		apiSecret: process.env.MJ_APIKEY_PRIVATE,
	})
	const { identifier, url, provider, theme, token } = params
	const { host } = new URL(url)

	mailjet
		.post("send", { version: "v3.1" })
		.request({
			Messages: [
				{
					From: {
						Email: "noreply@signlab.com",
						Name: "Signlab",
					},
					To: [
						{
							Email: identifier,
						},
					],
					Subject: `Code ${token} - Se connecter à Signlab`,
					TextPart: text({ url, host }),
					HTMLPart: html({ url, host, theme, token }),
				},
			],
		})
		.then(() => {
			console.log(`Email successfuly sent to ${identifier}`)
		})
		.catch((err) => {
			console.error(err)
			console.error(`Email(s) (${identifier.join(", ")}) could not be sent`)
		})
}

/**
 * Email HTML body
 * Insert invisible space into domains from being turned into a hyperlink by email
 * clients like Outlook and Apple mail, as this is confusing because it seems
 * like they are supposed to click on it to sign in.
 *
 * @note We don't add the email address to avoid needing to escape it, if you do, remember to sanitize it!
 */
function html(params: { url: string; host: string; theme: Theme; token: string }) {
	const { url, host, theme, token } = params

	const escapedHost = host.replace(/\./g, "&#8203;.")

	const brandColor = "#346df1"
	const color = {
		background: "#f9f9f9",
		textColor: "#444",
		mainBackground: "#fff",
		buttonBackground: brandColor,
		buttonBorder: brandColor,
		buttonText: "#fff",
	}

	return `
<body style="background: ${color.background};">
  <table width="100%" border="0" cellspacing="20" cellpadding="0"
    style="background: ${color.mainBackground}; max-width: 600px; margin: auto; border-radius: 10px;">
    <tr>
	<tr>
            <td align="center" style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.textColor};">Votre code de confirmation se trouve ci-dessous, saisissez-le dans la fenêtre ouverte de votre navigateur et nous vous aiderons à vous connecter.</td>
          </tr>
      <td align="center" style="padding: 20px 0;">
        <table border="0" cellspacing="0" cellpadding="0">

          <tr>
            <td align="center" style="font-size: 24px; border-radius: 4px; width: 100px; border: 1px solid ${color.textColor}; padding: 10px 20px 10px 20px;">${token}</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td align="center"
        style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.textColor};">
        Si vous n’avez pas demandé à recevoir cet e-mail, vous pouvez simplement l’ignorer.
      </td>
    </tr>
  </table>
</body>
`
}

/** Email Text body (fallback for email clients that don't render HTML, e.g. feature phones) */
function text({ url, host }: { url: string; host: string }) {
	return `Sign in to ${host}\n${url}\n\n`
}

export async function generateAuthToken() {
	const nanoid = customAlphabet("23456789ABCDEFGHJKLMNPQRSTUVWXYZ", 6)
	const token = nanoid()
	return token
}