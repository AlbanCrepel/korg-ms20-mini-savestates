import {useControllerStore} from "../stores/controller"

export default defineNuxtPlugin(() => {
    return {
        provide: {
            store: useControllerStore()
        }
    }
})
