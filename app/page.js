import Banner from "./Components/Banner/page";
import Jobs from "./pages/Jobs/page";

export default function Home() {
  return (
    <div className="">
      <main className="container">
        <Banner></Banner>
        
        <Jobs></Jobs>
      </main>
    </div>
  );
}
