"use client";

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
import { Award, Calculator, Car, CheckCircle, CreditCard, DollarSign, Handshake, Heart, MessageSquare, Phone, RefreshCw, Search, Shield, Sparkles, Star, TrendingUp, Users, Zap } from "lucide-react";

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
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Inventory", id: "product" },
            { name: "About", id: "about" },
            { name: "Features", id: "feature" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="AutoElite Motors"
          button={{
            text: "Shop Now",
            href: "product"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Premium Luxury Cars"
          description="Discover exceptional vehicles from the world's most prestigious brands. Each car is carefully selected and thoroughly inspected to meet our premium standards."
          tag="Luxury Collection"
          tagIcon={Star}
          buttons={[
            { text: "Explore Inventory", href: "product" },
            { text: "Schedule Visit", href: "contact" }
          ]}
          imageSrc={heroImage.url}
          imageAlt={heroImage.alt}
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Excellence in Automotive Retail"
          description="With decades of experience, we're committed to providing an exceptional car buying experience that exceeds expectations at every touchpoint."
          tag="Our Commitment"
          tagIcon={Shield}
          bulletPoints={[
            {
              title: "Certified Quality",
              description: "Every vehicle undergoes rigorous multi-point inspection and comes with comprehensive history documentation",
              icon: CheckCircle
            },
            {
              title: "Fair Pricing",
              description: "Transparent market-based pricing with no hidden fees and competitive trade-in valuations",
              icon: DollarSign
            },
            {
              title: "Expert Team",
              description: "Knowledgeable professionals with extensive automotive expertise and commitment to service excellence",
              icon: Users
            }
          ]}
          imageSrc={aboutImage.url}
          imageAlt={aboutImage.alt}
          imagePosition="left"
          buttons={[
            { text: "View Collection", href: "product" }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="Premium Car Buying Services"
          description="Comprehensive solutions designed to make your luxury car purchase seamless and worry-free"
          tag="Premium Services"
          tagIcon={Zap}
          features={[
            {
              title: "Luxury Financing",
              description: "Exclusive financing programs with premium rates and terms tailored for luxury vehicle purchases",
              icon: CreditCard
            },
            {
              title: "Premium Inspection",
              description: "Comprehensive 150-point inspection covering all mechanical, electrical, and cosmetic aspects",
              icon: Search
            },
            {
              title: "Extended Protection",
              description: "Comprehensive warranty programs and protection plans designed for luxury vehicle ownership",
              icon: Shield
            },
            {
              title: "Trade Evaluation",
              description: "Professional appraisal service with market-leading valuations for your current vehicle",
              icon: RefreshCw
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Curated Luxury Collection"
          description="Hand-selected premium vehicles representing the finest in automotive engineering and design"
          tag="Exclusive Inventory"
          tagIcon={Car}
          products={[
            {
              id: "1",
              name: "Executive Sedan Collection",
              price: "$89,900",
              imageSrc: carSedanImage.url,
              imageAlt: carSedanImage.alt
            },
            {
              id: "2",
              name: "Luxury SUV Portfolio",
              price: "$124,700",
              imageSrc: carSuvImage.url,
              imageAlt: carSuvImage.alt
            },
            {
              id: "3",
              name: "Performance Sports Collection",
              price: "$189,500",
              imageSrc: carSportsImage.url,
              imageAlt: carSportsImage.alt
            }
          ]}
          buttons={[
            { text: "Browse Collection", href: "#inventory" }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Premium Financing Solutions"
          description="Exclusive financing options crafted for discerning luxury vehicle buyers"
          tag="Luxury Financing"
          tagIcon={Calculator}
          plans={[
            {
              id: "premium",
              badge: "Executive Choice",
              badgeIcon: Sparkles,
              price: "2.9% APR",
              subtitle: "Premium financing for luxury vehicle acquisitions",
              features: [
                "Up to 84 months luxury financing",
                "No prepayment penalties",
                "Expedited approval process",
                "Flexible payment structures"
              ],
              buttons: [
                { text: "Apply Now", href: "#financing" },
                { text: "Learn More", href: "#financing-details" }
              ]
            },
            {
              id: "elite",
              badge: "Elite Program",
              badgeIcon: Award,
              price: "1.9% APR",
              subtitle: "Exclusive program for qualified luxury buyers",
              features: [
                "Up to 96 months elite financing",
                "Lowest available premium rates",
                "VIP processing priority",
                "Complimentary extended warranty"
              ],
              buttons: [
                { text: "Get Qualified", href: "#elite-program" },
                { text: "Speak with Advisor", href: "contact" }
              ]
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Excellence in Numbers"
          description="Metrics that demonstrate our commitment to luxury automotive excellence"
          tag="Performance"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "5,200+",
              title: "Luxury Sales",
              description: "Premium vehicles delivered to discerning clients worldwide",
              icon: Car
            },
            {
              id: "2",
              value: "99.8%",
              title: "Client Satisfaction",
              description: "Exceptional satisfaction rating from luxury vehicle buyers",
              icon: Heart
            },
            {
              id: "3",
              value: "25+",
              title: "Years Excellence",
              description: "Decades of expertise in luxury automotive retail",
              icon: Award
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="Client Testimonials"
          description="Authentic experiences from our valued luxury vehicle clients"
          tag="Client Stories"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Executive Director",
              company: "Premium Consulting Group",
              rating: 5,
              imageSrc: testimonial1Image.url,
              imageAlt: testimonial1Image.alt
            },
            {
              id: "2",
              name: "Michael Thompson",
              role: "Investment Partner",
              company: "Elite Capital Partners",
              rating: 5,
              imageSrc: testimonial2Image.url,
              imageAlt: testimonial2Image.alt
            },
            {
              id: "3",
              name: "Victoria Harrison",
              role: "Managing Director",
              company: "Prestige Enterprises",
              rating: 5,
              imageSrc: testimonial3Image.url,
              imageAlt: testimonial3Image.alt
            },
            {
              id: "4",
              name: "James Rodriguez",
              role: "Senior Partner",
              company: "Elite Holdings LLC",
              rating: 5,
              imageSrc: testimonial4Image.url,
              imageAlt: testimonial4Image.alt
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Prestigious Brand Partners"
          description: "Representing the world's most coveted luxury automotive manufacturers"
          tag: "Premium Brands"
          tagIcon: {Handshake}
          logos: [
            hondaLogo.url,
            toyotaLogo.url,
            bmwLogo.url,
            mercedesLogo.url,
            audiLogo.url,
            fordLogo.url,
            nissanLogo.url
          ]
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Luxury Car Buying Questions"
          sideDescription="Everything you need to know about acquiring your luxury vehicle through AutoElite Motors"
          textPosition="left"
          faqs={[
            {
              id: "1",
              title: "What exclusive financing options are available?",
              content: "We offer premium financing solutions with rates starting at 1.9% APR for qualified buyers. Our luxury financing programs include terms up to 96 months with flexible down payment options tailored to your financial preferences."
            },
            {
              id: "2",
              title: "Do you provide luxury vehicle trade-in services?",
              content: "Yes, we offer comprehensive trade-in evaluation services with market-leading valuations. Our expert team provides detailed assessments and competitive offers that can be applied directly toward your new luxury vehicle purchase."
            },
            {
              id: "3",
              title: "What warranty protection is included?",
              content: "All luxury vehicles include comprehensive pre-delivery inspection documentation. We also offer extensive warranty programs and protection plans specifically designed for luxury vehicle ownership and peace of mind."
            },
            {
              id: "4",
              title: "How do I schedule a private viewing?",
              content: "Contact our luxury vehicle specialists to arrange a private viewing at your convenience. We encourage personalized consultations and test drives to ensure your complete satisfaction with your vehicle selection."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          tagIcon={Phone}
          title="Begin Your Luxury Car Journey"
          description="Connect with our luxury vehicle specialists to explore our exclusive inventory and discuss personalized financing solutions."
          inputPlaceholder="Enter your email address"
          buttonText="Request Consultation"
          termsText="By submitting, you consent to receive exclusive updates about our luxury inventory and special client opportunities."
          imageSrc={contactImage.url}
          imageAlt={contactImage.alt}
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="AutoElite Motors"
          columns={[
            {
              items: [
                { label: "Luxury Inventory", href: "product" },
                { label: "Premium Financing", href: "pricing" },
                { label: "Trade Appraisal", href: "#trade" }
              ]
            },
            {
              items: [
                { label: "About AutoElite", href: "about" },
                { label: "Our Specialists", href: "#team" },
                { label: "Client Reviews", href: "testimonial" }
              ]
            },
            {
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "Showroom Location", href: "#location" },
                { label: "Hours of Operation", href: "#hours" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}