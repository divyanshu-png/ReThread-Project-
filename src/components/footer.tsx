import { Leaf, Twitter, Facebook, Instagram } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-secondary/50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary font-headline">
              <Leaf className="h-6 w-6" />
              <span>ReThread Connect</span>
            </Link>
            <p className="text-sm text-muted-foreground">Connecting waste to value for a sustainable future.</p>
          </div>
          <div>
            <h3 className="font-headline font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/list-waste" className="hover:text-primary transition-colors">List Waste</Link></li>
              <li><Link href="/find-materials" className="hover:text-primary transition-colors">Find Materials</Link></li>
              <li><Link href="/marketplace" className="hover:text-primary transition-colors">Marketplace</Link></li>
              <li><Link href="/dashboard" className="hover:text-primary transition-colors">Admin Dashboard</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Partnerships</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ReThread Connect. All rights reserved.</p>
          <p className="mt-1">A project for the Handloom Hackathon.</p>
        </div>
      </div>
    </footer>
  );
}
