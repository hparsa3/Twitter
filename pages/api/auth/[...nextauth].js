import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth ({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: "911523746943-c6kj86knf5t57dflh73jv9oek7l7vbdo.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    // ...add more providers here
  ],
  
  pages:{
    signIn:"/auth/signin",
    
  },
  callbacks: {
    async session({ session, token }) {
      session.user.username = session.user.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();
      session.user.uid = token.sub;
      return session;
    },
  },
  
});

