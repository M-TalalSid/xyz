import Footer from "./components/footer";
import Header from "./components/header";
import HeroSection from "./components/heroSection";
import RecommendedCars from "./components/recommendedCars";


export function Home() {
  return (
    <div>
      <Header/>
      <HeroSection />
      <RecommendedCars />
      <Footer />
    </div>
  );
}
export default Home;
