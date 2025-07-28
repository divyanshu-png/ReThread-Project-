"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { getAiRecommendations } from "@/app/actions";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Sparkles } from "lucide-react";

const formSchema = z.object({
  userHistory: z.string().min(20, "Please provide more details for better recommendations."),
  industryTrends: z.string().min(20, "Please describe some current industry trends."),
});

type FormValues = z.infer<typeof formSchema>;

export function MaterialRecommender() {
  const [recommendations, setRecommendations] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userHistory: "e.g., A startup in Delhi focused on creating fashion accessories from post-consumer waste. We have primarily worked with PET bottles and single-use plastic bags. We are looking for durable but flexible materials.",
      industryTrends: "e.g., There is a growing demand for vegan leather alternatives. Multi-layered plastics (MLPs) are a major waste problem, and innovative solutions are being sought. Consumers are increasingly interested in products with a transparent, sustainable story.",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    setRecommendations(null);
    const result = await getAiRecommendations(values);
    setRecommendations(result.recommendedMaterials);
    setIsLoading(false);
  }

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Generate Your Recommendations</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="userHistory"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold">Your Profile / History</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your company, past projects, and material needs..."
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    The more detail you provide, the better the recommendations.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="industryTrends"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold">Current Industry Trends</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="What's new in sustainability, recycling, and upcycling?"
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Mention popular materials, new technologies, or consumer demands.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} size="lg">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Get Recommendations
                </>
              )}
            </Button>
          </form>
        </Form>

        {recommendations && (
          <div className="mt-12">
            <h3 className="text-2xl font-headline font-bold mb-4 flex items-center">
              <Sparkles className="mr-3 h-6 w-6 text-primary" />
              Your Recommended Materials
            </h3>
            <Card className="bg-secondary/50 p-6">
               <div className="prose prose-sm max-w-none whitespace-pre-wrap">
                 {recommendations}
               </div>
            </Card>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
