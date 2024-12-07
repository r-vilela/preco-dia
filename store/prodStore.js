import { create } from "zustand";

const useProductStore = create((set) => ({
    isLoading: false,
    products: [],
    errorMessage: undefined,
    postErrorMessage: undefined,
    
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

            const prodData = await prodReponse.json();

            if (prodData) {
                set({products: prodData, isLoading: false});
            }
            
        } catch (error) {
            console.log(error)
        }},
        postProd: async (prod) => {
            try {
                const data = new FormData()
                for (const key in prod) {
                    if (prod.hasOwnProperty(key)) {
                      data.append(key, prod[key]);
                    }
                  }

                const url = 'https://api-produtos-6p7n.onrender.com/products';
        
                const response = await fetch(url, {
                    method: 'POST', 
                    headers: { 
                        'Content-Type': 'multipart/form-data', 
                    },
                    credentials: 'include', 
                    body: data,
                });
        
                if (response.ok) {
                    const data = await response.json();
                    console.log('Product added:', data);
                } else {
                    set({postErrorMessage: response})
                    console.log(response)
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    }
))

export default useProductStore