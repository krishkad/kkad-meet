import Hero from "@/components/shared/hero";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      <div className="max-w-wrapper">
        <Hero />
        <div className="pt-[80px] pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 pb-10">
            <div className="w-full flex flex-col gap-4">
              <span className="text-sm font-bold">For Friends & Family</span>
              <h2 className="text-4xl md:text-6xl font-bold">Meet Your Family <br />and Friends and <br />have Fun</h2>
              <span className="text-sm font-semibold text-muted-foreground md:w-3/5">Get Started. whether you’re new to video calling an experience face to face conversation, and chat  </span>
            </div>
            <div className="w-full flex flex-col">
              <div className="w-full min-h-[600px] max-h p-5 md:p-8 bg-[#FBEEAC] md:mt-64 rounded-3xl max-md:mt-10">
                <span className="text-sm font-bold">Step 1</span>
                <h2 className="text-2xl md:text-3xl font-bold mt-8">Create Account </h2>
                <p className="font-semibold text-muted-foreground pt-4 text-sm">Create account width E-mail and start connecting. </p>
                <span className="font-semibold text-muted-foreground text-sm">Meet to your Loved Once and have Live interaction with seamless experience</span>

                <div className="relative w-full h-[250px] mt-5">
                  <Image src={'create-account.svg'} className="object-contain" fill sizes="height:100%, width:100%" alt="img" />
                </div>

                <div className="mt-10">
                  <Button variant={'ghost'} className="hover:bg-transparent font-bold">Learn More</Button>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col">
              <div className="w-full min-h-[600px] max-h p-5 md:p-8 bg-[#AED2FF] md:-mt-64 rounded-3xl">
                <span className="text-sm font-bold">Step 2</span>
                <h2 className="text-2xl md:text-3xl font-bold mt-8">Create room & share link</h2>
                <p className="font-semibold text-muted-foreground pt-4 text-sm">Create account width E-mail and start connecting.</p>
                <span className="font-semibold text-muted-foreground text-sm">Meet to your Loved Once and have Live interaction with seamless experience</span>

                <div className="relative w-full h-[250px] mt-5">
                  <Image src={'four-mobile.svg'} className="object-contain" fill sizes="height:100%, width:100%" alt="img" />
                </div>

                <div className="mt-10">
                  <Button variant={'ghost'} className="hover:bg-transparent font-bold">Learn More</Button>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col">
              <div className="w-full min-h-[600px] max-h p-5 md:p-8 bg-[#92E3A9] rounded-3xl">
                <span className="text-sm font-bold">Step 3</span>
                <h2 className="text-2xl md:text-3xl font-bold mt-8">Enter the room and Enjoy </h2>
                <p className="font-semibold text-muted-foreground pt-4 text-sm">Enter the room and instantly enjoy smooth video calls with our platform. Effortless connections for uninterrupted conversations. Join the conversation with ease and experience seamless communication.</p>

                <div className="relative w-full h-[250px] mt-5">
                  <Image src={'single-phone.svg'} className="object-contain" fill sizes="height:100%, width:100%" alt="img" />
                </div>

                <div className="mt-10">
                  <Button variant={'ghost'} className="hover:bg-transparent font-bold">Learn More</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
