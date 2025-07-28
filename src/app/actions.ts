
'use server';

import { recommendMaterials, type MaterialRecommenderInput, type MaterialRecommenderOutput } from '@/ai/flows/material-recommender';

export async function getAiRecommendations(input: MaterialRecommenderInput): Promise<MaterialRecommenderOutput> {
    try {
        const result = await recommendMaterials(input);
        return result;
    } catch (error) {
        console.error("AI recommendation failed:", error);
        // A user-friendly error message is better, but for the hackathon this is fine
        return { recommendedMaterials: "Sorry, we couldn't generate recommendations at this time. Please try again later." };
    }
}
