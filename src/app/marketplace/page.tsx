import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const marketplaceItems = [
  {
    name: "Woven Tote Bag",
    image: "https://placehold.co/400x300",
    description: "A stylish and durable bag made from recycled plastic wrappers.",
    price: "₹899",
    category: "bags",
    data_ai_hint: "tote bag"
  },
  {
    name: "Colorful Handloom Rug",
    image: "https://placehold.co/400x300",
    description: "Brighten your home with this rug crafted from textile waste.",
    price: "₹2,499",
    category: "home-decor",
    data_ai_hint: "handloom rug"
  },
  {
    name: "Upcycled Plastic Planter",
    image: "https://placehold.co/400x300",
    description: "A unique, eco-friendly home for your favorite plants.",
    price: "₹499",
    category: "home-decor",
    data_ai_hint: "plastic planter"
  },
  {
    name: "Denim Patchwork Jacket",
    image: "https://placehold.co/400x300",
    description: "A one-of-a-kind fashion statement from reclaimed denim.",
    price: "₹3,199",
    category: "fashion",
    data_ai_hint: "denim jacket"
  },
  {
    name: "Bottle Art Decor",
    image: "https://placehold.co/400x300",
    description: "Elegant decor pieces made from repurposed glass bottles.",
    price: "₹1,299",
    category: "home-decor",
    data_ai_hint: "bottle art"
  },
  {
    name: "Tire Ottoman",
    image: "https://placehold.co/400x300",
    description: "Sturdy and stylish seating made from used tires.",
    price: "₹2,999",
    category: "furniture",
    data_ai_hint: "tire ottoman"
  },
];

export default function MarketplacePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <ShoppingBag className="h-16 w-16 mx-auto text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
          Sustainable Marketplace
        </h1>
        <p className="text-lg text-muted-foreground mt-4">
          Discover beautiful products with a purpose. Every purchase supports a circular economy.
        </p>
      </div>

      <div className="flex justify-end mb-8">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="fashion">Fashion</SelectItem>
            <SelectItem value="bags">Bags & Accessories</SelectItem>
            <SelectItem value="home-decor">Home Decor</SelectItem>
            <SelectItem value="furniture">Furniture</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {marketplaceItems.map((item) => (
          <Card key={item.name} className="overflow-hidden group flex flex-col">
             <div className="overflow-hidden">
                <Image 
                    src={item.image} 
                    alt={item.name} 
                    data-ai-hint={item.data_ai_hint}
                    width={400} 
                    height={300} 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
             </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-headline text-lg font-semibold">{item.name}</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-4 flex-grow">{item.description}</p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-xl font-bold text-primary">{item.price}</span>
                <Button variant="ghost" asChild>
                    <Link href="#">
                        Buy Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
