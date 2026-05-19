// app/groceries/campaign/page.tsx
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  display: "swap",
});

export default function CampaignPage() {
  return (
    <main className="p-8">

      <h1 className={`${playfair.className} text-4xl`} >
        Summer Fresh Produce
      </h1>

      {/* 2. The Image Issue (Massive 5MB image from an external CMS) */}
      <div className="campaign-banner">
        <Image 
          src="https://svs.gsfc.nasa.gov/vis/a020000/a020300/a020326/frames/3840x2160_16x9_30p/Slew_to_Pegasus_Attitude/OrexModel.115728.png" 
          alt="Fresh summer fruits basket" 
          width={1200}
          height={800}
          unoptimized
          priority
        />
      </div>

       <p className="mt-4 mb-8 text-gray-700">
        Discover our hand-picked selection of summer fruits, sourced directly from local farms.
      </p>

    </main>
  );
}

// Problem 4

// Your Mission

// Refactor this page using Next.js native optimization components to fix the Core Web Vitals.

// Fix the Font: Use next/font/google to load the "Playfair Display" font. How does this prevent the Flash of Unstyled Text (FOUT)?

// Fix the Image: Replace the standard <img> tag with Next.js's <Image> component.

// Configure the image so it doesn't cause Cumulative Layout Shift (CLS) (the "janky" text pushing).

// Ensure it is prioritized for loading since it is a large hero banner above the fold (crucial for LCP).