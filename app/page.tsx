
'use client'

import HeroCarousel from "@/components/HeroCarousel";
import { bebas, dm_serif_display, poppins, raleway, roboto_condensed } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { GiMaterialsScience } from "react-icons/gi";
import { FaDollarSign } from "react-icons/fa";
import { ImStarFull } from "react-icons/im";


export default function Home() {
  
  const ProblemCards = [
    {
      problem: `I don't know how to launch my online store.`,
      solution: 'We build your store from scratch with modern, scalable technologies (Next.js + Prisma + Stripe)'
    },
    {
      problem: `My website is slow, or doesn't convert`,
      solution: 'We deliver fast, SEO-Optimized, Mobile-first designs that improve conversion rates.'
    },
    {
      problem: `I need professional features, not a simple template.`,
      solution: 'Features like variants, admin dashboard, wishlist, cart, authentication, inventory, and payments.'
    },
    {
      problem: `I don't know how to manage my store after launch`,
      solution: 'We teach you everything with video guides and provide ongoing support if needed.'
    },
  ]
  const Technologies = [
    {name: 'Next.js', url: '/images/technology-icons/nextjs.png'},
    {name: 'React', url: '/images/technology-icons/react.png'},
    {name: 'MongoDB', url: '/images/technology-icons/mongodb.png'},
    {name: 'Tailwindcss', url: '/images/technology-icons/tailwindcss.png'},
    {name: 'Stripe', url: '/images/technology-icons/stripe.png'},
    {name: 'Prisma', url: '/images/technology-icons/prisma.png'},
  ]

  const [formName, setFormName] = useState('')
  const [formEmail, setFormEmail] = useState('')
  const [formDescription, setFormDescription] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: formName,
      email: formEmail,
      message: formDescription,
    }),
  });

  if (res.ok) {
    alert("Message sent successfully!");
    setFormName("");
    setFormEmail("");
    setFormDescription("");
  } else {
    alert("Failed: " + res.statusText);
  }
};
  
  return (
    <div className="flex flex-col items-center">
      {/* LOGO */}
      <div className="h-fit mt-8 flex flex-col mx-auto text-center">
        <h1 className={`text-8xl ${bebas.className} tracking-widest`}>DAVID KNIGHT AGENCY</h1>
        <span className={`${dm_serif_display.className} text-xl font-extralight leading-4 tracking-tight`}>We build High performance E-commerce websites using Next.js, Prisma & modern technologies.</span>
        <span className={`mt-8 text-4xl ${roboto_condensed} font-light`}>Helping brands launch fast, Scale confidently, and convert visitors into customers.</span>
      </div>
      {/* CALL BUTTON */}
      <div className="mb-20 mt-6">
          <a
            href="https://wa.me/+989220295361"
            target='_blank'
            rel='noopener noreferrer'
          >
            <button className="bg-cyan-500 text-white px-8 py-4 hover:bg-cyan-600/85" style={{ backgroundColor: "#40E0D0" }}>
              BOOK A FREE STRATEGY CALL
            </button> 
        </a>
      </div>
      {/* Carousel Section */}
      <div className="mb-4">
        <HeroCarousel />
      </div>    
      {/* What We Can Solve */}
      <div className="mt-24 mb-1">
        <h1 className={`${bebas.className} text-7xl mb-6 text-center`}>What We Can Solve</h1>
        <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 space-x-8 space-y-4">
          {ProblemCards?.map((card, index) => (
            <div key={index} className="px-6 w-fit h-36 lg:h-44 rounded-lg flex flex-col gap-2 shadow-md justify-center text-justify">
              <h1 className={`${roboto_condensed.className} text-2xl font-bold tracking-wide`}>{card.problem}</h1>
              <p className={`${roboto_condensed.className}`}>{card.solution}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Our Projects */}
      <div className="flex flex-col my-24 mb-10">
          <h1 className={`${bebas.className} text-7xl mb-6 text-center`}>OUR PROJECTS</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* DAVID KNIGHT MARKETPLACE */}
              <div>
                <div>
                  <Image src={'/images/marketplace-homepage.png'} alt="marketplace homepage image" width={600} height={400} priority className="w-full h-auto object-cover" />
                  <p className="font-normal text-center mt-6">(This project focuses on functionalities rather than UI/Design)</p>
                  <h3 className="font-semibold text-center mt-6 mb-2 text-lg leading-3">Modern E-commerce Marketplace</h3>
                  <ul className="list-disc place-self-center">
                    <li className="font-light">Built with Next.js, Prisma (MongoDB), Zustand, React Query</li>
                    <li className="font-light">Admin dashboard</li>
                    <li className="font-light">Multi-product system</li>
                    <li className="font-light">Checkout + categories</li>
                    <li className="font-light">Modern UI</li>
                  </ul>
                </div>
                <div className="text-center">
                  <Link href={'https://davidknightmarketplace.vercel.app'}>
                    <button className="mt-4 bg-cyan-500 rounded-md px-4 py-2 text-2xl font-light tracking-wider cursor-pointer text-white hover:bg-cyan-600">View Live Demo</button>
                  </Link>
                </div>
              </div>
            {/* GEMNEST JEWELRY */}
            <div>
                <div>
                  <Image src={'/images/gemnest-homepage.png'} alt="marketplace homepage image" width={600} height={400} priority className="w-full h-auto object-cover" />
                  <p className="font-normal text-center mt-6">(This project just focuses on UI & Design)</p>
                  <h3 className="font-semibold text-center mt-6 mb-2 text-xl leading-3">Luxury Jewelry Store</h3>
                  <ul className="list-disc place-self-center">
                    <li className="font-light">Beautiful product showcase</li>
                    <li className="font-light">High-quality UI</li>
                    <li className="font-light">Polished animations</li>
                    <li className="font-light">Clean product detail page</li>
                    <li className="font-light">Elegant Design</li>
                  </ul>
                </div>
                <div className="text-center">
                  <Link href={'https://gemnestjewls.vercel.app'}>
                    <button className="mt-4 bg-cyan-500 rounded-md px-4 py-2 text-2xl font-light tracking-wider cursor-pointer text-white hover:bg-cyan-600">View Live Demo</button>
                  </Link>
                </div>
              </div>
          </div>
      </div>
      {/* Technologies We Use */}
      <div className="my-12 text-center">
        <h1 className={`${bebas.className} text-6xl mb-6 text-center`}>Some Of Technologies We Use</h1>
        <div className="max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-4 my-10">
            {Technologies?.map((technology, index) => (
              <div key={index} className="bg-white flex flex-col px-20 py-4 items-center w-full rounded-md gap-2">
                <Image src={technology.url || ""} alt={technology.name!} width={200} height={100} className="object-cover" />
                <span className="font-light text-xl">{technology.name}</span>
              </div>
            ))}
        </div>
        <blockquote className={`${raleway.className} text-2xl font-light text-slate-500`}>“ We use modern, enterprise-level technologies to deliver fast, secure, reliable web apps. ”</blockquote>
      </div>
      {/* Contact Us */}
      <div className="my-10 flex flex-col items-center justify-center mx-4">
        <h1 className={`${bebas.className} text-5xl text-center`}>CONTACT US</h1>
        <span className="font-light tracking-wider text-lg">{`Have a Project in mind? We'd love to hear about it.`}</span>
        <form className="w-full mt-6 space-y-2" onSubmit={handleSubmit}>
          <input 
            type="text"
            name="name"
            onChange={(e) => setFormName(e.target.value ?? "")}
            placeholder="Name"
            className="w-full p-2 font-light text-lg border border-gray-200 rounded-md"
             />
          <input 
            type="email"
            name="email"
            onChange={(e) => setFormEmail(e.target.value ?? "")}
            placeholder="Email"
            className="w-full p-2 font-light text-lg border border-gray-200 rounded-md"
             />
          <textarea
            name="message"
            onChange={(e) => setFormDescription(e.target.value ?? "")}
            placeholder="Description"
            className="w-full p-2 font-light text-lg border border-gray-200 rounded-md"
          ></textarea>
          <button 
            type="submit"
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600/90 text-white rounded w-full cursor-pointer">
            SEND MESSAGE
          </button>
        </form>
      </div>
      {/* Why Choose Us */}
      <div className="max-w-7xl w-full my-10">
        <h1 className={`${bebas.className} text-5xl text-center`}>WHY CHOOSE US?</h1>
        <div className="mt-4 flex">
          {/* FAST DELIVERY */}
          <div className="lg:w-1/3 w-full py-8 self-center rounded text-center border border-slate-100 mx-4 shadow-md flex flex-col items-center">
              <TbTruckDelivery size={56}  />
              <h1 className="text-2xl font-semibold">Fast Delivery</h1>
              <span>Launch in days, not months.</span>
          </div>
          {/* MODER TECH STACK */}
          <div className="lg:w-1/3 w-full py-8 self-center rounded text-center border border-slate-100 mx-4 shadow-md flex flex-col items-center">
              <GiMaterialsScience size={56} />
              <h1 className="text-2xl font-semibold">Modern Tech Stack</h1>
              <span>Next.js, Prisma, Stripe ー future-proof.</span>
          </div>
          {/* PRICES */}
          <div className="lg:w-1/3 w-full py-7 self-center rounded text-center border border-slate-100 mx-4 shadow-md flex flex-col items-center">
              <FaDollarSign size={40} />
              <h1 className="text-2xl font-semibold">Clear Pricing</h1>
              <span className="block max-w-[220px] mx-auto">Starter websites from $2k, advanced stores customized.</span>
          </div>
        </div>
      </div>
      {/* Pricing/Packages */}
      <div className="max-w-7xl w-full my-14">
        <h1 className={`${bebas.className} text-5xl text-center`}>PRICING & PACKAGES</h1>
        <div className="flex mt-6">
          {/* Starter */}
          <div className="lg:w-1/3 w-full text-center py-8  self-center mx-4 flex flex-col items-center justify-center">
            <h1 className={`text-4xl font-bold ${bebas.className}`}>Starter</h1>
            <span className="mb-4">For personal brands or simple stores.</span>
            <ImStarFull size={56}/>
          </div>
          {/* PROFESSIONAL */}
          <div className="lg:w-1/3 w-full text-center py-8 self-center mx-4 flex flex-col items-center justify-center">
            <h1 className={`text-4xl font-bold ${bebas.className}`}>Professional</h1>
            <span className="mb-4">For small/mid-size businesses.</span>
            <div className="flex gap-2">{[1, 2].map(i => <ImStarFull key={i} size={56} />)}</div>
          </div>
          {/* ENTERPRISE */}
          <div className="lg:w-1/3 w-full text-center py-8 self-center mx-4 flex flex-col items-center justify-center">
            <h1 className={`text-4xl font-bold ${bebas.className}`}>Enterprise</h1>
            <span className="mb-4">Custom solutions.</span>
            <div className="flex gap-2">{[1, 2, 3].map(i => <ImStarFull key={i} size={56} />)}</div>
          </div>
        </div>
      </div>
      {/* WhatsApp & Email */}
      <div className='flex flex-col space-y-2 items-center mb-10'>
        <a
            href="https://wa.me/+989220295361"
            target='_blank'
            rel='noopener noreferrer'
            className='bg-cyan-500 text-white px-8 py-4 rounded'
        >
            Chat on Whatsapp
        </a>
        <span className={``}><strong className='font-semibold'>Email</strong>: {`developer@davidknightofficial.com`}</span>
    </div>
    </div>
  );
}
