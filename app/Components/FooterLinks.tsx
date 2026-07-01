import Link from "next/link";

const sections = [
  {
    title: "Company",
    links: ["About", "Careers", "Blog", "Contact"],
  },
  {
    title: "Support",
    links: ["Help Center", "Privacy Policy", "Terms", "FAQ"],
  },
];

export default function FooterLinks() {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
      {sections.map((section) => (
        <div key={section.title}>
          <h4 className="mb-3 font-semibold text-white">
            {section.title}
          </h4>

          <ul className="space-y-2 text-gray-300">
            {section.links.map((link) => (
              <li key={link}>
                <Link href="#" className="hover:text-white">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}