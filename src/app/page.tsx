"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import { Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="mediumLarge"
        sizing="largeSizeMediumTitles"
        background="none"
        cardStyle="subtle-shadow"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Shop",
          id: "products",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Jamala"
      button={{
        text: "Order Now",
        href: "#contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="Jamala"
      description="Artisan floral arrangements crafted with love and nature's finest blooms for your most precious moments."
      buttons={[
        {
          text: "Browse Collection",
          href: "#products",
        },
        {
          text: "Contact Us",
          href: "#contact",
        },
      ]}
      imageSrc="https://pixabay.com/get/g9d292b537f469276545f1a3ebf0fcdbb24ad742a9723b34030fe92ccfca7b9231464c0ae16bea1dc6d76b8c808fa714021ed3e3a42828b9600a7ad456c1c183a_1280.jpg"
      imageAlt="elegant floral studio atmosphere"
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="Our Story"
      title="Bringing Nature Home"
      description="At Jamala, we believe flowers are more than decoration; they are a language of emotion. Our studio sources only the freshest stems to create bespoke arrangements."
      subdescription="Every bloom tells a story. From seasonal hand-tied bouquets to custom event installations, we pour passion into every petal."
      icon={Sparkles}
      imageSrc="https://pixabay.com/get/g48591a719174f32a2568e75a98a1ba83690656c7355ea92940abde4f46ff8b1446311861aa4f3cc78a20d258fcdbb97f3599ee01fa849b076deec1567a052814_1280.jpg"
      imageAlt="florist arranging flowers in studio"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Classic Rose Elegance",
          price: "$65.00",
          imageSrc: "https://pixabay.com/get/g91d9d2168b95d97127a783621f1b38b140684c136379ad1186a1e469133deb12a234d5d8cf6c601db3161b509dd47150ee975d719e845b1aa2c3556e5fdd6895_1280.jpg",
        },
        {
          id: "2",
          name: "Peony Perfection",
          price: "$85.00",
          imageSrc: "https://pixabay.com/get/g93a332ea0ee8645821ce0a001277af179b83135082ac6354e238c0c89ffb731a6b4635df198fffe2ca7d4e4baacfdf3bdb6476fb359daa7c4eaed1ffdb0157d9_1280.jpg",
        },
        {
          id: "3",
          name: "Spring Tulip Joy",
          price: "$55.00",
          imageSrc: "https://pixabay.com/get/g026ba5891376c87b54b32329eb7f1992f87d69c3f9d4c1cf32088b1a4e0535e5acb3dcd1d42d3033e4914f3c3b7b6bfdb71d92b22b190c944ec8dc7a1958ed10_1280.jpg",
        },
        {
          id: "4",
          name: "Hydrangea Dream",
          price: "$75.00",
          imageSrc: "https://pixabay.com/get/g07828af22cf99cfe54425774e9a755a3a17b87d6f82221ba7a642ee92c7a613f7bbc11a831df7e892a850ea145b01627bcd25831c9b436d524a7768ebad194c3_1280.jpg",
        },
        {
          id: "5",
          name: "Lily & Rose Luxe",
          price: "$95.00",
          imageSrc: "https://pixabay.com/get/g47bc84bb9c508de174b82716423f535a483e464bd42473b39bb74f9f6fd72d5aa05b4cc598c245abc2d3a0664bb3e22bda1a4226c2da2648c507c4a8516f3d8d_1280.jpg",
        },
        {
          id: "6",
          name: "Wild Meadow Bloom",
          price: "$45.00",
          imageSrc: "https://pixabay.com/get/g5d1552987aab9e733a4d2f957174426b9546cd04b9f77f0b5eccb1c29d0b7fa33064f2f144ea4fc3c000327c56a7262af84dbb446987fe914da8a41ad2154b2c_1280.jpg",
        },
      ]}
      title="Our Floral Creations"
      description="Hand-curated bouquets perfect for gifts, weddings, and special events."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Anna S.",
          role: "Wedding Client",
          company: "Local Event",
          rating: 5,
          imageSrc: "https://pixabay.com/get/ga28f012da2eb4ee2c83b5060620ff379d21452db8693fd09d9c02f6ffc9e8ee70a526cf89321ca224207c3699c3267c22436ff356981180db3a31fb87b102277_1280.jpg",
        },
        {
          id: "2",
          name: "Marcus L.",
          role: "Subscriber",
          company: "Corporate Office",
          rating: 5,
          imageSrc: "https://pixabay.com/get/gbfe235f2e137f702011a430f4c15fc89ca7d4bb10518571729790a40a3c521b786a7002a809e628378377fd8cd6d46881abd216a2474fa452227be79b1ea7b20_1280.jpg",
        },
        {
          id: "3",
          name: "Sarah P.",
          role: "Gift Recipient",
          company: "Birthday Celebration",
          rating: 5,
          imageSrc: "https://pixabay.com/get/g22ef845ea6cc749570784b4aec1ffcc26aeab8f4e76918ba526556a63e696013c7c34edbb8358f915da563815ac1141ca8912abcc3b35d5e0c855e0a938e36d4_1280.jpg",
        },
        {
          id: "4",
          name: "David W.",
          role: "Anniversary",
          company: "Personal",
          rating: 5,
          imageSrc: "https://pixabay.com/get/gbce28d05141f1481e1de8fb1abbdee52535265b0ddb3c267185ba4b3b800921268ce111f3b220fb736c4a0b3a5936bfa19637dad8aaa845111a0f8abf1650141_1280.jpg",
        },
        {
          id: "5",
          name: "Elena R.",
          role: "Bride",
          company: "Wedding",
          rating: 5,
          imageSrc: "https://pixabay.com/get/g4115423389021883702da86d09596f3c9e558667366cf98cb3cf7d1d564e4bd21999aad1c0b0b4ef82881f202c4612931043466789d21313bdc72ac16526b3fb_1280.jpg",
        },
      ]}
      kpiItems={[
        {
          value: "500+",
          label: "Bouquets Delivered",
        },
        {
          value: "100%",
          label: "Fresh Stems",
        },
        {
          value: "4.9/5",
          label: "Avg Rating",
        },
      ]}
      title="Blooming Reviews"
      description="See why our clients choose Jamala for their special occasions."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Get in Touch"
      description="Have a custom order or need advice on which bouquet to choose? We're here to help."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Email Address",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Tell us about your floral needs...",
        rows: 4,
        required: true,
      }}
      imageSrc="https://pixabay.com/get/ga1d7d0d92fe2b76a3711c9eac0ffa963a9afd1be112fa5b38bd3a5f5ed1ab95054b9e2ae44818406638c1f76ed1ef6b8c97efc57df28dd54dc0bef1dc936d635_1280.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Shop Flowers",
              href: "#products",
            },
            {
              label: "FAQ",
              href: "#",
            },
          ],
        },
        {
          items: [
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Jamala"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
