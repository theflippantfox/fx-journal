import axios from "axios"
import type { Actions } from "./$types"
import { PUBLIC_SERVER_BASE_URL } from "$env/static/public"

interface FormData {
    username?: string
    email?: string
    password?: string
}

export const actions: Actions = {
    default: async ({ request }) => {
        const errors: string[] = []
        const formData: FormData = Object.fromEntries(await request.formData())

        if (!formData.username) {
            errors.push('Please enter a username')
        }
        if (!formData.email) {
            errors.push('Please enter a email')
        }
        if (!formData.password) {
            errors.push('Please enter a password')
        }

        if (errors.length > 0) {
            return {
                errors,
                data: {}
            }
        }

        try {
            const serverResponse = await axios({
                url: `${PUBLIC_SERVER_BASE_URL}users/auth/signup`,
                method: 'post',
                data: {
                    username: formData.username,
                    email: formData.email,
                    password: formData.password
                }
            })
            return {
                errors: [],
                data: JSON.stringify(JSON.parse(serverResponse.data))
            }
        } catch (error) {
            errors.push(String(error))
            return {
                errors,
                data: {}
            }
        }
    }
}
