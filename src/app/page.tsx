import Link from 'next/link';
import { Rocket, Users, Zap, Globe } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-space-dark to-gray-900">
      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-space-gold mb-4">
            SPACE CONQUEST
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Command your fleet, explore the galaxy, build alliances, and conquer the universe 
            in this text-based space strategy game.
          </p>
        </div>
      </header>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-card text-center">
            <Rocket className="w-12 h-12 text-space-blue mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Fleet Command</h3>
            <p className="text-gray-400">
              Build and command powerful fleets with various ship types and advanced weaponry.
            </p>
          </div>
          
          <div className="space-card text-center">
            <Globe className="w-12 h-12 text-space-green mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Galaxy Exploration</h3>
            <p className="text-gray-400">
              Explore a procedurally generated universe with hundreds of planets to colonize.
            </p>
          </div>
          
          <div className="space-card text-center">
            <Users className="w-12 h-12 text-space-purple mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Alliances</h3>
            <p className="text-gray-400">
              Form powerful alliances and meta-alliances to dominate the galaxy together.
            </p>
          </div>
          
          <div className="space-card text-center">
            <Zap className="w-12 h-12 text-space-gold mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Research & Tech</h3>
            <p className="text-gray-400">
              Advance through extensive research trees to unlock new technologies and ships.
            </p>
          </div>
        </div>
      </section>

      {/* Race Selection Preview */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Race</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="space-card">
            <h3 className="text-xl font-bold text-space-gold mb-2">Humans</h3>
            <p className="text-gray-400 mb-4">
              Balanced and diplomatic, with bonuses to research and trade networks.
            </p>
            <div className="text-sm text-green-400">
              +15% Research Speed, +10% Cargo Capacity
            </div>
          </div>
          
          <div className="space-card">
            <h3 className="text-xl font-bold text-space-red mb-2">Zephyrians</h3>
            <p className="text-gray-400 mb-4">
              Aggressive warriors specializing in plasma weapons and stealth technology.
            </p>
            <div className="text-sm text-green-400">
              +20% Weapon Damage, +15% Ship Speed
            </div>
          </div>
          
          <div className="space-card">
            <h3 className="text-xl font-bold text-space-purple mb-2">Crystalline</h3>
            <p className="text-gray-400 mb-4">
              Ancient beings focused on crystal technology and energy manipulation.
            </p>
            <div className="text-sm text-green-400">
              +25% Research Speed, Energy Shield Technology
            </div>
          </div>
          
          <div className="space-card">
            <h3 className="text-xl font-bold text-gray-400 mb-2">Mechanoids</h3>
            <p className="text-gray-400 mb-4">
              Synthetic race with superior automation and repair capabilities.
            </p>
            <div className="text-sm text-green-400">
              +15% Weapon & Cargo, Automation Systems
            </div>
          </div>
          
          <div className="space-card">
            <h3 className="text-xl font-bold text-purple-400 mb-2">Void Born</h3>
            <p className="text-gray-400 mb-4">
              Mysterious entities that manipulate dark energy and void technology.
            </p>
            <div className="text-sm text-green-400">
              +25% Weapon Damage, +20% Ship Speed
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Ready to Conquer the Galaxy?</h2>
        <div className="space-x-4">
          <Link href="/register" className="space-button text-lg px-8 py-3">
            Start Playing
          </Link>
          <Link href="/login" className="space-button-secondary text-lg px-8 py-3">
            Login
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 Space Conquest Game. Built with Next.js and PostgreSQL.</p>
        </div>
      </footer>
    </div>
  );
}