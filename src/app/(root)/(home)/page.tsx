import Hero from "@/components/shared/hero";

export default function Home() {
  return (
    <main className="w-full">
      <div className="max-w-wrapper">
        <Hero />
        <div className="pt-[80px] pb-10">
          <div className="flex flex-col jusitfy-center items-center gap-1 pb-10">
            <span className="text-3xl font-bold text-center">15 Million Fans Love</span>
            <span className="text-sm text-center lg:w-1/2">Discover Kkad Meet: the cherished video calling choice of over 15 million users globally. With pristine audio and video quality, Kkad Meet effortlessly connects friends, families, and colleagues. Join the millions who love its user-friendly interface and reliable performance.</span>
          </div>
        </div>
      </div>
    </main>
  );
}
