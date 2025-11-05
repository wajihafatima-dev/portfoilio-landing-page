import { Box } from "@mui/material";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
function App() {
  return (
    <>
      <Header />
      <Box
        sx={{
          minHeight: "calc(100vh - 80px)",
          overflow: "hidden",
        }}
      >
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Contact />
        <Footer />
      </Box>
    </>
  );
}

export default App;
