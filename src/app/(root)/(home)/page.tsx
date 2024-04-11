import Hero from "@/components/shared/hero";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      <div className="">
        <Hero />
        <div className="pt-[80px] pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 pb-10 max-w-wrapper">
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
          <div className="w-full max-w-wrapper">
            <div className="w-full flex max-md:flex-col h-max md:h-[500px] rounded-2xl bg-[#1C1678]">
              <div className="w-full md:w-1/2 flex flex-col p-5 md:p-10">
                <div className="w-full">
                  <h1 className="text-3xl md:text-4xl font-bold text-white">Bringing Faces Closer: <br />Our Video Calling <br />Platform</h1>
                  <ul className="pl-10 md:pl-20 mt-10 flex flex-col gap-1">
                    <span className="text-sm font-semibold text-white">Universal device support.</span>
                    <span className="text-sm font-semibold text-white">Ironclad security measures.</span>
                    <span className="text-sm font-semibold text-white">Seamless in-call messaging.</span>
                  </ul>
                </div>
              </div>
              <div className="relative w-full h-[350px] md:w-1/2 md:h-full flex justify-end overflow-hidden">
                <Image src={'photo-gallery.svg'} fill sizes="height:100%,width:100%" className="" alt="img" />
              </div>
            </div>
          </div>
          <div className="w-full mt-20 bg-[#272829]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 pb-10  max-w-wrapper pt-10">
              <div className="w-full flex flex-col gap-4">
                <span className="text-sm font-bold text-white">For Friends & Family</span>
                <h2 className="text-4xl md:text-6xl font-bold text-white">Meet Your Family <br />and Friends and <br />have Fun</h2>
                <span className="text-sm font-semibold text-zinc-300 md:w-3/5">Get Started. whether you&apos;re new to video calling an experience face to face conversation, and chat  </span>
              </div>
              <div className="w-full flex flex-col">
                <div className="w-full min-h-[600px] max-h p-5 md:p-8 bg-[#EBEBEB] md:mt-64 rounded-3xl max-md:mt-10">
                  <span className="text-sm font-bold">Meet & Chat</span>
                  <h2 className="text-2xl md:text-3xl font-bold mt-8">Crystal-Clear Video Quality</h2>
                  <p className="font-semibold text-muted-foreground pt-4 text-sm">Experience pristine video quality with our platform, ensuring every call is sharp and clear, even in low bandwidth situations.</p>

                  <div className="relative w-full h-[250px] mt-5">
                    <Image src={'meeting.svg'} className="object-contain" fill sizes="height:100%, width:100%" alt="img" />
                  </div>

                  <div className="mt-10">
                    <Button variant={'ghost'} className="hover:bg-transparent font-bold">Learn More</Button>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col">
                <div className="w-full min-h-[600px] max-h p-5 md:p-8 bg-[#F9B572] md:-mt-64 rounded-3xl">
                  <span className="text-sm font-bold">Meet & Chat</span>
                  <h2 className="text-2xl md:text-3xl font-bold mt-8">Secure End-to-End Encryption</h2>
                  <p className="font-semibold text-muted-foreground pt-4 text-sm">Rest easy knowing your conversations are fully protected with our platform's end-to-end encryption. Your privacy is paramount, ensuring that only you and your intended recipients have access to your calls.</p>

                  <div className="relative w-full h-[250px] mt-5">
                    <Image src={'secure.svg'} className="object-contain" fill sizes="height:100%, width:100%" alt="img" />
                  </div>

                  <div className="mt-10">
                    <Button variant={'ghost'} className="hover:bg-transparent font-bold">Learn More</Button>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col">
                <div className="w-full min-h-[600px] max-h p-5 md:p-8 bg-[#E5E0FF] rounded-3xl">
                  <span className="text-sm font-bold">Meet & Chat</span>
                  <h2 className="text-2xl md:text-3xl font-bold mt-8">Intuitive Interface</h2>
                  <p className="font-semibold text-muted-foreground pt-4 text-sm">Navigate our user-friendly interface effortlessly, making video calls a breeze for users of all levels. With simple controls and smooth transitions, connecting with loved ones or colleagues has never been easier.</p>

                  <div className="relative w-full h-[250px] mt-5">
                    <Image src={'interface.svg'} className="object-contain" fill sizes="height:100%, width:100%" alt="img" />
                  </div>

                  <div className="mt-10">
                    <Button variant={'ghost'} className="hover:bg-transparent font-bold">Learn More</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-10 sm:mt-28">
            <div className="max-w-wrapper">
              <div className="w-full flex max-md:flex-col md:items-center">
                <div className="w-full md:w-1/2">
                  <h1 className="text-3xl sm:text-4xl font-bold">Your Gateway to Seamless <br />Video Conversations</h1>
                  <span className="text-sm font-semibold text-muted-foreground sm:w-3/5 pt-5"> Effortless video conversations with crystal-clear quality. Connect seamlessly with friends, family, and colleagues worldwide. Welcome to the future of virtual communication!</span>
                  <div className="pt-5">
                    <Button variant={'ghost'}>Learn More</Button>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="w-full h-[350px] relative">
                    <Image src={'/enjoy-call.svg'} fill sizes="height:100%,width:100%" className="object-contain" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
