"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface CatalogCategory {
  title: string;
  image: string;
  items: {
    name: string;
    models: string[];
  }[];
}

export default function CatalogsPage() {
  const [selectedCatalog, setSelectedCatalog] = useState<{
    title: string;
    models: string[];
  } | null>(null);

  const catalogCategories: CatalogCategory[] = [
    {
      title: "Clinical Analyzer",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&auto=format&fit=crop&q=80",
      items: [
        {
          name: "Clinical Chemistry Analyzer",
          models: ["Clinical Chemistry Analyzer AM-CA32", "Clinical Chemistry Analyzer AM-CA31"],
        },
      ],
    },
    {
      title: "Defibrillator",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&auto=format&fit=crop&q=80",
      items: [
        {
          name: "Automatic External Defibrillator",
          models: ["Automatic External Defibrillator AM-AED1", "Automatic External Defibrillator AM-AED2"],
        },
        {
          name: "Portable Biphasic Defibrillator",
          models: ["Portable Biphasic Defibrillator AM-PBD10"],
        },
      ],
    },
    {
      title: "Glucose meter",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&auto=format&fit=crop&q=80",
      items: [
        {
          name: "Glucose And Uric Acid Meter",
          models: ["Glucose And Uric Acid Meter AM-GM100"],
        },
      ],
    },
    {
      title: "Gram Stainer",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&auto=format&fit=crop&q=80",
      items: [
        {
          name: "Automated Gram Stainer",
          models: ["Automated Gram Stainer AM-GS50"],
        },
      ],
    },
    {
      title: "Head Light",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&auto=format&fit=crop&q=80",
      items: [
        {
          name: "Headband Light with Loupe",
          models: ["Headband Light with Loupe AM-HL20"],
        },
      ],
    },
    {
      title: "Hospital Beds",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=400&auto=format&fit=crop&q=80",
      items: [
        {
          name: "Electric Hospital Beds",
          models: ["Electric Hospital Bed AM-HB100"],
        },
        {
          name: "Manual Hospital Beds",
          models: ["Manual Hospital Bed AM-HB50"],
        },
      ],
    },
    {
      title: "Laryngoscope",
      image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=400&auto=format&fit=crop&q=80",
      items: [
        {
          name: "Fiber Optic Laryngoscope",
          models: ["Fiber Optic Laryngoscope AM-FOL1"],
        },
        {
          name: "Video Laryngoscope",
          models: ["Video Laryngoscope AM-VL80"],
        },
      ],
    },
    {
      title: "Medical Examination Lamp",
      image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=400&auto=format&fit=crop&q=80",
      items: [
        {
          name: "LED Medical Examination Lamp",
          models: ["LED Medical Examination Lamp AM-EL10"],
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen text-slate-900 relative">
      
      {/* Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200 py-4 px-6">
        <div className="mx-auto max-w-7xl flex flex-col gap-1 text-xs text-slate-500">
          <div>
            <Link href="/" className="hover:underline">Home</Link> <span className="mx-1">/</span> <span className="text-slate-900 font-medium">Catalogs</span>[cite: 5]
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl w-full px-6 py-10 flex flex-col gap-8">
        
        {/* Title Heading */}
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-emerald-700">
            Catalogs[cite: 5]
          </h1>
        </div>

        {/* Catalogs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {catalogCategories.map((cat, index) => (
            <div key={index} className="flex flex-col bg-white rounded-lg border border-slate-200/90 shadow-sm overflow-hidden">
              
              {/* Category Header */}
              <div className="bg-slate-50 border-b border-slate-200 py-2.5 px-4 text-center">
                <h3 className="text-xs font-bold text-teal-900">{cat.title}</h3>
              </div>

              {/* Image Preview */}
              <div className="relative h-36 w-full bg-white p-3 flex items-center justify-center">
                <Image src={cat.image} alt={cat.title} fill className="object-contain p-2" />
              </div>

              {/* Sub-item Buttons triggering Modal */}
              <div className="p-3 border-t border-slate-100 flex flex-col gap-1.5 mt-auto">
                {cat.items.map((subItem, subIdx) => (
                  <button
                    key={subIdx}
                    onClick={() => setSelectedCatalog({ title: subItem.name, models: subItem.models })}
                    className="w-full text-center text-[11px] font-medium text-slate-700 bg-slate-50 hover:bg-teal-50 hover:text-teal-900 border border-slate-200/80 rounded py-1.5 px-2 transition cursor-pointer"
                  >
                    {subItem.name}
                  </button>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* MODAL POPUP */}
      {selectedCatalog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-150">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
              <h3 className="text-sm font-bold text-teal-900">{selectedCatalog.title}</h3>
              <button 
                onClick={() => setSelectedCatalog(null)}
                className="h-7 w-7 rounded-full bg-slate-200/80 hover:bg-slate-300 flex items-center justify-center text-slate-700 text-xs font-bold transition"
              >
                ✕
              </button>
            </div>

            {/* Modal Body / Download Links */}
            <div className="p-6 flex flex-col gap-3">
              {selectedCatalog.models.map((model, idx) => (
                <a
                  key={idx}
                  href={`#download-${model}`}
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`Downloading catalog for: ${model}`);
                  }}
                  className="flex items-center justify-between w-full p-3 rounded-lg border border-teal-600/30 bg-teal-50/30 hover:bg-teal-50 text-teal-900 font-semibold text-xs transition group"
                >
                  <span>{model}</span>
                  <span className="text-teal-600 group-hover:translate-y-0.5 transition">📥</span>
                </a>
              ))}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}