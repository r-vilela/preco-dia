import { create } from "zustand";

const useLocalStore = create((set) => ({
    isLoading: true,
    local: [],
    errorMessage: undefined,
    
    getLocal: async () => {
        try {
            set({isLoading: true})
            const localReponse = await fetch('https://api-produtos-6p7n.onrender.com/locations', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'
            })
            const localData = await localReponse.json()

            if(localData){
                set({local: localData, isLoading: false})
            }
            
        } catch (error) {
            console.log(error)
        }},
    }
))

export default useLocalStore