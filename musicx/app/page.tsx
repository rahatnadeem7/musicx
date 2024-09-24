"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
//@ts-ignore
import { Users, Radio, Headphones } from "lucide-react";
import { Appbar } from "./components/Appbar";
import { Redirect } from "./components/Redirect";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-teal-800 via-teal-700 to-teal-900 overflow-hidden">
      <Appbar />
      <Redirect />
      <main className="flex-1 py-12 md:py-24 lg:py-32 flex justify-center items-center relative">
        <div className="absolute top-0 left-0 w-full h-full z-0 bg-[url('/background.svg')] bg-cover bg-fixed opacity-20"></div>
        <div className="container px-4 md:px-6 mx-auto z-10">
          <div className="flex flex-col items-center space-y-6 text-center animate-slideInUp">
            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white animate-bounceSlow">
                Let Your Fans Choose the Beat
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl lg:text-2xl leading-relaxed">
                Empower your audience to curate your music stream. Connect with
                fans like never before.
              </p>
            </div>
            <div className="space-x-4">
              <Button className="bg-teal-500 text-white hover:bg-teal-600 hover:scale-110 hover:shadow-xl transition-transform rounded-lg">
                Get Started
              </Button>
              <Button
                variant="outline"
                className="text-teal-400 border-teal-400 hover:bg-teal-400 hover:text-gray-900 transition-all rounded-lg hover:scale-110"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </main>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-800 bg-opacity-90 flex justify-center items-center">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-center mb-12 text-white animate-slideInRight">
            Key Features
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center space-y-3 text-center hover:scale-110 transition-transform animate-float">
              <Users className="h-12 w-12 text-teal-400 animate-spinSlow" />
              <h3 className="text-xl font-bold text-white">Fan Interaction</h3>
              <p className="text-gray-300">Let fans choose the music.</p>
            </div>
            <div className="flex flex-col items-center space-y-3 text-center hover:scale-110 transition-transform animate-float">
              <Radio className="h-12 w-12 text-teal-400 animate-pingSlow" />
              <h3 className="text-xl font-bold text-white">Live Streaming</h3>
              <p className="text-gray-300">Stream with real-time input.</p>
            </div>
            <div className="flex flex-col items-center space-y-3 text-center hover:scale-110 transition-transform animate-float">
              <Headphones className="h-12 w-12 text-teal-400 animate-wiggle" />
              <h3 className="text-xl font-bold text-white">High-Quality Audio</h3>
              <p className="text-gray-300">Crystal clear sound quality.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-900 flex justify-center items-center overflow-hidden">
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-teal-500 opacity-30 rounded-full animate-zoom"></div>
        <div className="container px-4 md:px-6 mx-auto z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-white animate-slideInUp">
                Ready to Transform Your Streams?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl leading-relaxed">
                Join MusicStreamChoice today and create unforgettable
                experiences.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input
                  className="max-w-lg flex-1 bg-teal-800 border-teal-700 text-white placeholder-gray-400 focus:ring-teal-500 rounded-lg"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button
                  type="submit"
                  className="bg-teal-500 text-white hover:bg-teal-600 hover:scale-110 transition-transform rounded-lg"
                >
                  Sign Up
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center justify-center px-4 md:px-6 border-t border-teal-700">
        <p className="text-xs text-gray-400">
          © 2023 MusicStreamChoice. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs text-gray-400 hover:text-teal-400 transition-colors"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs text-gray-400 hover:text-teal-400 transition-colors"
            href="#"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
