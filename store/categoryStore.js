import { create } from "zustand";

const useCategoryStore = create((set) => ({
    isLoading: true,
    category: [],
    errorMessage: undefined,
    
    getCategory: async () => {
        try {
            set({isLoading: true})
            const categoryReponse = await fetch('https://api-produtos-6p7n.onrender.com/categories', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'
            })
            const categoryData = await categoryReponse.json()

            if(categoryData){
                set({category: categoryData, isLoading: false})
            }
            
        } catch (error) {
            console.log(error)
        }},
    }
))

export default useCategoryStore