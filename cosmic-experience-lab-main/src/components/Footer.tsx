import { Instagram, Linkedin, Facebook, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Web Development",
  "Mobile Apps",
  "E-Commerce",
  "UI/UX Design",
  "Digital Marketing",
];

const Footer = () => (
  <footer className="relative border-t border-border/30 pt-16 pb-8 px-6 overflow-hidden">
    <div className="max-w-6xl mx-auto relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
        {/* Brand */}
        <div className="lg:col-span-1">
          <p className="font-display text-2xl font-bold text-gradient inline-block mb-3">internetify.io</p>
          <p className="text-muted-foreground text-sm font-body leading-relaxed mb-5">
            Crafting digital experiences that push boundaries and drive results.
          </p>
          <div className="flex items-center gap-3">
            {[
              { icon: Instagram, href: "https://www.instagram.com/internetify.io?igsh=Znhtb3ZqcWU3bjNt" },
              { icon: Linkedin, href: "https://www.linkedin.com/company/internetify-io/" },
              { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61591896150791&mibextid=ZbWKwL" },
            ].map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-sm font-semibold text-foreground tracking-wide uppercase mb-4">Navigation</h4>
          <ul className="space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-muted-foreground text-sm font-body hover:text-primary transition-colors duration-200 flex items-center gap-1 group"
                >
                  {link.label}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display text-sm font-semibold text-foreground tracking-wide uppercase mb-4">Services</h4>
          <ul className="space-y-2.5">
            {services.map((s) => (
              <li key={s}>
                <span className="text-muted-foreground text-sm font-body">{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-sm font-semibold text-foreground tracking-wide uppercase mb-4">Get In Touch</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2.5 text-muted-foreground text-sm font-body">
              <Phone className="w-4 h-4 text-primary" />
              <a href="tel:+918667787621" className="hover:text-primary transition-colors">+91 8667787621</a>
            </li>
            <li className="flex items-center gap-2.5 text-muted-foreground text-sm font-body">
              <Mail className="w-4 h-4 text-primary" />
              <a href="mailto:internetifyio@gmail.com" className="hover:text-primary transition-colors">internetifyio@gmail.com</a>
            </li>
            <li className="flex items-start gap-2.5 text-muted-foreground text-sm font-body">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              India
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground/60 text-xs font-body">
          &copy; {new Date().getFullYear()} internetify.io — All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-muted-foreground/60 text-xs font-body hover:text-muted-foreground transition-colors">Privacy Policy</a>
          <a href="#" className="text-muted-foreground/60 text-xs font-body hover:text-muted-foreground transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
