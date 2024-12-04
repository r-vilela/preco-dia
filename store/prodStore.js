import { create } from "zustand";

const useProductStore = create((set) => ({
    isLoading: true,
    products: [],
    errorMessage: undefined,
    
    getProd: async (nome) => {
        try {
            set({isLoading: true});
            
            let prodReponse;  

            if (nome && nome.length > 0) {
                const url = `https://api-produtos-6p7n.onrender.com/products/${encodeURIComponent(nome)}`;

                prodReponse = await fetch(url, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include'
                });
            } else {
                prodReponse = await fetch('https://api-produtos-6p7n.onrender.com/products', {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include'
                });
            }
            
            if (!prodReponse.ok) {
                throw new Error('Failed to fetch products');
            }

            const prodData = await prodReponse.json();

            if (prodData) {
                set({products: prodData, isLoading: false});
            }
            
        } catch (error) {
            console.log(error)
        }},
    }
))

export default useProductStore