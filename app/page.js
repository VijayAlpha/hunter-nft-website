import {
  Hero,
  About,
  Collections,
  Team,
  FAQ,
  Footer,
  Roadmap,
} from "./components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <About />
      <Collections />
      {/* <Roadmap /> */}
      <Team />
      <FAQ />
      <Footer />
    </main>
  );
}
