import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

import { OUR_EMAIL } from '../../../lib/mail';
import prisma from '../../../lib/db/prisma';

import type { NextAuthOptions } from 'next-auth';

const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
  providers: [
    EmailProvider({
      name: 'magic link',
      server: process.env.EMAIL_SERVER_URL,
      from: `Vegan Hacktivists <${OUR_EMAIL}>`,
    }),
  ],
  pages: {
    newUser: '/auth/complete-signin',
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    verifyRequest: '/auth/verify-request',
  },
  callbacks: {
    // signIn: ({ user, email: { verificationRequest = false } }) => {
    //   if (verificationRequest) {
    //     return true;
    //   }
    //   // Profile not completed, redirect
    //   if (!user?.name) return '/auth/complete-signin';
    //   // Everything is good, continue
    //   return true;
    // },
  },
};

export default NextAuth(authOptions);
