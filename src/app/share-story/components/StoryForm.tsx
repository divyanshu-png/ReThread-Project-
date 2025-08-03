
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

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
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  location: z.string().min(2, "Please enter a location."),
  role: z.string({ required_error: "Please select your role." }),
  story: z.string().min(50, "Your story should be at least 50 characters long."),
  media: z.any().optional(),
});

export function StoryForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      location: "",
      story: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
    toast({
      title: "Story Submitted!",
      description: "Thank you for sharing your story with us. It's now pending review by our team.",
      className: "bg-primary text-primary-foreground",
    });
    form.reset();
  }

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-xl">Your Details</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Rajeshwari Devi" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Location</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Varanasi, Uttar Pradesh" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>I am a...</FormLabel>
                   <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="artisan">Artisan</SelectItem>
                      <SelectItem value="weaver">Weaver</SelectItem>
                      <SelectItem value="contributor">Waste Contributor</SelectItem>
                      <SelectItem value="recycler">Recycler / Innovator</SelectItem>
                       <SelectItem value="supporter">Supporter / User</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="story"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Story</FormLabel>
                  <FormControl>
                    <Textarea className="min-h-[150px]" placeholder="Share your experience, your craft, or what this initiative means to you..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="media"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Add a Photo or Video (Optional)</FormLabel>
                  <FormControl>
                    <Input type="file" accept="image/*,video/*" {...field} />
                  </FormControl>
                   <FormDescription>
                    A picture or a short video can bring your story to life.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">Submit My Story</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
