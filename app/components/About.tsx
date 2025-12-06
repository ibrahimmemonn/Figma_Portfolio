"use client";

import Image from "next/image";
import { motion } from "framer-motion";
const m: any = motion as any;

export default function About(): React.JSX.Element {
  return (
    <m.section id="about" className="py-20 px-6" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <div className="container mx-auto max-w-6xl">
        <m.div className="text-center mb-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.1 }}>
          <m.h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">About</m.h2>
          <p className="text-lg max-w-6xl mx-auto">
            I am a <span className="text-purple-400">software developer</span> and <span className="text-purple-400">cybersecurity enthusiast</span> with a strong interest in intuitive UI design. I enjoy building applications that are user-friendly, efficient, and secure. I&apos;ve been growing in this field for more than six months, continually expanding my skills and practical experience.
          </p>
        </m.div>
        <m.div className="mx-auto w-fit mt-8 relative" whileHover={{ scale: 1.02 }} animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
          <Image 
            src="/assets/illustration.png"
            alt="Skills"
            width={800}
            height={800}
            className="object-cover mx-auto"
            style={{ width: "auto", height: "auto" }}
          />
        </m.div>
      </div>
    </m.section>
  );
}

