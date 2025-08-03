import { Handshake } from "lucide-react";
import { PartnershipForm } from "./components/PartnershipForm";

export default function JoinUsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <Handshake className="h-16 w-16 mx-auto text-primary mb-4" />
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
            Partner With Us
          </h1>
          <p className="text-lg text-muted-foreground mt-4">
            Join our network of innovators, recyclers, and artisans to build a sustainable future. Fill out the form below to get started.
          </p>
        </div>
        <PartnershipForm />
      </div>
    </div>
  );
}
