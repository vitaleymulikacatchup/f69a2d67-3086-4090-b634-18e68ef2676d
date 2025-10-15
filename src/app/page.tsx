"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Zap, TrendingUp } from 'lucide-react';

const assetMap = [
  { "id": "hero-image", "url": "https://images.pexels.com/photos/34261438/pexels-photo-34261438.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A barista making coffee with an espresso machine in a contemporary cafe setting." },
  { "id": "about-image", "url": "https://images.pexels.com/photos/34234301/pexels-photo-34234301.png?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Two professionals working at a shared office desk, top view." },
  { "id": "feature-image", "url": "https://images.pexels.com/photos/439803/pexels-photo-439803.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A black and white photo of a computer monitor displaying various images and applications in an indoor setting." }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Features", id: "features" },
            { name: "Contact", id: "contact" }
          ]}
          logoSrc="/brand/logo.svg"
          logoAlt="Company Logo"
          brandName="AI Startup"
          buttonText="Contact Us"
          buttonVariant="text-stagger"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Innovate with AI"
            description="Empowering your business through intelligent solutions."
            tag="Discover AI"
            buttons={[
              { text: "Get Started", href: "about" },
              { text: "Learn More", href: "features" }
            ]}
            imageSrc="https://images.pexels.com/photos/34261438/pexels-photo-34261438.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            className="bg-blue-50 text-blue-900"
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            bulletPoints={[
              { title: "Innovation", description: "We push boundaries using cutting-edge technology.", icon: null },
              { title: "Expertise", description: "Our team comprises industry leaders and AI experts.", icon: null }
            ]}
            imageSrc="https://images.pexels.com/photos/34234301/pexels-photo-34234301.png?auto=compress&cs=tinysrgb&h=650&w=940"
            className="bg-blue-50 text-blue-900"
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardTwo
            features={[
              { title: "Advanced Analytics", description: "Gain deep insights into your data.", icon: Zap },
              { title: "Scalability", description: "Grow your business without limits.", icon: TrendingUp }
            ]}
            className="bg-blue-50 text-blue-900"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Get In Touch"
            title="Contact Us"
            description="Let's discuss how we can help your business with AI."
            inputPlaceholder="Your email address"
            buttonText="Subscribe"
            termsText="We respect your privacy. Unsubscribe at any time."
            imageSrc="https://images.pexels.com/photos/34234301/pexels-photo-34234301.png?auto=compress&cs=tinysrgb&h=650&w=940"
            className="bg-blue-50 text-blue-900"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: "Product", items: [ { label: "Features", href: "features" }, { label: "Pricing", href: "pricing" } ] },
              { title: "Company", items: [ { label: "About", href: "about" }, { label: "Careers", href: "careers" } ] }
            ]}
            className="bg-blue-50 text-blue-900"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
