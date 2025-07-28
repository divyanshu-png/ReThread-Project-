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

const formSchema = z.object({
  companyName: z.string().min(2, "Company name must be at least 2 characters."),
  gstNumber: z.string().length(15, "GST Number must be 15 characters long."),
  itrNumber: z.string().min(5, "Please enter a valid ITR acknowledgement number."),
  requirements: z.string().min(10, "Please describe your material requirements."),
});

export function MaterialRequestForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      gstNumber: "",
      itrNumber: "",
      requirements: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
    toast({
      title: "Request Submitted!",
      description: "Your material request has been sent to our team for verification.",
      className: "bg-primary text-primary-foreground",
    });
    form.reset();
  }

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-xl">Company Information</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Registered Company Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Acme Upcycling Pvt. Ltd." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gstNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>GST Number</FormLabel>
                  <FormControl>
                    <Input placeholder="15-digit GSTIN" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="itrNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Latest ITR Acknowledgement No.</FormLabel>
                  <FormControl>
                    <Input placeholder="ITR-V Acknowledgement Number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="requirements"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Material Requirements</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Describe the type, quantity, and desired characteristics of the material you need." {...field} />
                  </FormControl>
                   <FormDescription>
                    e.g., "Looking for 500kg of shredded PET plastic, clear or light blue."
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">Submit Request</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
