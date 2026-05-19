// app/groceries/campaign/page.tsx

export default function CampaignPage() {
  return (
    <main className="p-8">
      {/* 1. The Font Issue */}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&display=swap" rel="stylesheet" />
      </head>

      <h1 className="text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>
        Summer Fresh Produce
      </h1>

      <p className="mt-4 mb-8 text-gray-700">
        Discover our hand-picked selection of summer fruits, sourced directly from local farms.
      </p>

      {/* 2. The Image Issue (Massive 5MB image from an external CMS) */}
      <div className="campaign-banner">
        <img 
          src="https://svs.gsfc.nasa.gov/vis/a020000/a020300/a020326/frames/3840x2160_16x9_30p/Slew_to_Pegasus_Attitude/OrexModel.115728.png" 
          alt="Fresh summer fruits basket" 
        />
      </div>

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