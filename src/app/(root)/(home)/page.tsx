import Hero from "@/components/shared/hero";
import PhoneBoard from "@/components/shared/phone-board";

export default function Home() {
  return (
    <main className="w-full">
      <div className="max-w-wrapper">
        <Hero />
        <div className="pt-[150px] pb-10">
          <div className="flex flex-col jusitfy-center items-center gap-1 pb-10">
            <span className="text-3xl font-bold text-center">Lorem, ipsum dolor.</span>
            <span className="text-sm md:text-xl text-center">Lorem ipsum dolor sit amet consectetur..</span>
          </div>
          <PhoneBoard />
        </div>
      </div>
    </main>
  );
}
