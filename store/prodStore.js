import { create } from "zustand";

const useProductStore = create((set) => ({
    isLoading: true,
    products: [],
    errorMessage: undefined,
    
    getProd: async () => {
        try {
            set({isLoading: true})
            const prodReponse = await fetch('https://api-produtos-6p7n.onrender.com/products', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'
            })
            const prodData = await prodReponse.json()

            if(prodData){
                set({products: prodData, isLoading: false})
            }
            
        } catch (error) {
            console.log(error)
        }},
}))

export default useProductStore