import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import clientPromise from "@/lib/MongoDbAdapter"
import { MongoDBAdapter } from "@auth/mongodb-adapter"

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: "jwt", // keep JWT-based sessions (most common for SPAs)
  },
  providers: [
   GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    })
  ],
  pages: {
    signIn: '/signin',
    signOut: '/signout',
    error: '/error',
  },
  secret: process.env.NEXTAUTH_SECRET,
}   

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }