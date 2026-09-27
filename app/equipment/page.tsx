import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Laboratory & Medical Equipment Catalog",
  description: "Explore Laboquest's comprehensive catalog of scientific instruments, refrigerators, freezers, ventilators, and medical devices.",
};

export default function EquipmentCatalogPage() {
  const products = [
    {
      id: "am-iva10",
      category: "Ventilators",
      name: "ICU Ventilator AM-IVA10",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&auto=format&fit=crop&q=80",
      specs: { "Tidal Volume": "20 to 2000 ml", "Pressure Range": "5 to 80 cmH₂O", "Respiratory Rate": "1 to 100 bpm" },
      rating: 5,
    },
    {
      id: "am-iva11",
      category: "Ventilators",
      name: "ICU Ventilator AM-IVA11",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&auto=format&fit=crop&q=80",
      specs: { "Tidal Volume": "50 ~ 1500 mL", "Pressure Range": "0 ~ 100 cmH₂O", "Respiratory Rate": "1 bpm ~ 90 bpm" },
      rating: 5,
    },
    {
      id: "am-oc32",
      category: "Oxygen Concentrators",
      name: "Portable Oxygen Concentrator AM-OC32",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=400&auto=format&fit=crop&q=80",
      specs: { "Oxygen Flow": "5 L/min", "Oxygen Concentration": "93% ± 3", "Power Supply": "AC/DC Operation" },
      rating: 5,
    },
    {
      id: "lab-ref-01",
      category: "Refrigerators & Freezers",
      name: "Pharmacy Refrigerator 4°C LF-R500",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&auto=format&fit=crop&q=80",
      specs: { "Capacity": "500 Liters", "Temp Range": "2°C to 8°C", "Controller": "Microprocessor" },
      rating: 5,
    },
    {
      id: "co2-inc-02",
      category: "Incubators",
      name: "CO2 Incubator Water Jacket CI-160",
      image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=400&auto=format&fit=crop&q=80",
      specs: { "Capacity": "160 Liters", "CO2 Range": "0 to 20%", "Temp Uniformity": "± 0.1°C" },
      rating: 5,
    },
    {
      id: "fd-bench-03",
      category: "Freeze Dryers",
      name: "Benchtop Freeze Dryer FD-10A",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&auto=format&fit=crop&q=80",
      specs: { "Condenser Temp": "-50°C", "Ice Condenser Capacity": "3L / 24h", "Display": "LCD Touchscreen" },
      rating: 5,
    },
  ];

  const categories = [
    "All Equipment",
    "Refrigerators & Freezers",
    "Incubators",
    "Freeze Dryers",
    "Ventilators",
    "Oxygen Concentrators",
    "Anesthesia Machines",
  ];

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen text-slate-900">
      


      <div className="mx-auto max-w-7xl w-full px-6 py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* SIDEBAR FILTERS */}
        <aside className="lg:col-span-1 space-y-6">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              {categories.map((cat, index) => (
                <li key={index}>
                  <button className={`w-full text-left px-3 py-2 rounded-lg transition ${index === 0 ? 'bg-teal-50 text-teal-800 font-semibold' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}>
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-teal-900 text-white p-5 rounded-xl shadow-md">
            <h4 className="font-bold text-base mb-2">Need Custom Equipment?</h4>
            <p className="text-xs text-teal-100 mb-4 leading-relaxed">
              We provide tailored solutions, bulk institutional pricing, and complete validation documentation (IQ/OQ/PQ).
            </p>
            <Link href="/quote" className="inline-block w-full text-center bg-white text-teal-900 text-xs font-semibold py-2.5 rounded-lg hover:bg-teal-50 transition">
              Request Custom Quote
            </Link>
          </div>
        </aside>

        {/* MAIN PRODUCT GRID */}
        <main className="lg:col-span-3 flex flex-col gap-6">
          
          {/* Controls Bar */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-sm text-slate-600 font-medium">Showing <strong className="text-slate-900">{products.length}</strong> results</span>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <input 
                type="text" 
                placeholder="Search equipment..." 
                className="w-full sm:w-64 text-sm border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:border-teal-600"
              />
              <select className="text-sm border border-slate-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:border-teal-600">
                <option>Sort by: Featured</option>
                <option>Model: A to Z</option>
              </select>
            </div>
          </div>

          {/* Grid Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((item) => (
              <div key={item.id} className="flex flex-col justify-between bg-white rounded-xl border border-slate-200/80 p-4 shadow-sm hover:shadow-md transition">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">{item.category}</span>
                    <span className="text-[10px] font-semibold text-orange-600 cursor-pointer">📄 Catalog</span>
                  </div>

                  <div className="relative h-40 w-full mb-3 bg-slate-50 rounded-lg overflow-hidden flex items-center justify-center">
                    <Image src={item.image} alt={item.name} fill className="object-contain p-2" />
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 mb-2">{item.name}</h4>

                  {/* Dynamic Specs List */}
                  <div className="text-[11px] text-slate-700 space-y-1 border-t border-b border-slate-100 py-2 mb-3">
                    {Object.entries(item.specs).map(([key, val], idx) => (
                      <div key={idx} className="flex justify-between">
                        <span className="text-slate-500">{key}:</span> 
                        <span className="font-medium text-right text-slate-800">{val}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-xs text-amber-500 mb-3">★★★★★</div>
                </div>

                <Link href="/quote" className="w-full text-center bg-slate-50 border border-slate-300 hover:bg-teal-50 hover:border-teal-300 text-slate-800 font-semibold text-xs py-2 rounded-lg transition flex items-center justify-center gap-1">
                  🔒 Get Quote
                </Link>
              </div>
            ))}
          </div>

        </main>

      </div>
    </div>
  );
}