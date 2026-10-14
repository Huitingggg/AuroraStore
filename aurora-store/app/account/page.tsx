"use client";

import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AccountPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [mode, setMode] = useState<"signin" | "register">("signin");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (status === "loading") {
    return (
      <section className="mx-auto max-w-md px-6 py-24 text-center font-body text-plum/60">
        Loading…
      </section>
    );
  }

  if (session?.user) {
    return (
      <section className="mx-auto max-w-md px-6 py-24">
        <div className="rounded-glam bg-cream p-8 text-center shadow-glam">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-rose/40 font-display text-xl text-plum">
            {session.user.name?.[0]?.toUpperCase() ?? "?"}
          </div>
          <p className="mt-4 font-display text-xl text-plum">{session.user.name}</p>
          <p className="mt-1 font-body text-sm text-plum/60">{session.user.email}</p>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="mt-6 rounded-full bg-rosedeep px-8 py-2.5 font-body text-sm text-cream shadow-glamsm transition-opacity hover:opacity-90"
          >
            Sign out
          </button>
        </div>
      </section>
    );
  }

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const res = await signIn("credentials", { email, password, redirect: false });
    setLoading(false);
    if (res?.error) {
      setError("That email and password don't match. Try again.");
      return;
    }
    router.push("/");
    router.refresh();
  }

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (password.length < 8) {
      setError("Password needs to be at least 8 characters.");
      return;
    }
    setLoading(true);
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    if (!res.ok) {
      setLoading(false);
      setError(data.error ?? "Something went wrong. Try again.");
      return;
    }
    const signInRes = await signIn("credentials", { email, password, redirect: false });
    setLoading(false);
    if (signInRes?.error) {
      setError("Account created — sign in below.");
      setMode("signin");
      return;
    }
    router.push("/");
    router.refresh();
  }

  return (
    <section className="mx-auto max-w-md px-6 py-24">
      <div className="rounded-glam bg-cream p-8 shadow-glam">
        <div className="flex gap-6 border-b border-hairline pb-4">
          <button
            onClick={() => { setMode("signin"); setError(""); }}
            className={`font-display text-lg ${mode === "signin" ? "text-plum" : "text-plum/35"}`}
          >
            Sign in
          </button>
          <button
            onClick={() => { setMode("register"); setError(""); }}
            className={`font-display text-lg ${mode === "register" ? "text-plum" : "text-plum/35"}`}
          >
            Register
          </button>
        </div>

        <form
          onSubmit={mode === "signin" ? handleSignIn : handleRegister}
          className="mt-6 flex flex-col gap-4"
        >
          {mode === "register" && (
            <input
              type="text"
              required
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-full border border-hairline bg-blush/40 px-5 py-2.5 font-body text-sm text-plum placeholder:text-plum/40 focus:outline-none focus:border-rosedeep"
            />
          )}
          <input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-full border border-hairline bg-blush/40 px-5 py-2.5 font-body text-sm text-plum placeholder:text-plum/40 focus:outline-none focus:border-rosedeep"
          />
          <input
            type="password"
            required
            minLength={8}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-full border border-hairline bg-blush/40 px-5 py-2.5 font-body text-sm text-plum placeholder:text-plum/40 focus:outline-none focus:border-rosedeep"
          />

          {error && <p className="font-body text-sm text-rosedeep">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 rounded-full bg-rosedeep px-8 py-2.5 font-body text-sm text-cream shadow-glamsm transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Please wait…" : mode === "signin" ? "Sign in" : "Create account"}
          </button>
        </form>
      </div>
    </section>
  );
}
