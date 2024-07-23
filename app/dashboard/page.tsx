"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CartesianGrid, XAxis, Bar, BarChart, Line, LineChart } from "recharts";
import {
  ChartTooltipContent,
  ChartTooltip,
  ChartContainer,
} from "@/components/ui/chart";

import SideNav from "@/components/dashboard/side-nav";
import Header from "@/components/dashboard/header";
import { Location, getAllLocations } from "@/lib/firebase/firestore";
import { useEffect, useState } from "react";

export default function Page() {
  const [location, setLocation] = useState<Location[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchlocation = async () => {

      try {
        const fetchedLocation = await getAllLocations();
        setLocation(fetchedLocation);
      } catch (error) {
        setError(error as Error);
      } 
    };
    fetchlocation();
  }, []);
  return (
    <div className="flex min-h-screen w-full">
      <div className="flex flex-col w-full sm:gap-4 sm:py-4 sm:pl-14">
        <SideNav />
        <Header />
        <h1 className="text-2xl font-bold mx-4 my-4 ">Total Progress</h1>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
            <Card x-chunk="dashboard-01-chunk-0">
              <CardHeader>
                <CardTitle>Total Daerah</CardTitle>
                <CardDescription>Total Kabupaten Pilkada 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">15</div>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-1">
              <CardHeader>
                <CardTitle>Jumlah Tercoklit</CardTitle>
                <CardDescription>
                  Total angka yang sudah ter-Coklit
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">
                  {" "}
                  {200} / {200}
                </div>
              </CardContent>
            </Card>
          </div>
          <Card x-chunk="dashboard-01-chunk-7">
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>
                The latest orders placed by customers.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead className="hidden md:table-cell">Date</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">#3210</TableCell>
                    <TableCell>Olivia Martin</TableCell>
                    <TableCell className="hidden md:table-cell">
                      February 20, 2022
                    </TableCell>
                    <TableCell className="text-right">$42.25</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View order</DropdownMenuItem>
                          <DropdownMenuItem>Customer details</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">#3209</TableCell>
                    <TableCell>Ava Johnson</TableCell>
                    <TableCell className="hidden md:table-cell">
                      January 5, 2022
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <div>
              {location.map((loc) => (
                <div key={loc.id}>
                  {/* Access restaurant properties using dot notation */}
                  <h3>{loc.name}</h3>
                  {/* <p>Average Rating: {restaurant.avgRating?.toFixed(1)}</p> */}
                  {/* Display other restaurant details */}
                </div>
              ))}
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
}
