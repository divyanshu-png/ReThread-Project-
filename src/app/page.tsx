
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Recycle, Truck, Factory, Users, ShoppingBag, Leaf, Heart, Handshake } from "lucide-react";

const howItWorksSteps = [
  {
    icon: <Recycle className="h-10 w-10 text-primary" />,
    title: "List Your Waste",
    description: "Individuals and NGOs can easily list recyclable materials for pickup.",
    link: "/list-waste",
  },
  {
    icon: <Truck className="h-10 w-10 text-primary" />,
    title: "We Collect",
    description: "Our team schedules a convenient pickup for the collected materials.",
    link: "/dashboard",
  },
  {
    icon: <Factory className="h-10 w-10 text-primary" />,
    title: "Upcyclers Request",
    description: "Startups and companies find and request the materials they need for production.",
    link: "/find-materials",
  },
  {
    icon: <ShoppingBag className="h-10 w-10 text-primary" />,
    title: "Shop Sustainable",
    description: "Purchase unique, upcycled products from our integrated marketplace.",
    link: "/marketplace",
  },
];

const partners = [
  { name: "Mission Clean Bharat", logo: "https://placehold.co/100x100", description: "Pioneering new methods for upcycling multi-layered plastics.", data_ai_hint: "logo recycling", href: "https://sbmurban.org/" },
  { name: "Chintan India", logo: "https://placehold.co/100x100", description: "Empowering waste pickers and promoting environmental justice.", data_ai_hint: "logo nature", href: "https://www.chintan-india.org/" },
  { name: "ScrapUncle", logo: "https://placehold.co/100x100", description: "Streamlining scrap collection with a user-friendly digital platform.", data_ai_hint: "logo technology", href: "https://scrapuncle.com/" },
  { name: "MuddleArt", logo: "https://placehold.co/100x100", description: "Transforming diverse waste streams into valuable new products.", data_ai_hint: "logo minimal", href: "https://www.muddleart.com/" },
];

const marketplaceItems = [
  {
    name: "Woven Tote Bag",
    image: "https://placehold.co/400x300",
    description: "A stylish and durable bag made from recycled plastic wrappers.",
    price: "₹899",
    data_ai_hint: "tote bag"
  },
  {
    name: "Colorful Handloom Rug",
    image: "https://placehold.co/400x300",
    description: "Brighten your home with this rug crafted from textile waste.",
    price: "₹2,499",
    data_ai_hint: "handloom rug"
  },
  {
    name: "Upcycled Plastic Planter",
    image: "https://placehold.co/400x300",
    description: "A unique, eco-friendly home for your favorite plants.",
    price: "₹499",
    data_ai_hint: "plastic planter"
  },
];

const artisanStories = [
    {
        name: "Rajeshwari Devi",
        image: "https://placehold.co/400x400",
        location: "Varanasi, Uttar Pradesh",
        story: "For generations, my family has woven dreams into fabric. This platform gives my craft a new voice, a way to reach people who truly appreciate the soul of handloom.",
        data_ai_hint: "artisan woman"
    },
    {
        name: "Salim Ansari",
        image: "https://placehold.co/400x400",
        location: "Bhagalpur, Bihar",
        story: "The looms were almost silent. Now, with access to new markets and fair prices for our silk, there is a rhythm of hope in our village once again.",
        data_ai_hint: "artisan man"
    },
    {
        name: "Lakshmi Murmu",
        image: "https://placehold.co/400x400",
        location: "Kutch, Gujarat",
        story: "Each thread tells a story of my ancestors. ReThread Connect helps me share these stories with the world, ensuring our traditions don't just survive, but thrive.",
        data_ai_hint: "weaving hands"
    }
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-secondary/50 py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary mb-4">
            Turn Waste into Wonder
          </h1>
          <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto mb-8">
            ReThread Connect is a revolutionary platform bridging the gap between waste producers and recycling innovators. Join us to build a sustainable circular economy, one thread at a time.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/list-waste">List Your Waste <Recycle className="ml-2" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/find-materials">Find Materials <Factory className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksSteps.map((step) => (
              <Card key={step.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-secondary rounded-full p-4 w-fit mb-4">
                    {step.icon}
                  </div>
                  <CardTitle className="font-headline text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Organizations Section */}
      <section id="partners" className="bg-secondary/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">Our Inspiring Partners</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner) => (
              <Link key={partner.name} href={partner.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                <Card className="flex flex-col items-center text-center p-6 h-full hover:shadow-xl transition-shadow duration-300">
                  <Avatar className="w-24 h-24 mb-4 border-4 border-secondary">
                    <AvatarImage src={partner.logo} alt={partner.name} data-ai-hint={partner.data_ai_hint} />
                    <AvatarFallback>{partner.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-headline text-lg font-semibold">{partner.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2 flex-grow">{partner.description}</p>
                </Card>
              </Link>
            ))}
          </div>
           <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/join-us">Become a Partner <Handshake className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

       {/* Marketplace Preview Section */}
       <section id="marketplace" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">From Our Marketplace</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marketplaceItems.map((item) => (
              <Card key={item.name} className="overflow-hidden group">
                <Image src={item.image} alt={item.name} data-ai-hint={item.data_ai_hint} width={400} height={300} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <CardHeader>
                  <CardTitle className="font-headline">{item.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-primary">{item.price}</span>
                    <Button variant="ghost">Buy Now <ArrowRight className="ml-2 h-4 w-4" /></Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/marketplace">Explore Marketplace <ShoppingBag className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Artisan Stories Section */}
      <section id="artisan-stories" className="bg-secondary/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">Voices from the Loom</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {artisanStories.map((artisan) => (
                    <div key={artisan.name} className="flex flex-col items-center text-center">
                        <Image src={artisan.image} alt={artisan.name} data-ai-hint={artisan.data_ai_hint} width={150} height={150} className="rounded-full w-36 h-36 object-cover mb-4 border-4 border-background shadow-lg"/>
                        <h3 className="font-headline text-xl font-semibold">{artisan.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{artisan.location}</p>
                        <p className="text-foreground/80 italic">"{artisan.story}"</p>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <Button asChild size="lg" variant="outline">
                    <Link href="/share-story">Share Your Story <Heart className="ml-2" /></Link>
                </Button>
            </div>
        </div>
      </section>

      {/* AI Recommender CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-primary text-primary-foreground p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-2">Discover New Possibilities</h2>
              <p className="text-lg text-primary-foreground/80">Use our AI-powered tool to find surprising new materials for your next upcycling project.</p>
            </div>
            <Button asChild size="lg" variant="secondary" className="mt-6 md:mt-0 shrink-0">
              <Link href="/recommendations">Get AI Recommendations <Leaf className="ml-2" /></Link>
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
}
