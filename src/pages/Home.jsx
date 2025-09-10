import {
  AboutSection,
  ContactSection,
  HeroSection,
  PropertiesSection,
  QueriesSection,
} from "../sections";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <>
        {/* ✅ Primary Meta */}
        <title>Bluezone Realty | Modern Homes & Real Estate Solutions</title>
        <meta
          name="title"
          content="Bluezone Realty | Modern Homes & Real Estate Solutions"
        />
        <meta
          name="description"
          content="Spacious 3BHK villas for sale in Mudichur, Chennai – 9 bedrooms, 9 bathrooms, 5300 sq.ft. total area, high rental yield, covered car parking. Ideal for investment."
        />
        <meta
          name="keywords"
          content="Mudichur, Varadharajapuram, Vandalur, Urapakkam, Tambaram, Perungalathur, Mannivakkam, Kilambakkam, Irandankattalai, Oragadam Industrial Corridor, Guindy Industrial Estate, Sriperumbudur, Chennai, South Chennai, West Chennai, outskirts of Chennai, Chennai-Bangalore Highway (NH-48)"
        />

        <meta
          name="keywords"
          content="3BHK, Villa, Independent House, Penthouse, Duplex, Flat, Apartment, Residential Property, Luxury Homes, Spacious Villas, Ready to Move Homes, Investment Properties, Joint Family Homes, Guest House, Paying Guest (PG), Residential Plots"
        />

        <meta
          name="keywords"
          content="House for Sale, Villas for Sale, Buy Property, Real Estate Listings, Verified Properties, Trusted Builders, CMDA Approved, High Rental Potential, Ideal for Investment, Premium Property, Certified Properties, Affordable Homes, Fast Growing Suburbs, Popular Locations"
        />

        <meta
          name="keywords"
          content="5300 sqft, 4000 sqft, 3000 sqft, 2000 sqft, 1000 sqft, Built-Up Area, Sq.ft, Sqft, sft, 54 sqm, 400 ft frontage"
        />

        <meta
          name="keywords"
          content="Price Range, Lakhs, Lacs, Crores, Value for Money, Best Price, Contact for Price"
        />

        <meta
          name="keywords"
          content="TMG College of Arts and Science, Sri Sairam Engineering College, SIVET College, Madras Christian College (MCC), Dhaanish Ahmed College of Engineering, Global Vidyashram, Ravindra Bharathi Global School, Narayana e-Techno School, Prince Nursery and Primary School, Mrs Academy, Team Educational Institute, Techentive Academy, PERI Education, Bharath Institute of Science & Technology, Kidzee, Shri Natesan Vidyasala, St. Joseph’s Nursery and Primary School, Meera Nagar, Amudham Nagar Park, Amma Park, Sakthi Nagar Park, Apollo Tyres, Renault-Nissan, Daimler, Madras Export Processing Zone (MEPZ), SIDCO Women Industrial Park"
        />
        <meta name="author" content="Bluezone Realty" />
        <meta name="robots" content="index, follow" />

        {/* ✅ Open Graph (for Facebook, Instagram, LinkedIn, Website previews) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bluezonerealty.in/" />
        <meta
          property="og:title"
          content="Bluezone Realty | Modern Homes & Real Estate Solutions"
        />
        <meta
          property="og:description"
          content="At Bluezone Realty, we believe a home is more than just walls and a roof — it’s the foundation of your future. Explore modern, high-quality houses built for today’s families."
        />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/bluezonerealty/landingpage/images/villa-in-mudichur/630235257O-1754651679423.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Bluezone Realty" />
        <meta property="og:locale" content="en_IN" />
      </>

      <HeroSection />
      <PropertiesSection />
      <AboutSection />
      <ContactSection />
      <QueriesSection />
    </main>
  );
};

export default Home;
