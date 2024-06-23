"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

type Theme = "grey" | "dark" | "light";

export default function Home() {
  const [theme, setTheme] = useState<Theme>("grey");
  const [redirectMessage, setRedirectMessage] = useState<string>("");

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
      setRedirectMessage("LylaNodes, Is redirecting you to https://panel.lylanodes.xyz");
      setTimeout(() => {
        window.location.href = "https://panel.lylanodes.xyz";
      }, 2000);
    } else if (destination === "dashboard") {
      setRedirectMessage("LylaNodes, Is redirecting you to https://dashboard.lylanodes.xyz");
      setTimeout(() => {
        window.location.href = "https://dashboard.lylanodes.xyz";
      }, 2000);
    } else if (destination === "account") {
      setRedirectMessage("Coming soon");
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
          <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none" id="menu-button" aria-expanded="true" aria-haspopup="true">
            Menu
          </button>
          <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
            <div className="py-1" role="none">
              <a onClick={() => handleRedirect('panel')} className="text-gray-700 block px-4 py-2 text-sm cursor-pointer" role="menuitem" tabIndex={0} id="menu-item-0">Panel</a>
              <a onClick={() => handleRedirect('dashboard')} className="text-gray-700 block px-4 py-2 text-sm cursor-pointer" role="menuitem" tabIndex={0} id="menu-item-1">Dashboard</a>
              <a onClick={() => handleRedirect('account')} className="text-gray-700 block px-4 py-2 text-sm cursor-pointer" role="menuitem" tabIndex={0} id="menu-item-2">Account Settings</a>
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

      {/* Services Section */}
      <section className="max-w-5xl mx-auto py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border rounded-lg text-center shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-4">VPS Hosting</h3>
            <p>High-performance VPS hosting for all your needs.</p>
          </div>
          <div className="p-8 border rounded-lg text-center shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-4">Game Servers</h3>
            <p>Reliable game server hosting, including Minecraft.</p>
          </div>
          <div className="p-8 border rounded-lg text-center shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-4">Discord Bots</h3>
            <p>Custom Discord bots in JS, Rust, and Python.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border rounded-lg text-center shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-4">High Uptime</h3>
              <p>We guarantee 99.99% uptime for your services.</p>
            </div>
            <div className="p-8 border rounded-lg text-center shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-4">24/7 Support</h3>
              <p>Our support team is here to help you anytime.</p>
            </div>
            <div className="p-8 border rounded-lg text-center shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-4">Easy Setup</h3>
              <p>Get your services up and running in minutes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-5xl mx-auto py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border rounded-lg text-center shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-4">Basic Plan</h3>
            <p className="text-4xl font-bold mb-4">$10/month</p>
            <p>1 CPU Core</p>
            <p>2 GB RAM</p>
            <p>50 GB SSD Storage</p>
            <p>1 TB Bandwidth</p>
            <Link href="/contact">
              <a className="block mt-8 bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition">Get Started</a>
            </Link>
          </div>
          <div className="p-8 border rounded-lg text-center shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-4">Standard Plan</h3>
            <p className="text-4xl font-bold mb-4">$20/month</p>
            <p>2 CPU Cores</p>
            <p>4 GB RAM</p>
            <p>100 GB SSD Storage</p>
            <p>2 TB Bandwidth</p>
            <Link href="/contact">
              <a className="block mt-8 bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition">Get Started</a>
            </Link>
          </div>
          <div className="p-8 border rounded-lg text-center shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-4">Premium Plan</h3>
            <p className="text-4xl font-bold mb-4">$30/month</p>
            <p>4 CPU Cores</p>
            <p>8 GB RAM</p>
            <p>200 GB SSD Storage</p>
            <p>4 TB Bandwidth</p>
            <Link href="/contact">
              <a className="block mt-8 bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition">Get Started</a>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-5xl mx-auto py-20 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border rounded-lg text-center shadow-lg hover:shadow-xl transition">
              <p>&quot;LylaNodes has been a game-changer for our business. The uptime is incredible!&quot;</p>
              <p className="mt-4 font-bold">- John Doe</p>
            </div>
            <div className="p-8 border rounded-lg text-center shadow-lg hover:shadow-xl transition">
              <p>&quot;Fantastic support and easy setup. Highly recommend!&quot;</p>
              <p className="mt-4 font-bold">- Jane Smith</p>
            </div>
            <div className="p-8 border rounded-lg text-center shadow-lg hover:shadow-xl transition">
              <p>&quot;Best hosting service I&apos;ve used. Reliable and affordable.&quot;</p>
              <p className="mt-4 font-bold">- Sam Wilson</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-5xl mx-auto py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <form className="max-w-xl mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea id="message" name="message" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" rows={4} required></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition">Send Message</button>
        </form>
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
        <Image
          src="/half-moon.svg"
          alt="Toggle Theme"
          width={24}
          height={24}
        />
      </button>
    </main>
  );
}


