import type { Actions } from "./$types"

export const load = () => {
    return {
        watchlist: [
            { name: "BTCUSD", type: "Main" }
        ]
    }
}

export const actions: Actions = {
    default: () => { },

    add: async ({ request }) => {
        const data = Object.fromEntries(await (request.formData()))
        return
    }
}
