import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const authOptions = {
    session: {
        strategy: "jwt"
    },
    providers:[
        CredentialsProvider({
            type: "credentials",
            authorize(credentials, req){
                const {username, password} = credentials
                if(username === process.env.ENVUSERNAME && password === process.env.PASSWORD){
                    return {id: 1}
                }
                return null
            }
        })
    ],
    pages: {
        signIn: "/login"
    }
}

export default NextAuth(authOptions)