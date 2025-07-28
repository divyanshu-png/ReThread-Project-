import { MaterialRecommender } from "./components/MaterialRecommender";
import { Leaf } from "lucide-react";

export default function RecommendationsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Leaf className="h-16 w-16 mx-auto text-primary mb-4" />
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
            AI-Powered Material Recommender
          </h1>
          <p className="text-lg text-muted-foreground mt-4">
            Uncover hidden opportunities. Our AI analyzes historical data and market trends to suggest innovative materials for your upcycling projects.
          </p>
        </div>
        <MaterialRecommender />
      </div>
    </div>
  );
}
