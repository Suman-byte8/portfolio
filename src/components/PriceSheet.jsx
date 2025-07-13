import React from "react";

const packages = [
  {
    type: "Static Business Website",
    features: [
      "3–5 pages (Home, About, Services, Contact)",
      "Mobile responsive",
      "Contact form integration",
    ],
    price: "₹2,500 – ₹5,000",
  },
  {
    type: "Portfolio / Resume Site",
    features: [
      "Personal brand / Resume website",
      "Responsive layout",
      "Social media & contact links",
    ],
    price: "₹2,000 – ₹4,000",
  },
  {
    type: "Blog Website",
    features: [
      "Simple blog section",
      "Post structure and categories",
      "Comment system (optional)",
    ],
    price: "₹4,000 – ₹8,000",
  },
  {
    type: "Business Website with Backend",
    features: [
      "Admin dashboard (basic)",
      "Dynamic content (Node.js + MongoDB)",
      "Responsive design",
    ],
    price: "₹6,000 – ₹12,000",
  },
  {
    type: "eCommerce Website (Basic)",
    features: [
      "Product listing & detail page",
      "Add to cart (optional)",
      "Admin dashboard for product upload",
    ],
    price: "₹7,000 – ₹15,000",
  },
  {
    type: "eCommerce Website (Full)",
    features: [
      "All features + payment gateway",
      "Order tracking",
      "User account system",
      "MongoDB backend",
    ],
    price: "₹15,000 – ₹30,000",
  },
  {
    type: "Shopify Website Design",
    features: [
      "Theme setup & customization",
      "Product page, branding, and SEO",
      "Payment & shipping config",
      "Domain linking support",
    ],
    price: "₹6,000 – ₹25,000",
  },
];

const PriceSheet = () => {
  return (
    <div className="min-h-screen  text-white pb-8 px-6 md:px-20">
      <div className="max-w-5xl mx-auto"> 
        <h2 className="text-2xl font-semibold mt-10 mb-4">Website Development Packages</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-[#1d1d1d] p-5 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">{pkg.type}</h3>
              <ul className="list-disc list-inside text-sm text-gray-300 mb-2">
                {pkg.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <p className="text-green-400 font-semibold">{pkg.price}</p>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default PriceSheet;
