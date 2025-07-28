import { Factory, Search } from "lucide-react";
import Image from "next/image";
import { MaterialRequestForm } from "./components/MaterialRequestForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const availableMaterials = [
  {
    id: 1,
    name: "Multi-Layered Plastic (MLP)",
    image: "https://placehold.co/400x300",
    quantity: "250 kg",
    location: "Delhi Warehouse",
    data_ai_hint: "plastic waste"
  },
  {
    id: 2,
    name: "PET Bottles (Shredded)",
    image: "https://placehold.co/400x300",
    quantity: "500 kg",
    location: "Mumbai Warehouse",
    data_ai_hint: "shredded plastic"
  },
  {
    id: 3,
    name: "Mixed Textile Scraps",
    image: "https://placehold.co/400x300",
    quantity: "1 Ton",
    location: "Bangalore Warehouse",
    data_ai_hint: "textile waste"
  },
  {
    id: 4,
    name: "Cardboard and Paper Waste",
    image: "https://placehold.co/400x300",
    quantity: "2 Tons",
    location: "Delhi Warehouse",
    data_ai_hint: "paper waste"
  },
];

export default function FindMaterialsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <Factory className="h-16 w-16 mx-auto text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
          Find Raw Materials for Upcycling
        </h1>
        <p className="text-lg text-muted-foreground mt-4">
          Browse our inventory of collected waste materials. Ready to be transformed by your vision.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-headline font-bold mb-6">Available Now</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {availableMaterials.map((material) => (
              <Card key={material.id} className="overflow-hidden group">
                <Image 
                  src={material.image} 
                  alt={material.name} 
                  data-ai-hint={material.data_ai_hint}
                  width={400} 
                  height={300} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <CardHeader>
                  <CardTitle className="font-headline">{material.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">Qty: {material.quantity}</Badge>
                    <Badge variant="secondary">Location: {material.location}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">High-quality, sorted materials ready for your production line.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-headline font-bold mb-6">Request Materials</h2>
          <MaterialRequestForm />
        </div>
      </div>
    </div>
  );
}
