

"use client";
 
import { useEffect } from "react";
import { FileText, ShieldCheck, Clock3, Stethoscope, CheckCircle2 } from "lucide-react";
 
export default function ClearNoteMedicalWebsite() {
  useEffect(() => {
    document.title = "ClearNote Medical | Virtual Sick Notes & Disability Forms in Ontario";
 
    const svg = encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
        <rect width="64" height="64" rx="16" fill="#0f4c81"/>
        <path d="M22 18h14l10 10v18a6 6 0 0 1-6 6H22a6 6 0 0 1-6-6V24a6 6 0 0 1 6-6z" fill="white" opacity="0.96"/>
        <path d="M36 18v10h10" fill="none" stroke="#0f4c81" stroke-width="4" stroke-linejoin="round"/>
        <path d="M31 31v12M25 37h12" stroke="#0f4c81" stroke-width="4" stroke-linecap="round"/>
      </svg>
    `);
 
    let favicon = document.querySelector("link[rel='icon']");
    if (!favicon) {
      favicon = document.createElement("link");
      favicon.setAttribute("rel", "icon");
      favicon.setAttribute("type", "image/svg+xml");
      document.head.appendChild(favicon);
    }
    favicon.setAttribute("href", `data:image/svg+xml,${svg}`);
 
    // Meta description for SEO
    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      "content",
      "ClearNote Medical provides virtual sick notes, work accommodation letters, disability forms, and DTC paperwork for Ontario patients — no family doctor required. Same-day appointments available."
    );
 
    // OG tags
    const ogTags = [
      { property: "og:title", content: "ClearNote Medical | Virtual Sick Notes & Disability Forms in Ontario" },
      { property: "og:description", content: "Virtual medical documentation for Ontario patients. Sick notes, disability forms, DTC paperwork — no family doctor required." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://clearnotemedical.ca" },
    ];
    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property='${property}']`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });
 
    return () => {
      document.title = "ClearNote Medical";
    };
  }, []);
 
  const services = [
    {
      title: "Sick Notes",
      description:
        "Virtual assessments for work or school sick notes, designed for patients who do not have a family doctor.",
      time: "5–10 min visits",
    },
    {
      title: "Work Accommodation Letters",
      description:
        "Clear, concise documentation for modified duties, return-to-work needs, and basic workplace accommodation requests.",
      time: "10 min visits",
    },
    {
      title: "Disability Forms",
      description:
        "Support for short-term disability, long-term disability, insurance paperwork, and other medical forms.",
      time: "15–20 min visits",
    },
    {
      title: "DTC & Insurance Paperwork",
      description:
        "Appointments for Disability Tax Credit forms and selected insurance documentation after clinical assessment.",
      time: "15–20 min visits",
    },
  ];
 
  const steps = [
    "Book your virtual appointment online.",
    "Complete a short intake form with your OHIP details and reason for the visit.",
    "Meet with an Ontario GP by secure virtual visit.",
    "Receive your documentation by secure electronic delivery when clinically appropriate.",
  ];
 
  const pricing = [
    { name: "Sick Note", price: "$15", desc: "Work or school absence documentation after assessment." },
    { name: "Return-to-Work Note", price: "$15", desc: "Basic return-to-work clearance when appropriate." },
    { name: "Work Accommodation Letter", price: "$20", desc: "Modified duties or workplace accommodation requests." },
    { name: "Short Disability Form", price: "$60", desc: "Short-term disability documentation." },
    { name: "Long Disability / Insurance", price: "$80", desc: "Long-term disability or detailed insurance forms." },
    { name: "DTC Form", price: "$80", desc: "Disability Tax Credit medical documentation." },
  ];
 
  const faqs = [
    {
      q: "Do I need a family doctor?",
      a: "No. ClearNote Medical is designed for Ontario patients who do not have a family doctor and need time-sensitive medical documentation.",
    },
    {
      q: "Are appointments covered by OHIP?",
      a: "Insured medical assessments are billed to OHIP when eligible. Documentation fees may apply for uninsured forms, notes, and letters.",
    },
    {
      q: "Can every request be approved?",
      a: "No. All notes and forms are based on clinical assessment and medical judgment. In some cases, a request may be declined or limited.",
    },
    {
      q: "Is this for emergencies?",
      a: "No. ClearNote Medical is not an emergency service. If you have chest pain, severe shortness of breath, thoughts of self-harm, or another urgent medical issue, call 911 or go to the nearest emergency department.",
    },
  ];
 
  // FIX #1: Each highlight now has its own icon — removed the hardcoded "Highlights" label
  const highlights = [
    { label: "Fully virtual", icon: Stethoscope },
    { label: "OHIP billed when eligible", icon: ShieldCheck },
    { label: "Same-day availability", icon: Clock3 },
  ];
 
  const janeUrl = "https://clearnotemedical.janeapp.com";
 
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-blue-50 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-sky-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4">
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-700 to-blue-500 text-white shadow-md shadow-sky-200">
                <FileText className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="truncate text-xl font-bold tracking-tight text-sky-950 sm:text-2xl">ClearNote Medical</div>
                <div className="text-xs text-sky-700 sm:text-sm">Virtual Sick Notes & Disability Forms in Ontario</div>
              </div>
            </div>
            <div className="mt-1 text-xs text-slate-500">Dr. J M Abraham, Ontario GP</div>
          </div>
          {/* FIX #2: Mobile header CTA — visible on all screen sizes */}
          <a
            href={janeUrl}
            className="shrink-0 rounded-2xl bg-gradient-to-r from-sky-700 to-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-200 transition hover:scale-[1.02] sm:px-5 sm:py-3"
          >
            Book Now
          </a>
        </div>
      </header>
 
      <main>
        <div className="bg-gradient-to-r from-sky-800 to-blue-700 text-white">
          <div className="mx-auto max-w-7xl px-4 py-3 text-center text-xs font-semibold tracking-wide sm:px-6 sm:text-sm">
            Physician-Led Virtual Clinic • No Family Doctor Required • OHIP-Covered Visits Available • Same-Day Appointments
          </div>
        </div>
 
        <div className="border-b border-sky-100 bg-sky-50/80">
          <div className="mx-auto max-w-7xl px-4 py-3 text-center text-xs font-medium text-sky-900 sm:px-6 sm:text-sm">
            Transparent Pricing • OHIP-Covered Assessments • Low-Cost Documentation Fees Posted Before Booking
          </div>
        </div>
 
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex rounded-full border border-sky-200 bg-white px-4 py-2 text-sm text-sky-800 shadow-sm">
                Ontario Virtual Clinic
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-sky-950 sm:text-5xl lg:text-6xl">
                No family doctor? Get medical documentation online.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                ClearNote Medical provides virtual appointments for sick notes, work accommodation letters, disability paperwork, and selected insurance forms for Ontario patients.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <a
                  href={janeUrl}
                  className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-sky-700 to-blue-600 px-6 py-4 text-base font-semibold text-white shadow-xl shadow-sky-200 transition hover:scale-[1.01]"
                >
                  Book Appointment
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-2xl border border-sky-200 bg-white px-6 py-4 text-base font-semibold text-sky-950 shadow-sm transition hover:bg-sky-50"
                >
                  View Services
                </a>
              </div>
              {/* FIX #1: Render item.label correctly — removed hardcoded "Highlights" text */}
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {highlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="rounded-2xl border border-sky-100 bg-white p-4 shadow-sm shadow-sky-100">
                      <div className="flex items-center gap-2 text-sky-700">
                        <Icon className="h-4 w-4 shrink-0" />
                        <div className="text-sm font-semibold text-slate-900">{item.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
 
            <div className="rounded-[2rem] border border-sky-100 bg-white p-4 shadow-2xl shadow-sky-100 sm:p-6">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-sky-800 to-blue-600 p-6 text-white">
                <div className="text-sm uppercase tracking-[0.2em] text-sky-100">ClearNote Medical</div>
                <div className="mt-3 text-2xl font-semibold">Simple. Fast. Professional.</div>
                <p className="mt-4 leading-7 text-sky-50">
                  Designed for patients who need timely documentation but do not have access to a family doctor.
                </p>
              </div>
              <div className="mt-6 space-y-4">
                {[
                  "Sick notes",
                  "Return-to-work notes",
                  "Work accommodation letters",
                  "Short-term and long-term disability forms",
                  "DTC and selected insurance paperwork",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-sky-100 p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-700" />
                    <div className="text-slate-700">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
 
        <section id="services" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-sky-950 sm:text-4xl">Services</h2>
            <p className="mt-4 text-lg text-slate-600">
              Focused virtual appointments for medical documentation needs.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="rounded-[1.75rem] border border-sky-100 bg-white p-6 shadow-sm shadow-sky-100">
                <div className="text-xl font-semibold text-sky-950">{service.title}</div>
                <div className="mt-2 text-sm font-medium text-sky-700">{service.time}</div>
                <p className="mt-4 leading-7 text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </section>
 
        <section id="pricing" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-sky-950 sm:text-4xl">Pricing</h2>
            <p className="mt-4 text-lg text-slate-600">
              OHIP-covered assessment when eligible. The following documentation fees apply to uninsured services.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {pricing.map((item) => (
              <div key={item.name} className="rounded-[1.75rem] border border-sky-100 bg-white p-6 shadow-sm shadow-sky-100">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-lg font-semibold text-sky-950">{item.name}</div>
                  <div className="rounded-full bg-sky-50 px-3 py-1 text-lg font-bold text-sky-800">{item.price}</div>
                </div>
                <p className="mt-4 leading-7 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
 
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-sky-100 bg-white p-6 shadow-sm shadow-sky-100 sm:p-8">
              <h3 className="text-2xl font-bold tracking-tight text-sky-950">How it works</h3>
              <div className="mt-6 space-y-4">
                {steps.map((step, index) => (
                  <div key={step} className="flex gap-4 rounded-2xl border border-sky-100 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-700 to-blue-600 text-sm font-semibold text-white shadow-md shadow-sky-100">
                      {index + 1}
                    </div>
                    <div className="pt-2 text-slate-700">{step}</div>
                  </div>
                ))}
              </div>
            </div>
 
            <div className="rounded-[2rem] border border-sky-700 bg-gradient-to-br from-sky-800 to-blue-700 p-6 text-white shadow-sm sm:p-8">
              <h3 className="text-2xl font-bold tracking-tight">Important information</h3>
              <div className="mt-6 space-y-4 leading-7 text-sky-50">
                <p>
                  Appointments are intended for episodic documentation needs and do not replace ongoing primary care.
                </p>
                <p>
                  Medical notes and forms are completed only when clinically appropriate after assessment.
                </p>
                <p>
                  Documentation fees apply to uninsured services. Fees should be posted clearly before booking.
                </p>
                <p>
                  Patients must be physically located in Ontario at the time of their virtual appointment.
                </p>
              </div>
            </div>
          </div>
        </section>
 
        <section className="mx-auto max-w-7xl px-4 py-8 pb-28 sm:px-6 sm:pb-24">
          <div className="rounded-[2rem] border border-sky-100 bg-white p-6 shadow-sm shadow-sky-100 sm:p-8">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-sky-950">Frequently asked questions</h3>
                <div className="mt-6 space-y-4">
                  {faqs.map((faq) => (
                    <div key={faq.q} className="rounded-2xl border border-sky-100 p-5">
                      <div className="font-semibold text-sky-950">{faq.q}</div>
                      <p className="mt-2 leading-7 text-slate-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
 
              <div id="book" className="rounded-[1.75rem] border border-sky-100 bg-sky-50/70 p-6">
                <h3 className="text-2xl font-bold tracking-tight text-sky-950">Book an appointment</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Book directly through Jane for same-day and after-hours virtual appointments.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl border border-sky-100 bg-white p-4">
                    <div className="text-sm text-slate-500">Booking link</div>
                    <a
                      href={janeUrl}
                      className="mt-1 block break-all font-medium text-sky-700 underline underline-offset-2 hover:text-sky-900"
                    >
                      {janeUrl}
                    </a>
                  </div>
                  {/* FIX #3: Email is now a clickable mailto: link */}
                  <div className="rounded-2xl border border-sky-100 bg-white p-4">
                    <div className="text-sm text-slate-500">Email</div>
                    <a
                      href="mailto:hello@clearnotemedical.ca"
                      className="mt-1 block font-medium text-sky-700 underline underline-offset-2 hover:text-sky-900"
                    >
                      hello@clearnotemedical.ca
                    </a>
                  </div>
                  <div className="rounded-2xl border border-sky-100 bg-white p-4">
                    <div className="text-sm text-slate-500">Hours</div>
                    <div className="mt-1 font-medium text-sky-900">Evenings and weekends</div>
                  </div>
                </div>
                <a
                  href={janeUrl}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-sky-700 to-blue-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-sky-200 transition hover:scale-[1.01] sm:w-auto"
                >
                  Book on Jane
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
 
      <a
        href={janeUrl}
        className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-700 to-blue-600 px-5 py-4 text-sm font-semibold text-white shadow-2xl shadow-sky-300 transition hover:scale-[1.02] sm:bottom-6 sm:right-6"
      >
        <Clock3 className="h-4 w-4" />
        Book Now
      </a>
 
      {/* FIX #4 & #5: Footer with PHIPA mention and clickable email */}
      <footer className="border-t border-sky-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-slate-500 sm:px-6">
          <div className="font-semibold text-sky-950">ClearNote Medical</div>
          <div className="mt-1 text-xs text-slate-500">Dr. J M Abraham, Ontario GP</div>
          <p className="mt-2 max-w-3xl leading-7">
            Virtual medical documentation clinic for Ontario patients. This website content is informational only and does not create a physician-patient relationship until an appointment is booked and accepted.
          </p>
          <p className="mt-2 max-w-3xl leading-7 text-xs text-slate-400">
            Patient information is collected and handled in accordance with Ontario's{" "}
            <em>Personal Health Information Protection Act</em> (PHIPA). For privacy inquiries, contact{" "}
            <a href="mailto:hello@clearnotemedical.ca" className="underline underline-offset-2 hover:text-slate-600">
              hello@clearnotemedical.ca
            </a>.
          </p>
          <p className="mt-4 text-xs text-slate-400">
            © {new Date().getFullYear()} ClearNote Medical. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
