import NextAuth from 'next-auth';
import GitHub from "next-auth/providers/github";
import {PrismaAdapter} from "@auth/prisma-adapter";
import {prisma} from "@/lib/prisma"

export const {auth, handler, signIn, signOut } = NextAuth({
    providers: [GitHub],
    adapter: PrismaAdapter(prisma),
})