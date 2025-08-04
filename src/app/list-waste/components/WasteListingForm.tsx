
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const formSchema = z.object({
  userType: z.enum(["individual", "ngo"], {
    required_error: "You need to select a user type.",
  }),
  name: z.string().min(2, "Name must be at least 2 characters."),
  address: z.string().min(10, "Address must be at least 10 characters."),
  materialType: z.string({
    required_error: "Please select a material type.",
  }),
  description: z.string().min(10, "Please provide a brief description.").max(200, "Description is too long."),
  weight: z.coerce.number().min(1, "Weight must be at least 1 kg."),
  pickupDate: z.date({
    required_error: "A pickup date is required.",
  }),
  pickupTime: z.string({
    required_error: "Please select a pickup time.",
  }),
  photo: z.any().optional(),
})

export function WasteListingForm() {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userType: "individual",
      name: "",
      address: "",
      materialType: "",
      description: "",
      weight: 1,
      pickupTime: "",
      photo: undefined,
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data)
    toast({
      title: "Request Submitted!",
      description: "Thank you! Your waste listing has been received and is pending review.",
      className: "bg-primary text-primary-foreground",
    })
    form.reset()
  }

  return (
    <Card className="shadow-lg">
       <CardHeader>
        <CardTitle className="font-headline text-2xl">Collection Details</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="userType"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Are you an individual or an NGO?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="individual" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Individual User
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="ngo" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Registered NGO
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name or NGO Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., John Doe or 'Green Earth Foundation'" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pickup Address</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Full address for pickup" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="materialType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type of Waste Material</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a material" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="multilayered-plastic">Multilayered Plastic (e.g., food packets)</SelectItem>
                      <SelectItem value="pet-bottles">PET Bottles</SelectItem>
                      <SelectItem value="paper-cardboard">Paper & Cardboard</SelectItem>
                      <SelectItem value="textile">Textile Waste</SelectItem>
                      <SelectItem value="other-plastic">Other Plastics</SelectItem>
                      <SelectItem value="e-waste">E-Waste</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Choose 'Multilayered Plastic' for items like chip bags and wrappers.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Material Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="e.g., Clean and dry milk packets, approx 50 pieces" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Approximate Weight (in kg)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g., 5" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="photo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Attach a Photo (Optional)</FormLabel>
                  <FormControl>
                    <Input type="file" {...field} />
                  </FormControl>
                  <FormDescription>
                    A picture helps our team assess the materials.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <FormField
                control={form.control}
                name="pickupDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Pickup Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full sm:w-[240px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date < new Date(new Date().setDate(new Date().getDate() - 1))
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="pickupTime"
                render={({ field }) => (
                  <FormItem className="flex flex-col mt-8 sm:mt-0">
                    <FormLabel>Pickup Time</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full sm:w-[240px]">
                          <SelectValue placeholder="Select a time slot" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="9am-12pm">9:00 AM - 12:00 PM</SelectItem>
                        <SelectItem value="12pm-3pm">12:00 PM - 3:00 PM</SelectItem>
                        <SelectItem value="3pm-6pm">3:00 PM - 6:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" size="lg">Schedule Pickup</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
