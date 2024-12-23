import { router } from "expo-router";
import { create } from "zustand";

const useAuthStore = create((set) => ({
    loggedUser: false,
    user: "",
    pass: "",
    token: "",
    errorMessage: undefined,
    avatar: "",
    name: "",
    email: "",
    phone: "",

    login: async (user, pass) => {
        try {
            console.log('Autentication')
            const loginResponse = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                username: user,//'emilys',
                password: pass,//'emilyspass',
                expiresInMins: 30, 
                }),
                credentials: 'include'
            })
            const loginData = await loginResponse.json()
            
            if(loginData.message){
                set({mensagemErro: loginData.message})
            }

            if(loginData.accessToken){
                const userAccess = await fetch('https://dummyjson.com/auth/me', {
                    method: 'GET',
                    headers: {
                    'Authorization': 'Bearer ' + loginData.accessToken,
                    }, 
                    credentials: 'include' 
                })
                
                const accessData = await userAccess.json()

                if(loginData.accessToken){
                    set({
                        loggedUser: true, 
                        user: user, 
                        pass: pass, 
                        token: loginData.accessToken,
                        name: loginData.firstName,
                        email: loginData.email,
                        phone: loginData.phone
                    })
                }
            }
            
        } catch (error) {
            console.log(error)
        }},
    logout: () => set({loggedUser: false, user: "", pass: "", token: ""})
}))

export default useAuthStore