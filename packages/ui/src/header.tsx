import React from 'react';

import { Link } from '@vercel/microfrontends/next/client';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs';

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 h-16 border-b border-black/10 dark:border-white/10">
      <div className="flex items-center gap-2">
        <div className="h-6 w-6 rounded-md bg-[#6c47ff]" />
        <span className="font-semibold">Incubator</span>
      </div>
      <nav className="hidden sm:flex items-center gap-6 text-sm">
        <Link href="/">Inicio</Link>
        <Link href="/members">Miembros</Link>
      </nav>
      <div className="flex items-center gap-3">
        <SignedOut>
          <SignInButton />
          <SignUpButton>
            <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-10 px-4 sm:px-5 cursor-pointer">
              Crear cuenta
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
}
