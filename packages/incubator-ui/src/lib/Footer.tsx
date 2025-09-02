export function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 py-8 mt-16">
      <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-black/70 dark:text-white/70">
        <p>
          © {new Date().getFullYear()} Incubator · Comunidad de miembros en
          Argentina
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Vercel
          </a>
          <a
            href="https://clerk.com"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Clerk
          </a>
        </div>
      </div>
    </footer>
  );
}
