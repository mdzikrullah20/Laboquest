import Link from "next/link";
import Image from "next/image";

export default function LabHome() {
  return (
    <div className="flex flex-col bg-slate-50 text-slate-900">
      
      {/* HERO SECTION */}
      <section className="relative flex min-h-[85vh] items-center justify-center bg-slate-950 px-6 text-white overflow-hidden">
        
        {/* Ambient Glow Background */}
        <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
          <div className="w-[500px] h-[500px] bg-gradient-to-tr from-teal-500/10 via-blue-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute inset-0 opacity-15 mix-blend-overlay">
            <Image
              src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1600&auto=format&fit=crop&q=80"
              alt="Laboratory Background"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          
          <div className="inline-flex items-center gap-2 rounded-full bg-teal-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-300 border border-teal-400/30 backdrop-blur-md shadow-[0_0_15px_rgba(20,184,166,0.2)]">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping"></span>
            ISO 9001:2015 & CE-Certified Lab Solutions
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-white via-slate-100 to-teal-200 bg-clip-text text-transparent leading-[1.15]">
            Precision Laboratory Equipment & Scientific Instruments
          </h1>

          <p className="max-w-2xl text-lg text-slate-300 font-normal leading-relaxed">
            Empowering research, diagnostic testing, and healthcare with high-accuracy refrigerators, freezers, incubators, and medical apparatus.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/equipment"
              className="rounded-lg bg-teal-600 px-7 py-3.5 text-sm font-semibold tracking-wide text-white shadow-lg shadow-teal-900/30 transition hover:bg-teal-500 hover:scale-[1.02]"
            >
              Browse Lab Equipment
            </Link>

            <Link
              href="/quote"
              className="rounded-lg border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold tracking-wide text-white backdrop-blur-md transition hover:bg-white/10 hover:border-white/40"
            >
              Request Institutional Quote
            </Link>
          </div>
        </div>
      </section>

      {/* COMPANY OVERVIEW SECTION */}
      <section className="py-20 px-6 bg-white border-b border-slate-200/60">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl leading-snug">
            Reliable Tools for Scientific Discovery & Healthcare
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed font-normal">
            Laboquest delivers state-of-the-art laboratory machinery and consumables designed for research institutions, biotechnology firms, clinical diagnostic labs, and healthcare facilities worldwide. Every instrument meets strict international quality and safety benchmarks.
          </p>
        </div>
      </section>

      {/* CORE LABORATORY CATEGORIES */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Core Laboratory Categories
            </h2>
            <p className="mt-3 text-slate-600 text-base">
              Explore our extensive range of high-performance scientific devices and apparatus
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            
            {/* Category 1: Refrigerators & Freezers */}
            <div className="group overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-200/80 transition duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&auto=format&fit=crop&q=80"
                  alt="Laboratory Refrigerators"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-950">Refrigerators & Freezers</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Advanced laboratory refrigerators, blood bank units, and ultra-low temperature freezers for safe sample preservation.
                </p>
                <Link href="/equipment" className="mt-5 inline-flex items-center text-sm font-semibold text-teal-600 hover:text-teal-700">
                  View Models &rarr;
                </Link>
              </div>
            </div>

            {/* Category 2: Incubators */}
            <div className="group overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-200/80 transition duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=600&auto=format&fit=crop&q=80"
                  alt="Incubators"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-950">Incubators & Thermal Control</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  CO2 incubators, drying ovens, and precision thermal units providing ultra-stable environment settings.
                </p>
                <Link href="/equipment" className="mt-5 inline-flex items-center text-sm font-semibold text-teal-600 hover:text-teal-700">
                  View Models &rarr;
                </Link>
              </div>
            </div>

            {/* Category 3: Freeze Dryers */}
            <div className="group overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-200/80 transition duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&auto=format&fit=crop&q=80"
                  alt="Freeze Dryers"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-950">Freeze Dryers & Lyophilizers</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  High-efficiency benchtop and pilot freeze dryers engineered for reliable sample dehydration and processing.
                </p>
                <Link href="/equipment" className="mt-5 inline-flex items-center text-sm font-semibold text-teal-600 hover:text-teal-700">
                  View Models &rarr;
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- NEW SECTION: MEDICAL EQUIPMENT CATEGORIES GRID (Ref: Image 1) --- */}
      <section className="py-20 px-6 bg-slate-100/70 border-t border-slate-200">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-emerald-700 sm:text-4xl">
            Medical Equipment
          </h2>
          <p className="mt-4 max-w-4xl mx-auto text-sm text-slate-600 leading-relaxed">
            Medical equipment is designed with advanced technology to meet the diverse needs of medical professionals. We offer a range of medical equipment including Ventilators, Oxygen Concentrators, Colposcopes, Wheelchairs, Anesthesia Machines. These devices meet strict electrical and mechanical safety standards set by regulatory bodies like the FDA and CE. They are built for mobility, allowing easy movement within healthcare settings. Our medical equipment is ideal for clinics, hospitals, diagnostic centers, and other healthcare facilities.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {[
              { name: "Anesthesia Machines", img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&auto=format&fit=crop&q=80" },
              { name: "Automated Blood Analyzer", img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&auto=format&fit=crop&q=80" },
              { name: "Autopsy Table", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&auto=format&fit=crop&q=80" },
              { name: "Baby Bed Trolley", img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=400&auto=format&fit=crop&q=80" },
              { name: "Blood Gas Analyzer", img: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=400&auto=format&fit=crop&q=80" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col bg-white rounded-xl p-4 border border-slate-200 shadow-sm transition hover:shadow-md">
                <div className="relative h-36 w-full mb-4 bg-slate-50 rounded-lg overflow-hidden flex items-center justify-center">
                  <Image src={item.img} alt={item.name} fill className="object-contain p-2" />
                </div>
                <div className="mt-auto border border-blue-200 bg-blue-50/40 py-2.5 px-2 rounded-md text-center">
                  <span className="text-xs font-bold text-slate-900">{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NEW SECTION: FEATURED PRODUCTS WITH SPECIFICATIONS & QUOTES (Ref: Image 2) --- */}
      <section className="py-20 px-6 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl">
          
          {/* Subsection 1: Ventilators */}
          <div className="text-center mb-10">
            <h3 className="text-2xl font-extrabold text-cyan-900 sm:text-3xl">Ventilators</h3>
            <p className="mt-2 max-w-4xl mx-auto text-xs sm:text-sm text-slate-600 leading-relaxed">
              Ventilators are designed to provide optimal respiratory support and enhance patient care. Our range includes Intensive Care Ventilators and Portable Ventilators. They feature adjustable parameters such as respiratory rate, tidal volume, and positive end-expiratory pressure (PEEP). These devices offer multiple ventilation modes and settings to adapt to various patient needs. Our ventilators are ideal for both critical care settings and mobile applications, ensuring optimal performance.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
            {[
              { model: "ICU Ventilator AM-IVA10", vol: "20 to 2000 ml", pressure: "5 to 80 cmH₂O", rate: "1 to 100 bpm" },
              { model: "ICU Ventilator AM-IVA11", vol: "50 ~ 1500 mL", pressure: "0 ~ 100 cmH₂O", rate: "1 bpm ~ 90 bpm" },
              { model: "ICU Ventilator AM-IVA12", vol: "20 ml ~ 2000 ml", pressure: "5 to 80 cmH₂O", rate: "1 bpm ~ 100 bpm" },
              { model: "ICU Ventilator AM-IVA13", vol: "0 ~ 2000 ml", pressure: "5 to 80 cmH₂O", rate: "1 bpm ~ 100 bpm" },
            ].map((prod, i) => (
              <div key={i} className="flex flex-col justify-between bg-white rounded-xl border border-teal-800/20 p-4 shadow-sm hover:shadow-md transition">
                <div>
                  <div className="relative h-32 w-full mb-3 bg-slate-50 rounded">
                    <Image src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&auto=format&fit=crop&q=80" alt={prod.model} fill className="object-contain p-2" />
                  </div>
                  <h4 className="text-sm font-bold text-teal-950 text-center mb-2">{prod.model}</h4>
                  
                  {/* Specs Table List */}
                  <div className="text-[11px] text-slate-700 space-y-1 border-t border-b border-slate-100 py-2 mb-3">
                    <div className="flex justify-between"><span>Tidal Volume:</span> <span className="font-medium text-right">{prod.vol}</span></div>
                    <div className="flex justify-between"><span>Pressure Range:</span> <span className="font-medium text-right">{prod.pressure}</span></div>
                    <div className="flex justify-between"><span>Respiratory Rate:</span> <span className="font-medium text-right">{prod.rate}</span></div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-amber-500 mb-3 px-1">
                    <span>★★★★★</span>
                    <span className="text-orange-600 font-semibold text-[10px] cursor-pointer">📄 Catalog</span>
                  </div>
                </div>

                <Link href="/quote" className="w-full text-center bg-slate-50 border border-slate-300 hover:bg-teal-50 text-slate-800 font-semibold text-xs py-2 rounded transition flex items-center justify-center gap-1">
                  🔒 Get Quote
                </Link>
              </div>
            ))}
          </div>

          {/* Subsection 2: Oxygen Concentrators */}
          <div className="text-center mb-10 pt-6 border-t border-slate-100">
            <h3 className="text-2xl font-extrabold text-cyan-900 sm:text-3xl">Oxygen Concentrators</h3>
            <p className="mt-2 max-w-4xl mx-auto text-xs sm:text-sm text-slate-600 leading-relaxed">
              Oxygen concentrators are designed to efficiently provide supplemental oxygen to patients with breathing problems. Our range includes Medical Oxygen Concentrators, Portable Oxygen Concentrators, and Stationary Oxygen Concentrators. Their compact and portable designs offer convenience for both home use and transport between medical facilities. These concentrators operate quietly, enhancing patient comfort. They are ideal for patients with chronic lung diseases and other respiratory illnesses.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
            {[
              { model: "Portable Oxygen Concentrator AM-OC32", flow: "5 L/min", purity: "93% ± 3" },
              { model: "Portable Oxygen Concentrator AM-POC31", flow: "0.5 to 2 L", purity: "1 to 2 pulse settings" },
            ].map((prod, i) => (
              <div key={i} className="flex flex-col justify-between bg-white rounded-xl border border-teal-800/20 p-4 shadow-sm">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">🔒 Get Quote</span>
                    <span className="text-[10px] font-semibold text-orange-600 cursor-pointer">📄 Catalog</span>
                  </div>
                  <div className="relative h-32 w-full mb-3 bg-slate-50 rounded">
                    <Image src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=400&auto=format&fit=crop&q=80" alt={prod.model} fill className="object-contain p-2" />
                  </div>
                  <h4 className="text-sm font-bold text-teal-950 text-center mb-2">{prod.model}</h4>
                  
                  <div className="text-[11px] text-slate-700 space-y-1 border-t border-b border-slate-100 py-2 mb-3">
                    <div className="flex justify-between"><span>Oxygen Flow:</span> <span className="font-medium">{prod.flow}</span></div>
                    <div className="flex justify-between"><span>Oxygen Concentration:</span> <span className="font-medium">{prod.purity}</span></div>
                  </div>
                  <div className="text-xs text-amber-500 mb-2">★★★★★</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* LAB STANDARDS BANNER */}
      <section className="bg-slate-950 py-20 px-6 text-white border-t border-slate-800">
        <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-3 text-center">
          <div className="p-4">
            <h4 className="text-3xl font-extrabold text-teal-400">ISO 9001:2015</h4>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">Certified quality management benchmarks across all manufactured instruments.</p>
          </div>
          <div className="p-4">
            <h4 className="text-3xl font-extrabold text-teal-400">IQ / OQ / PQ</h4>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">Complete validation documentation support for regulated testing facilities.</p>
          </div>
          <div className="p-4">
            <h4 className="text-3xl font-extrabold text-teal-400">Expert Support</h4>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">Dedicated global technical assistance for installation and maintenance.</p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-24 px-6 text-center bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Equip Your Laboratory Today
          </h2>

          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            Contact our scientific advisory team for customized equipment packages, bulk pricing, and product availability.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-slate-950 px-8 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-slate-800"
            >
              Contact Us
            </Link>
            <Link
              href="/quote"
              className="rounded-lg border border-slate-300 bg-slate-50 px-8 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-100"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}