import Header from "../components/header";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header hideNav={true} />
      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center space-y-12">
          <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-900">
            Welcome to Netram Eye Institute
          </h1>
          <p className="text-xl text-center text-gray-600 max-w-2xl">
            Experience life in high definition with our world-class LASIK eye
            care services
          </p>

          <div className="w-full max-w-md">
            <Link href="/lasik" className="w-full">
              <Button
                className="w-full h-32 text-2xl font-semibold"
                variant="outline"
              >
                LASIK Treatment
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
