import Hero from "@/components/shared/hero";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
// import { MdVerified } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";

export default function Home() {
  return (
    <main className="w-full">
      <div className="">
        <Hero />
        <div className="pt-[80px] pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-10 pb-10 max-w-wrapper">
            <div className="w-full flex flex-col gap-4">
              <span className="text-sm font-bold">For Friends & Family</span>
              <h2 className="text-4xl xl:text-6xl font-bold">Meet Your Family <br />and Friends and <br />have Fun</h2>
              <span className="text-sm font-semibold text-muted-foreground md:w-3/5">Get Started. whether you&apos;re new to video calling an experience face to face conversation, and chat  </span>
            </div>
            <div className="w-full flex flex-col">
              <div className="w-full max-h p-5 md:p-8 bg-[#F3FDE8] md:mt-64 rounded-3xl max-md:mt-10">
                <span className="text-sm font-bold">Step 1</span>
                <h2 className="text-2xl md:text-3xl font-bold mt-2 sm:mt-4">Create Account </h2>
                <p className="font-semibold text-muted-foreground pt-2 sm:pt-4 text-sm">Create account with E-mail and start connecting. Meet to your Loved Once and have Live interaction with seamless experience</p>

                <div className="relative w-full h-[250px] lg:h-[350px] mt-5">
                  <Image src={'/create-account-people.png'} priority className="object-contain" fill sizes="height:100%, with:100%" alt="img" />
                </div>


              </div>
            </div>
            <div className="w-full flex flex-col">
              <div className="w-full max-h max-h p-5 md:p-8 bg-[#F3F3F3] md:-mt-96 rounded-3xl">
                <span className="text-sm font-bold">Step 2</span>
                <h2 className="text-2xl md:text-3xl font-bold  mt-2 sm:mt-4">Create room & share link</h2>
                <p className="font-semibold text-muted-foreground pt-2 sm:pt-4 text-sm">Effortlessly create rooms and share call links with ease, simplifying the process of initiating conversations and connecting with others.</p>

                <div className="relative w-full h-[250px] lg:h-[350px] mt-5">
                  <Image src={'/box-photo-gallery.png'} priority className="object-contain" fill sizes="height:100%, with:100%" alt="img" />
                </div>


              </div>
            </div>
            <div className="w-full flex flex-col">
              <div className="w-full max-h max-h p-5 md:p-8 bg-[#FEFDED] rounded-3xl">
                <span className="text-sm font-bold">Step 3</span>
                <h2 className="text-2xl md:text-3xl font-bold  mt-2 sm:mt-4">Enter the room and Enjoy </h2>
                <p className="font-semibold text-muted-foreground pt-2 sm:pt-4 text-sm">Step into the room and cherish memorable moments with your loved once, creating lasting memories filled with laughter and joy.</p>

                <div className="relative w-full h-[250px] lg:h-[350px] mt-5">
                  <Image src={'/enjoy.png'} priority className="object-contain" fill sizes="height:100%, with:100%" alt="img" />
                </div>


              </div>
            </div>
          </div>
          <div className="w-full max-w-wrapper">
            <div className="w-full flex max-md:flex-col h-max md:h-[500px] rounded-2xl bg-[#1C1678] overflow-hidden">
              <div className="w-full md:w-1/2 flex flex-col p-5 xl:p-10">
                <div className="w-full">
                  <h1 className="text-3xl md:text-4xl font-bold text-white">Bringing Faces Closer <br />Our Video Calling <br />Platform</h1>
                  <ul className="mt-10 flex flex-col gap-2">
                    <span className="text-sm font-semibold text-white flex items-center gap-3">
                      <MdVerified className="w-4 h-4" />
                      Universal device support.</span>
                    <span className="text-sm font-semibold text-white flex items-center gap-3">
                      <MdVerified className="w-4 h-4" />
                      Ironclad security measures.</span>
                    <span className="text-sm font-semibold text-white flex items-center gap-3">
                      <MdVerified className="w-4 h-4" />
                      Seamless in-call messaging.</span>
                  </ul>
                </div>
              </div>
              <div className="relative w-full h-[350px] md:w-1/2 md:h-full flex justify-end overflow-hidden">
                <Image src={'/photo-gallery.png'} priority fill sizes="height:100%,with:100%" className="object-cover overflow-hidden" alt="img" />
              </div>
            </div>
          </div>
          <div className="w-full mt-20 bg-[#272829]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-10 pb-10  max-w-wrapper pt-10">
              <div className="w-full flex flex-col gap-4">
                <span className="text-sm font-bold text-white">For Friends & Family</span>
                <h2 className="text-4xl xl:text-6xl font-bold text-white">Elevate Your Video <br />Calling Experience</h2>
                <span className="text-sm font-semibold text-zinc-300 md:w-3/5">Get Started. whether you&apos;re new to video calling an experience face to face conversation, and chat  </span>
              </div>
              <div className="w-full flex flex-col">
                <div className="w-full max-h max-h p-5 md:p-8 bg-[#F9F9F9] md:mt-64 rounded-3xl max-md:mt-10">
                  <span className="text-sm font-bold">Meet & Chat</span>
                  <h2 className="text-2xl md:text-3xl font-bold  mt-2 sm:mt-4">Crystal-Clear Video Quality</h2>
                  <p className="font-semibold text-muted-foreground pt-2 sm:pt-4 text-sm">Experience pristine video quality with our platform, ensuring every call is sharp and clear, even in low bandwith situations.</p>

                  <div className="relative w-full h-[250px] mt-5">
                    <Image src={'meeting.svg'} priority className="object-contain" fill sizes="height:100%, with:100%" alt="img" />
                  </div>


                </div>
              </div>
              <div className="w-full flex flex-col">
                <div className="w-full max-h max-h p-5 md:p-8 bg-[#F9B572] md:-mt-96 rounded-3xl">
                  <span className="text-sm font-bold">Meet & Chat</span>
                  <h2 className="text-2xl md:text-3xl font-bold  mt-2 sm:mt-4">Secure End-to-End Encryption</h2>
                  <p className="font-semibold text-muted-foreground pt-2 sm:pt-4text-sm">Your conversations are fully protected with our end-to-end encryption. Rest easy knowing your privacy is paramount.</p>

                  <div className="relative w-full h-[250px] mt-5">
                    <Image src={'secure.svg'} priority className="object-contain" fill sizes="height:100%, with:100%" alt="img" />
                  </div>


                </div>
              </div>
              <div className="w-full flex flex-col">
                <div className="w-full max-h max-h p-5 md:p-8 bg-[#E5E0FF] rounded-3xl">
                  <span className="text-sm font-bold">Meet & Chat</span>
                  <h2 className="text-2xl md:text-3xl font-bold  mt-2 sm:mt-4">Intuitive Interface</h2>
                  <p className="font-semibold text-muted-foreground pt-2 sm:pt-4 text-sm">Easily navigate our user-friendly interface for seamless video calls. Simple controls make connecting with loved ones or colleagues a breeze.</p>

                  <div className="relative w-full h-[250px] mt-5">
                    <Image src={'interface.svg'} priority className="object-contain" fill sizes="height:100%, with:100%" alt="img" />
                  </div>


                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-10 sm:mt-28">
            <div className="max-w-wrapper">
              <div className="w-full flex max-md:flex-col md:items-center max-xl:gap-10">
                <div className="w-full md:w-1/2">
                  <h1 className="text-3xl sm:text-4xl font-bold">Your Gateway to Seamless <br />Video Conversations</h1>
                  <p className="text-sm font-semibold text-muted-foreground max-sm:w-full pt-2 sm:pt-5">Effortless video conversations with crystal-clear quality. Connect seamlessly with friends, family, and colleagues worldwide. Welcome to the future of virtual communication!</p>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="w-full max-xl:p-10 h-[350px] relative">
                    <Image src={'/enjoy-call-2.svg'} priority fill sizes="height:100%,with:100%" className="object-contain" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full py-20">
            <div className="w-full flex flex-col items-center gap-2 sm:gap-4 sm:py-20">
              <h1 className="text-3xl sm:text-5xl font-bold text-center">Get Started <br />with  <span className="text-primary">
                Talky
              </span></h1>
              <Link href={'/event'}>
                <Button className="rounded-full px-5">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
