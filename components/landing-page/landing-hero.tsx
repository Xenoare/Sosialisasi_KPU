import Link from "next/link";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-36">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Situs Sosialisasi Pilkada 2024 Provinsi Lampung
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Sebuah layanan situs dari KPU Provinsi Lampung sebagai panduan
                dalam Pilkada 2024
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="https://cekdptonline.kpu.go.id/"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Cek Status DPT
                </Link>
              </div>
            </div>
          </div>
          <Image
            src="/Maskot.png"
            width="550"
            height="310"
            alt="Hero"
            style={{
              objectFit: "contain",
            }}
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          />
        </div>
      </div>
    </section>
  );
}
