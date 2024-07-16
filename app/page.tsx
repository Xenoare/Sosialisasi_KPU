/**
 * v0 by Vercel.
 * @see https://v0.dev/t/NGGXcWYkdzD
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";
interface ClassProps {
  className?: string; // Optional className prop (string)
}

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";
import Definition from "@/components/Definition";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <Header />
        <Hero />
        <Definition />

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="grid gap-4">
                <div className="grid grid-cols-[auto_1fr] items-center gap-4">
                  <div className="rounded-full bg-primary p-2 text-primary-foreground">
                    <LayersIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">
                      Comprehensive Curriculum
                    </h3>
                    <p className="text-muted-foreground">
                      Explore a wide range of topics and subjects to expand your
                      knowledge.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-[auto_1fr] items-center gap-4">
                  <div className="rounded-full bg-primary p-2 text-primary-foreground">
                    <VideoIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Interactive Lessons</h3>
                    <p className="text-muted-foreground">
                      Engage with multimedia content and hands-on activities to
                      deepen your understanding.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-[auto_1fr] items-center gap-4">
                  <div className="rounded-full bg-primary p-2 text-primary-foreground">
                    <AwardIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Certifications</h3>
                    <p className="text-muted-foreground">
                      Earn recognized certificates to showcase your
                      achievements.
                    </p>
                  </div>
                </div>
              </div>
              <Image
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  What Our Learners Say
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our satisfied students about their experiences with
                  our educational content.
                </p>
              </div>
              <div className="grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="flex flex-col justify-between p-3">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="text-sm font-medium">John Doe</h4>
                        <p className="text-xs text-muted-foreground">
                          Software Engineer
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      The educational content on this platform has been\n
                      invaluable in helping me expand my knowledge and\n skills.
                      Highly recommended!
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <StarIcon className="h-4 w-4 text-yellow-500" />
                    <StarIcon className="h-4 w-4 text-yellow-500" />
                    <StarIcon className="h-4 w-4 text-yellow-500" />
                    <StarIcon className="h-4 w-4 text-yellow-500" />
                    <StarIcon className="h-4 w-4 text-yellow-500" />
                  </div>
                </Card>
                <Card className="flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>SA</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="text-sm font-medium">Sarah Anderson</h4>
                        <p className="text-xs text-muted-foreground">
                          Marketing Manager
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      The educational content on this platform has been\n
                      invaluable in helping me expand my knowledge and\n skills.
                      Highly recommended!
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <StarIcon className="h-4 w-4 text-yellow-500" />
                    <StarIcon className="h-4 w-4 text-yellow-500" />
                    <StarIcon className="h-4 w-4 text-yellow-500" />
                    <StarIcon className="h-4 w-4 text-yellow-500" />
                    <StarIcon className="h-4 w-4 text-yellow-500" />
                  </div>
                </Card>
                <Card className="flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>MJ</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="text-sm font-medium">Michael Johnson</h4>
                        <p className="text-xs text-muted-foreground">
                          Business Analyst
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      The educational content on this platform has been\n
                      invaluable in helping me expand my knowledge and\n skills.
                      Highly recommended!
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <StarIcon className="h-4 w-4 text-yellow-500" />
                    <StarIcon className="h-4 w-4 text-yellow-500" />
                    <StarIcon className="h-4 w-4 text-yellow-500" />
                    <StarIcon className="h-4 w-4 text-yellow-500" />
                    <StarIcon className="h-4 w-4 text-yellow-500" />
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-md space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Enroll Now
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Sign up to access our comprehensive educational content and
                start your learning journey.
              </p>
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-lg flex-1"
                />
                <Button type="submit">Enroll</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      {/* <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Acme Education. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy
          </Link>
        </nav>
      </footer> */}
      <Footer />
    </div>
  );
}

function AwardIcon(props: { className?: string }) {
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
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
      <circle cx="12" cy="8" r="6" />
    </svg>
  );
}

function LayersIcon(props: ClassProps) {
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
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  );
}

function StarIcon(props: ClassProps) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function VideoIcon(props: ClassProps) {
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
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  );
}
