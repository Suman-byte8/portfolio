import type { Service } from "./types";
import { BarsIcon } from "@/components/icons/services/bars-icon";
import { BrainIcon } from "@/components/icons/services/brain-icon";
import { CartIcon } from "@/components/icons/services/cart-icon";
import { CloudIcon } from "@/components/icons/services/cloud-icon";
import { DataIcon } from "@/components/icons/services/data-icon";
import { DollarIcon } from "@/components/icons/services/dollar-icon";
import { LinkIcon } from "@/components/icons/services/link-icon";
import { MobileIcon } from "@/components/icons/services/mobile-icon";
import { SparklesIcon } from "@/components/icons/services/sparkles-icon";

export const services: Service[] = [
  {
    icon: <SparklesIcon className="w-6 h-6" />,
    iconBg: "bg-black/20 border border-[#353739]",
    title: "Next.js Frontend Engineering",
    description:
      "Build modern, animated, SEO-ready frontends using Next.js, Tailwind, GSAP, and Framer Motion with pixel-perfect UI."
  },
  {
    icon: <BrainIcon className="w-6 h-6" />,
    iconBg: "bg-black/20 border border-[#353739]",
    title: "MERN Stack Development",
    description:
      "Full-stack apps with React, Express, MongoDB, and JWT auth—clean APIs, scalable DB design, and production-ready logic."
  },
  {
    icon: <MobileIcon className="w-6 h-6" />,
    iconBg: "bg-black/20 border border-[#353739]",
    title: "Ride-Booking Systems",
    description:
      "Real-time ride booking with Socket.IO, location routing, dynamic pricing, and smooth GSAP-powered UI interactions."
  },
  {
    icon: <LinkIcon className="w-6 h-6" />,
    iconBg: "bg-black/20 border border-[#353739]",
    title: "API Integration & Automation",
    description:
      "Integrate third-party APIs, payment gateways, OCR processors, geolocation APIs, and automate business workflows."
  },
  {
    icon: <BarsIcon className="w-6 h-6" />,
    iconBg: "bg-black/20 border border-[#353739]",
    title: "Custom UI/UX & Micro-Animations",
    description:
      "High-impact interfaces with GSAP, Framer Motion, Lottie, and scroll-based interactions for premium product feel."
  },
  {
    icon: <DataIcon className="w-6 h-6" />,
    iconBg: "bg-black/20 border border-[#353739]",
    title: "Data-Driven Web Apps",
    description:
      "Dashboards, analytics cards, scoreboards, and dynamic visual components with optimised state management."
  },
  {
    icon: <CloudIcon className="w-6 h-6" />,
    iconBg: "bg-black/20 border border-[#353739]",
    title: "Serverless & Cloud Deployments",
    description:
      "Deploy and optimize apps on Vercel, AWS Lambda, and serverless APIs with fast, scalable infrastructure."
  },
  {
    icon: <CartIcon className="w-6 h-6" />,
    iconBg: "bg-black/20 border border-[#353739]",
    title: "E-Commerce & Digital Warranty",
    description:
      "Build custom product flows, digital warranty systems, and NFT-based verification using modern JavaScript tooling."
  },
  {
    icon: <DollarIcon className="w-6 h-6" />,
    iconBg: "bg-black/20 border border-[#353739]",
    title: "Smart Contract Basics",
    description:
      "Beginner-friendly Solidity contract development for token logic, identity validation, and blockchain-ready workflows."
  }
];
