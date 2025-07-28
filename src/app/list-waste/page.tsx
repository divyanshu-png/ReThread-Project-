import { Recycle } from "lucide-react";
import { WasteListingForm } from "./components/WasteListingForm";

export default function ListWastePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <Recycle className="h-16 w-16 mx-auto text-primary mb-4" />
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
            List Your Waste Materials
          </h1>
          <p className="text-lg text-muted-foreground mt-4">
            Help us build a circular economy. Fill out the form below to schedule a pickup for your recyclable waste.
          </p>
        </div>
        <WasteListingForm />
      </div>
    </div>
  );
}
