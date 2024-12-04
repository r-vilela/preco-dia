import { create } from "zustand";

const useAuthStore = create((set) => ({
    loggedUser: false,
    user: "",
    pass: "",
    token: "",
    errorMessage: undefined,
    avatar: "",

    login: async (user, pass) => {
        try {
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

                console.log(accessData.length)

                if(loginData.accessToken){
                    set({loggedUser: true, user: user, pass: pass, token: loginData.accessToken})
                }
            }
            
        } catch (error) {
            console.log(error)
        }},
    logout: () => set({loggedUser: false, user: "", pass: "", token: ""})
}))

export default useAuthStore