"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Calculator, Car, CheckCircle, CreditCard, DollarSign, Handshake, Heart, MessageSquare, Phone, RefreshCw, Search, Shield, Sparkles, Star, TrendingUp, Users } from "lucide-react";

const assetMap: { id: string; url: string; alt?: string }[] = [
  {"id":"hero-cars","url":"https://images.pexels.com/photos/18108314/pexels-photo-18108314.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Sleek luxury cars showcased in a stylish, modern automotive dealership."},
  {"id":"about-image","url":"https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Engineers collaborating on a car project in a modern automotive workshop using advanced technology."},
  {"id":"feature-financing","url":"https://images.pexels.com/photos/8441784/pexels-photo-8441784.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Two professionals engaging in a business meeting, signing documents for a consulting agreement."},
  {"id":"feature-inspection","url":"https://images.pexels.com/photos/8986137/pexels-photo-8986137.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of car's undercarriage in a service station for repair and maintenance."},
  {"id":"feature-warranty","url":"https://images.pexels.com/photos/7785085/pexels-photo-7785085.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Reflective image of a Tustin police car parked outdoors with an American flag emblem."},
  {"id":"car-sedan-luxury","url":"https://images.pexels.com/photos/3541743/pexels-photo-3541743.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Sleek black luxury car parked outdoors under a modern urban bridge in Sacramento."},
  {"id":"car-suv-family","url":"https://images.pexels.com/photos/27497542/pexels-photo-27497542.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A white SUV parked on a rural road with rustic village houses in the background."},
  {"id":"car-sports-red","url":"https://images.pexels.com/photos/17623967/pexels-photo-17623967.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Red luxury sports car with doors and trunk open, parked outdoors."},
  {"id":"testimonial-1","url":"https://images.pexels.com/photos/7144185/pexels-photo-7144185.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Smiling woman holding car key in dealership showroom next to new vehicle."},
  {"id":"testimonial-2","url":"https://images.pexels.com/photos/3783546/pexels-photo-3783546.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"From below of delighted aged male entrepreneur in classy outfit standing on street and speaking on cellphone while laughing and looking away"},
  {"id":"testimonial-3","url":"https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Confident businesswoman using her tablet and phone, smiling outdoors in sunlight."},
  {"id":"testimonial-4","url":"https://images.pexels.com/photos/11683965/pexels-photo-11683965.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Elderly man smiling indoors at a shoe store with vibrant lighting."},
  {"id":"honda-logo","url":"https://images.pexels.com/photos/6894433/pexels-photo-6894433.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Blue Honda Civic parked in a lush, green setting in Hørsholm, Denmark."},
  {"id":"toyota-logo","url":"https://images.pexels.com/photos/17357680/pexels-photo-17357680.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Detailed image of a shiny silver Toyota emblem on a vehicle's surface."},
  {"id":"bmw-logo","url":"https://images.pexels.com/photos/18234150/pexels-photo-18234150.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Detail shot of a Ford car hood showcasing the logo and reflections on the glossy surface."},
  {"id":"mercedes-logo","url":"https://images.pexels.com/photos/104372/pexels-photo-104372.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Elegant Mercedes Benz logo on a tall sign with a bright blue sky background."},
  {"id":"audi-logo","url":"https://images.pexels.com/photos/168938/pexels-photo-168938.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of a rain-covered Audi car grille showcasing luxury and elegance under cloudy skies."},
  {"id":"ford-logo","url":"https://images.pexels.com/photos/18234150/pexels-photo-18234150.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Detail shot of a Ford car hood showcasing the logo and reflections on the glossy surface."},
  {"id":"nissan-logo","url":"https://images.pexels.com/photos/6894434/pexels-photo-6894434.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Dynamic shot of a blue Nissan Skyline GTR parked in a sleek indoor garage."},
  {"id":"contact-showroom","url":"https://images.pexels.com/photos/376674/pexels-photo-376674.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A stylish Lexus sedan showcased in a black and white indoor setting, highlighting its luxury design."}
];

export default function Home() {
  const resolveAsset = (assetId: string) => {
    const _a = assetMap.find(a => a.id === assetId);
    return {
      url: _a?.url ?? "/public/images/placeholder.webp",
      alt: _a?.alt ?? "Decorative image"
    };
  };

  const heroImage = resolveAsset("hero-cars");
  const aboutImage = resolveAsset("about-image");
  const carSedanImage = resolveAsset("car-sedan-luxury");
  const carSuvImage = resolveAsset("car-suv-family");
  const carSportsImage = resolveAsset("car-sports-red");
  const testimonial1Image = resolveAsset("testimonial-1");
  const testimonial2Image = resolveAsset("testimonial-2");
  const testimonial3Image = resolveAsset("testimonial-3");
  const testimonial4Image = resolveAsset("testimonial-4");
  const hondaLogo = resolveAsset("honda-logo");
  const toyotaLogo = resolveAsset("toyota-logo");
  const bmwLogo = resolveAsset("bmw-logo");
  const mercedesLogo = resolveAsset("mercedes-logo");
  const audiLogo = resolveAsset("audi-logo");
  const fordLogo = resolveAsset("ford-logo");
  const nissanLogo = resolveAsset("nissan-logo");
  const contactImage = resolveAsset("contact-showroom");

  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Inventory", id: "product" },
            { name: "About", id: "about" },
            { name: "Features", id: "feature" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="AutoElite"
          button={{
            text: "View Cars",
            href: "product"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Find Your Perfect Car"
          description="Discover premium vehicles from trusted dealers. Quality guaranteed, financing available, and exceptional service every step of the way."
          tag="Premium Selection"
          tagIcon={Star}
          buttons={[
            { text: "Browse Inventory", href: "product" },
            { text: "Learn More", href: "about" }
          ]}
          imageSrc={heroImage.url}
          imageAlt={heroImage.alt}
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Why Choose AutoElite"
          description="We're dedicated to helping you find the perfect vehicle that matches your lifestyle and budget."
          tag="About Us"
          tagIcon={Shield}
          bulletPoints={[
            {
              title: "Quality Guaranteed",
              description: "Every vehicle undergoes thorough inspection and comes with detailed history reports",
              icon: CheckCircle
            },
            {
              title: "Competitive Pricing",
              description: "Fair market prices with transparent pricing and no hidden fees",
              icon: DollarSign
            },
            {
              title: "Expert Service",
              description: "Professional team with years of experience in automotive sales",
              icon: Users
            }
          ]}
          imageSrc={aboutImage.url}
          imageAlt={aboutImage.alt}
          imagePosition="left"
          buttons={[
            { text: "View Inventory", href: "product" }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="Complete Car Buying Experience"
          description="Everything you need to make your car purchase smooth and worry-free"
          tag="Services"
          tagIcon={Sparkles}
          features={[
            {
              title: "Flexible Financing",
              description: "Multiple financing options with competitive rates and flexible terms to fit your budget",
              icon: CreditCard
            },
            {
              title: "Professional Inspection",
              description: "Comprehensive multi-point inspection ensures quality and reliability of every vehicle",
              icon: Search
            },
            {
              title: "Extended Warranty",
              description: "Optional extended warranty plans to protect your investment and provide peace of mind",
              icon: Shield
            },
            {
              title: "Trade-In Service",
              description: "Get competitive value for your current vehicle with our hassle-free trade-in process",
              icon: RefreshCw
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Featured Vehicles"
          description="Explore our handpicked selection of premium vehicles"
          tag="Inventory"
          tagIcon={Car}
          products={[
            {
              id: "1",
              name: "Luxury Sedan Elite",
              price: "$45,900",
              imageSrc: carSedanImage.url,
              imageAlt: carSedanImage.alt
            },
            {
              id: "2",
              name: "Family SUV Premium",
              price: "$52,700",
              imageSrc: carSuvImage.url,
              imageAlt: carSuvImage.alt
            },
            {
              id: "3",
              name: "Sports Convertible",
              price: "$68,500",
              imageSrc: carSportsImage.url,
              imageAlt: carSportsImage.alt
            }
          ]}
          buttons={[
            { text: "View All Cars", href: "#inventory" }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Financing Options"
          description="Choose the financing plan that works best for you"
          tag="Financing"
          tagIcon={Calculator}
          plans={[
            {
              id: "standard",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "3.9% APR",
              subtitle: "Standard financing with competitive rates",
              features: [
                "Up to 72 months financing",
                "No prepayment penalties",
                "Quick approval process",
                "Flexible down payment"
              ],
              buttons: [
                { text: "Apply Now", href: "#financing" },
                { text: "Learn More", href: "#financing-info" }
              ]
            },
            {
              id: "premium",
              badge: "Best Value",
              badgeIcon: Award,
              price: "2.9% APR",
              subtitle: "Premium financing for qualified buyers",
              features: [
                "Up to 84 months financing",
                "Lowest available rates",
                "Priority processing",
                "Extended warranty included"
              ],
              buttons: [
                { text: "Get Qualified", href: "#premium-financing" },
                { text: "Contact Us", href: "contact" }
              ]
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Our Track Record"
          description="Numbers that showcase our commitment to excellence"
          tag="Results"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "2,500+",
              title: "Cars Sold",
              description: "Happy customers driving away with their dream cars",
              icon: Car
            },
            {
              id: "2",
              value: "98%",
              title: "Satisfaction",
              description: "Customer satisfaction rating based on reviews",
              icon: Heart
            },
            {
              id: "3",
              value: "15+",
              title: "Years Experience",
              description: "Serving the community with automotive expertise",
              icon: Award
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real experiences from satisfied customers"
          tag="Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Marketing Director",
              company: "TechCorp Solutions",
              rating: 5,
              imageSrc: testimonial1Image.url,
              imageAlt: testimonial1Image.alt
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Business Owner",
              company: "Chen Consulting",
              rating: 5,
              imageSrc: testimonial2Image.url,
              imageAlt: testimonial2Image.alt
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Project Manager",
              company: "InnovateFlow",
              rating: 5,
              imageSrc: testimonial3Image.url,
              imageAlt: testimonial3Image.alt
            },
            {
              id: "4",
              name: "David Thompson",
              role: "Operations Manager",
              company: "GrowthPoint LLC",
              rating: 5,
              imageSrc: testimonial4Image.url,
              imageAlt: testimonial4Image.alt
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted Automotive Brands"
          description="We work with the industry's most reputable manufacturers"
          tag="Partners"
          tagIcon={Handshake}
          logos={[
            hondaLogo.url,
            toyotaLogo.url,
            bmwLogo.url,
            mercedesLogo.url,
            audiLogo.url,
            fordLogo.url,
            nissanLogo.url
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about buying from AutoElite"
          textPosition="left"
          faqs={[
            {
              id: "1",
              title: "What financing options do you offer?",
              content: "We offer competitive financing with rates starting at 2.9% APR for qualified buyers. Terms range from 36 to 84 months with flexible down payment options."
            },
            {
              id: "2",
              title: "Do you accept trade-ins?",
              content: "Yes, we accept trade-ins and offer competitive market value. Our team will evaluate your vehicle and provide a fair quote that can be applied toward your new purchase."
            },
            {
              id: "3",
              title: "What warranty do you provide?",
              content: "All our vehicles come with a comprehensive inspection report. We also offer extended warranty options for additional peace of mind and protection."
            },
            {
              id: "4",
              title: "Can I schedule a test drive?",
              content: "Absolutely! Contact us to schedule a test drive at your convenience. We encourage all customers to experience the vehicle before making a decision."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          tagIcon={Phone}
          title="Ready to Find Your Perfect Car?"
          description="Contact us today to schedule a test drive or get more information about our inventory and financing options."
          inputPlaceholder="Enter your email"
          buttonText="Get Quote"
          termsText="By submitting, you agree to receive updates about our inventory and special offers."
          imageSrc={contactImage.url}
          imageAlt={contactImage.alt}
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="AutoElite"
          columns={[
            {
              items: [
                { label: "Inventory", href: "product" },
                { label: "Financing", href: "pricing" },
                { label: "Trade-In", href: "#trade" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Team", href: "#team" },
                { label: "Reviews", href: "testimonial" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "Location", href: "#location" },
                { label: "Hours", href: "#hours" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}