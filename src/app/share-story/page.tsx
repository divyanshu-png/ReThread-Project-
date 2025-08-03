
import { Heart } from "lucide-react";
import { StoryForm } from "./components/StoryForm";

export default function ShareStoryPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <Heart className="h-16 w-16 mx-auto text-primary mb-4" />
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
            Share Your Story
          </h1>
          <p className="text-lg text-muted-foreground mt-4">
            Your voice matters. Inspire others by sharing your journey, your craft, or your connection to the world of handloom and recycling.
          </p>
        </div>
        <StoryForm />
      </div>
    </div>
  );
}
