import NextAuth from 'next-auth';
import Github from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {label: "Username", type: "text", placeholer: "username"},
                password: {label: "Password", type: "password", placeholer: "password"}
            },
            async authorize() {
                return { id: 1 };
            }

        })
    ],

    callbacks: {
        async session({ session, token }: any) {
            session.user.id = token.sub;
            return session;
        }
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };