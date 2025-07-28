// src/ai/flows/material-recommender.ts
'use server';

/**
 * @fileOverview An AI-powered material recommendation flow.
 *
 * - recommendMaterials - A function that recommends materials based on user history and industry trends.
 * - MaterialRecommenderInput - The input type for the recommendMaterials function.
 * - MaterialRecommenderOutput - The return type for the recommendMaterials function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MaterialRecommenderInputSchema = z.object({
  userHistory: z
    .string()
    .describe(
      'A detailed history of the user or company, including past material requests, industry, and any specific requirements.'
    ),
  industryTrends: z
    .string()
    .describe(
      'Current trends in the recycling and upcycling industry, including popular materials and innovative uses.'
    ),
});
export type MaterialRecommenderInput = z.infer<typeof MaterialRecommenderInputSchema>;

const MaterialRecommenderOutputSchema = z.object({
  recommendedMaterials: z
    .string()
    .describe(
      'A list of recommended materials with a brief explanation of why each material is recommended based on the user history and industry trends.'
    ),
});
export type MaterialRecommenderOutput = z.infer<typeof MaterialRecommenderOutputSchema>;

export async function recommendMaterials(
  input: MaterialRecommenderInput
): Promise<MaterialRecommenderOutput> {
  return materialRecommenderFlow(input);
}

const prompt = ai.definePrompt({
  name: 'materialRecommenderPrompt',
  input: {schema: MaterialRecommenderInputSchema},
  output: {schema: MaterialRecommenderOutputSchema},
  prompt: `You are an AI assistant that recommends recyclable materials to companies or startups based on their user history and current industry trends.

  Analyze the user history and industry trends provided, and suggest materials that the user may not have considered but could be valuable for their upcycling processes.

  User History: {{{userHistory}}}
  Industry Trends: {{{industryTrends}}}

  Provide a list of recommended materials with a brief explanation of why each material is recommended.
  `,
});

const materialRecommenderFlow = ai.defineFlow(
  {
    name: 'materialRecommenderFlow',
    inputSchema: MaterialRecommenderInputSchema,
    outputSchema: MaterialRecommenderOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
