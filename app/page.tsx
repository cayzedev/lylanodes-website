"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

type Theme = "grey" | "dark" | "light";

export default function Home() {
  const [theme, setTheme] = useState<Theme>("grey");
  const [redirectMessage, setRedirectMessage] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [displayName, setDisplayName] = useState<string>("");
  const [mainEmail, setMainEmail] = useState<string>("user@example.com"); // Replace with actual main email

  const router = useRouter();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "grey" ? "dark" : prevTheme === "dark" ? "light" : "grey"
    );
  };

  const handleRedirect = (destination: string) => {
    if (destination === "panel") {
      setRedirectMessage(
        "LylaNodes, Is redirecting you to https://panel.lylanodes.xyz"
      );
      setTimeout(() => {
        window.location.href = "https://panel.lylanodes.xyz";
      }, 2000);
    } else if (destination === "dashboard") {
      setRedirectMessage(
        "LylaNodes, Is redirecting you to https://dashboard.lylanodes.xyz"
      );
      setTimeout(() => {
        window.location.href = "https://dashboard.lylanodes.xyz";
      }, 2000);
    }
  };

  const handleSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email || !password || !confirmPassword || !displayName) {
      alert("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Simulate sign-up process (replace with actual API call)
    alert(`Signing up with Email: ${email}, Display Name: ${displayName}, and Password: ${password}`);
    // Redirect to login page after successful sign-up
    router.push("/login");
  };

  const handleChangeEmail = () => {
    const newEmail = prompt("Enter new email:");
    if (newEmail) {
      setMainEmail(newEmail);
      alert(`Main email changed to: ${newEmail}`);
    }
  };

  const handleChangeDisplayName = () => {
    const newDisplayName = prompt("Enter new display name:");
    if (newDisplayName) {
      setDisplayName(newDisplayName);
      alert(`Display name changed to: ${newDisplayName}`);
    }
  };

  const handleChangePassword = () => {
    const newPassword = prompt("Enter new password:");
    if (newPassword) {
      setPassword(newPassword);
      alert(`Password changed successfully`);
    }
  };

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${theme}`}>
      {/* Navigation */}
      <nav className="w-full max-w-5xl flex items-center justify-between font-mono text-sm">
        <div className="flex items-center">
          <Link href="/">
            <a className="text-2xl font-bold">LylaNodes</a>
          </Link>
        </div>
        <div className="relative inline-block text-left">
          <button
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            Menu
          </button>
          <div
            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex={-1}
          >
            <div className="py-1" role="none">
              <a
                onClick={() => handleRedirect("panel")}
                className="text-gray-700 block px-4 py-2 text-sm cursor-pointer"
                role="menuitem"
                tabIndex={0}
                id="menu-item-0"
              >
                Panel
              </a>
              <a
                onClick={() => handleRedirect("dashboard")}
                className="text-gray-700 block px-4 py-2 text-sm cursor-pointer"
                role="menuitem"
                tabIndex={0}
                id="menu-item-1"
              >
                Dashboard
              </a>
              <a
                onClick={() => handleRedirect("account")}
                className="text-gray-700 block px-4 py-2 text-sm cursor-pointer"
                role="menuitem"
                tabIndex={0}
                id="menu-item-2"
              >
                Account Settings
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-b from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900">
        <h1 className="text-5xl font-bold mb-4">Welcome to LylaNodes</h1>
        <p className="text-xl mb-8">Reliable VPS Hosting, Game Servers, and Custom Discord Bots.</p>
        <Link href="/contact">
          <a className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition">Get Started</a>
        </Link>
      </section>

      {/* Sign-Up Section */}
      <section className="max-w-5xl mx-auto py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Sign Up</h2>
        <form onSubmit={handleSignUp} className="max-w-xl mx-auto">
          <div className="mb-4">
            <label htmlFor="displayName" className="block text-sm font-medium mb-2">
              Display Name
            </label>
            <input
              type="text"
              id="displayName"
              name="displayName"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition"
          >
            Sign Up
          </button>
        </form>
      </section>

      {/* Account Settings Section */}
      <section className="max-w-5xl mx-auto py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Account Settings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 border rounded-lg text-center shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-4">Change Email</h3>
            <p className="mb-4">You can change your email below:</p>
            <div className="border p-4 rounded-lg mb-4">
              <p className="mb-2">Current Email:</p>
              <p className="font-semibold">{mainEmail}</p>
            </div>
            <button
              className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition"
              onClick={handleChangeEmail}
            >
              Change Email
            </button>
          </div>
          <div className="p-8 border rounded-lg text-center shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-4">Change Display Name</h3>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />
            <button
              className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition"
              onClick={handleChangeDisplayName}
            >
              Change Display Name
            </button>
          </div>
          <div className="p-8 border rounded-lg text-center shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-4">Change Password</h3>
            <button
              className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition"
              onClick={handleChangePassword}
            >
              Change Password
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-800 text-white text-center">
        <p>&copy; 2024 LylaNodes. All rights reserved.</p>
      </footer>

      {/* Redirect Message */}
      {redirectMessage && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 text-white text-lg z-50">
          {redirectMessage}
        </div>
      )}

      {/* Theme Toggle Button */}
      <button
        className="fixed bottom-4 right-4 bg-gray-200 dark:bg-gray-700 p-4 rounded-full shadow-lg hover:shadow-xl transition"
        onClick={toggleTheme}
      >
        <Image src="/half-moon.svg" alt="Toggle Theme" width={24} height={24} />
      </button>
    </main>
  );
}
