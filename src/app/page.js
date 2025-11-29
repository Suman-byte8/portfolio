import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />

      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Azonix, sans-serif' }}>
          Welcome to my Portfolio 👋
        </h2>
        <p className="text-gray-300 max-w-xl">
          Building cool things with Next.js, Tailwind, and vibes.
        </p>
      </section>
    </main>
  );
}
