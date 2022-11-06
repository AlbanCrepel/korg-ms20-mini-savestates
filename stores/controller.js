import { defineStore } from 'pinia'
import {Controller} from "../models/Controller";

export const useControllerStore = defineStore('controller', {
    state: () => {
        return {
            currentState: new Controller()
        }
    },
    actions: {

    }
})
