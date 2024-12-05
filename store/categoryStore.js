import { create } from "zustand";

const useCategoryStore = create((set) => ({
    isLoadingCat: true,
    category: [],
    errorMessage: undefined,
    
    getCategory: async () => {
        try {
            console.log('Categories')
            set({isLoadingCat: true})
            const categoryReponse = await fetch('https://api-produtos-6p7n.onrender.com/categories', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'
            })
            const categoryData = await categoryReponse.json()

            if(categoryData){
                set({category: categoryData, isLoadingCat: false})
            }
            
        } catch (error) {
            console.log(error)
        }},
    postCategory: async (cat) => {
        try {
            const url = 'https://api-produtos-6p7n.onrender.com/categories/add'; 
    
            const response = await fetch(url, {
                method: 'POST', 
                headers: { 
                    'Content-Type': 'application/json', 
                },
                credentials: 'include', 
                body: JSON.stringify(cat), 
            });
    
            if (response.ok) {
                const data = await response.json();
                console.log('Category added:', data);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
}))

export default useCategoryStore