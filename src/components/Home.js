import CotReport from "./CotReport";
import Header from "./Header";
import { CotProvider } from "../contexts";

function Home() {
  return (
    <div className="wrapper">
      <CotProvider>
        <Header />
        <CotReport />
      </CotProvider>
    </div>
  );
}

export default Home;
