import { create } from "zustand";

const useLocalStore = create((set) => ({
    isLoadingLocal: true,
    local: [],
    postErrorMessage: undefined,
    
    getLocal: async () => {
        try {
            console.log('Local')
            set({isLoadingLocal: true})
            const localReponse = await fetch('https://api-produtos-9jmi.onrender.com/locations', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'
            })
            const localData = await localReponse.json()

            if(localData){
                set({local: localData, isLoadingLocal: false})
            }
            
        } catch (error) {
            console.log(error)
        }},
        postLocal: async (loc) => {
            try {
                const url = 'https://api-produtos-9jmi.onrender.com/locations';
        
                const response = await fetch(url, {
                    method: 'POST', 
                    headers: { 
                        'Content-Type': 'application/json', 
                    },
                    credentials: 'include', 
                    body: JSON.stringify(loc), 
                });
        
                
                if (response.ok) {
                    const data = await response.json();
                    console.log('Location added:', data);
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

export default useLocalStore