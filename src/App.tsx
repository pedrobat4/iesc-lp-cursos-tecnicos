import { useReveal } from "./hooks/useReveal";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Courses } from "./components/Courses";
import { Benefits } from "./components/Benefits";
import { WhyIesc } from "./components/WhyIesc";
import { Matricula } from "./components/Matricula";
import { Footer } from "./components/Footer";
import { WhatsappFloat } from "./components/WhatsappFloat";

export default function App() {
  useReveal();
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Courses />
        <Benefits />
        <WhyIesc />
        <Matricula />
      </main>
      <Footer />
      <WhatsappFloat />
    </div>
  );
}
