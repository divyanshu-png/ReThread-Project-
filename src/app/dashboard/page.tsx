import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { CheckCircle2, Clock, Truck, FileText, Package, User, Building } from "lucide-react";

// Mock data
const wasteListings = [
  { id: "WL-001", name: "Anika Sharma", type: "Individual", material: "Multi-layered Plastic", weight: "5 kg", date: "2024-08-15", status: "Pending" },
  { id: "WL-002", name: "Green Steps NGO", type: "NGO", material: "PET Bottles", weight: "50 kg", date: "2024-08-16", status: "Approved" },
  { id: "WL-003", name: "Rohan Verma", type: "Individual", material: "Cardboard", weight: "15 kg", date: "2024-08-18", status: "Pending" },
  { id: "WL-004", name: "Waste Warriors", type: "NGO", material: "Textile Waste", weight: "120 kg", date: "2024-08-20", status: "Collected" },
];

const materialRequests = [
    { id: "MR-001", company: "Eco-Innovators Ltd.", material: "Shredded PET", quantity: "200 kg", date: "2024-08-10", status: "Pending"},
    { id: "MR-002", company: "Upcycle Creations", material: "Clean Textile Scraps", quantity: "50 kg", date: "2024-08-11", status: "Delivered"},
    { id: "MR-003", company: "Plastic2Product", material: "Multi-layered Plastic", quantity: "1 Ton", date: "2024-08-14", status: "Scheduled"},
];

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-headline font-bold text-primary">Admin Dashboard</h1>
        <p className="text-muted-foreground">Manage platform activity and logistics.</p>
      </div>

      <Tabs defaultValue="waste-listings">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="waste-listings">
            <Package className="mr-2 h-4 w-4" />
            Waste Listings
          </TabsTrigger>
          <TabsTrigger value="material-requests">
            <FileText className="mr-2 h-4 w-4" />
            Material Requests
          </TabsTrigger>
        </TabsList>
        <TabsContent value="waste-listings">
          <Card>
            <CardHeader>
              <CardTitle>Incoming Waste Listings</CardTitle>
              <CardDescription>
                Review and approve new waste listings for collection.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User / NGO</TableHead>
                    <TableHead>Material</TableHead>
                    <TableHead className="text-right">Weight</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {wasteListings.map((listing) => (
                    <TableRow key={listing.id}>
                      <TableCell>
                        <div className="font-medium flex items-center">
                            {listing.type === 'NGO' ? <Building className="mr-2 h-4 w-4 text-muted-foreground"/> : <User className="mr-2 h-4 w-4 text-muted-foreground"/>}
                            {listing.name}
                        </div>
                        <div className="text-sm text-muted-foreground">{listing.id}</div>
                      </TableCell>
                      <TableCell>{listing.material}</TableCell>
                      <TableCell className="text-right">{listing.weight}</TableCell>
                      <TableCell>{listing.date}</TableCell>
                      <TableCell>
                         <Badge variant={listing.status === 'Pending' ? 'destructive' : listing.status === 'Approved' ? 'default' : 'secondary'} className="capitalize">
                          {listing.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        {listing.status === 'Pending' && (
                           <Button variant="outline" size="sm"><CheckCircle2 className="mr-2 h-4 w-4" />Approve</Button>
                        )}
                         {listing.status === 'Approved' && (
                           <Button variant="outline" size="sm"><Truck className="mr-2 h-4 w-4" />Schedule Pickup</Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="material-requests">
          <Card>
            <CardHeader>
              <CardTitle>Company Material Requests</CardTitle>
              <CardDescription>
                Verify company requests and schedule material delivery.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Company</TableHead>
                    <TableHead>Material</TableHead>
                    <TableHead className="text-right">Quantity</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {materialRequests.map((request) => (
                    <TableRow key={request.id}>
                      <TableCell>
                        <div className="font-medium">{request.company}</div>
                        <div className="text-sm text-muted-foreground">{request.id}</div>
                      </TableCell>
                      <TableCell>{request.material}</TableCell>
                      <TableCell className="text-right">{request.quantity}</TableCell>
                      <TableCell>{request.date}</TableCell>
                      <TableCell>
                        <Badge variant={request.status === 'Pending' ? 'destructive' : request.status === 'Scheduled' ? 'default' : 'secondary'} className="capitalize">
                          {request.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        {request.status === 'Pending' && (
                           <Button variant="outline" size="sm"><CheckCircle2 className="mr-2 h-4 w-4" />Verify & Schedule</Button>
                        )}
                         {request.status === 'Scheduled' && (
                           <Button variant="outline" size="sm"><Truck className="mr-2 h-4 w-4" />Dispatch</Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
