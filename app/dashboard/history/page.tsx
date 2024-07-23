/**
 * v0 by Vercel.
 * @see https://v0.dev/t/gVMgIo22CNa
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import SideNav from "@/components/dashboard/side-nav";
import Header from "@/components/dashboard/header";
import Image from "next/image";
import { DeleteInvoice, UpdateInvoice } from "@/components/buttons";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <SideNav />
      <Header />

      <div className="flex-1 sm:ml-10">
        <div>
          <div className="flex flex-col gap-6 p-4 md:p-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold ml-2">Total Progress</h1>

              <div className="gap-1">
                <Link href={"/dashboard/history/create"}>
                  <Button size="sm" className="h-8  gap-1 mx-2 bg-blue-600">
                    <AddIcon className="h-4 w-4" />
                    <span className="hidden md:inline text-white">Add</span>
                  </Button>
                </Link>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                      <FilterIcon className="h-4 w-4" />
                      <span className="hidden md:inline">Filter</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>
                      All Projects
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      In Progress
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Completed
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Content di Mobile */}
            <div className="mt-6 flow-root">
              <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                  <div className="md:hidden">
                    {/* {invoices?.map((invoice) => ( */}
                    <div
                      key="12"
                      className="mb-2 w-full rounded-md bg-white p-4"
                    >
                      <div className="flex items-center justify-between border-b pb-4">
                        <div>
                          <div className="mb-2 flex items-center">
                            <p>Nama: Ceb</p>
                          </div>
                          <p className="text-sm text-gray-500">halo @email</p>
                        </div>
                      </div>
                      <div className="flex w-full items-center justify-between pt-4">
                        <div>
                          <p className="text-xl font-medium">1200</p>
                          <p>12 Jun 2024</p>
                        </div>
                        <div className="flex justify-end gap-2">
                          <UpdateInvoice id="12" />
                          <DeleteInvoice id="12" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content di Desktop */}
                  <table className="hidden min-w-full text-gray-900 md:table">
                    <thead className="rounded-lg text-left text-sm font-normal">
                      <tr>
                        <th
                          scope="col"
                          className="px-4 py-5 font-medium sm:pl-6"
                        >
                          Customer
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium">
                          Email
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium">
                          Amount
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium">
                          Date
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium">
                          Status
                        </th>
                        <th scope="col" className="relative py-3 pl-6 pr-3">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>

                    <tbody className="bg-white">
                      {/* {invoices?.map((invoice) => ( */}
                      <tr
                        key="12"
                        className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                      >
                        <td className="whitespace-nowrap py-3 pl-6 pr-3">
                          <div className="flex items-center gap-3">
                            {/* <Image
                                src={invoice.image_url}
                                className="rounded-full"
                                width={28}
                                height={28}
                                alt={`${invoice.name}'s profile picture`}
                              /> */}
                            <p>Nama: Ceb</p>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-3">Email</td>
                        <td className="whitespace-nowrap px-3 py-3">2000</td>
                        <td className="whitespace-nowrap px-3 py-3">
                          12 Juni 2024
                        </td>
                        <td className="whitespace-nowrap py-3 pl-6 pr-3">
                          <div className="flex justify-end gap-3">
                            <UpdateInvoice id={"12"} />
                            <DeleteInvoice id={"12"} />
                          </div>
                        </td>
                      </tr>
                      {/* ))} */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FilePenIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  );
}

function FilterIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function AddIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="#ffffff"
      viewBox="0 0 24 24"
    >
      <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
    </svg>
  );
}
