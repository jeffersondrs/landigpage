import First from "@/components/first/First";
import Footer from "@/components/footer/Footer";
import Four from "@/components/four/Four";
import Second from "@/components/second/Second";
import Intro from "@/components/sectionintro/Intro";
import Third from "@/components/third/Third";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between scroll-smooth">
      <Intro />
      <First />
      <Second />
      <Third />
      <Four />
      <Footer />
    </main>
  );
}
