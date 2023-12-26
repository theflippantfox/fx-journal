import axios from "axios"
import { PUBLIC_SERVER_BASE_URL } from '$env/static/public'
import type { Actions } from "./$types"

interface FormData {
    username?: string
    password?: string
}

export const actions: Actions = {
    default: async ({ request }) => {
        const errors: string[] = []
        const formData: FormData = Object.fromEntries(await request.formData())

        if (!formData.username) {
            errors.push('Please enter a username')
        }

        if (!formData.password) {
            errors.push('Please enter a password')
        }

        if (errors.length > 0) {
            return {
                errors,
                data: {
                    username: formData.username,
                    password:formData.password
                }
            }
        }
        try {
            const serverResponse = await axios({
                url: `${PUBLIC_SERVER_BASE_URL}users/auth/login`,
                method: 'post',
                data: {
                    username: formData.username,
                    password: formData.password
                }
            })

            return {
                errors: [],
                data: JSON.stringify(JSON.parse(serverResponse.data))
            }
        } catch (error) {
            return {
                errors,
                data: {}
            }
        }

    }
}
