
import CallToAction from "./_components/CallToAction";
import Features from "./_components/Features";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Pricing from "./_components/Pricing";
import Questions from "./_components/Questions";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features/>
      <Pricing />
      <Questions/>
      <CallToAction />
    </>
  );
}
