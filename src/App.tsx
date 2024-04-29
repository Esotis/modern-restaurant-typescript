import {
  AboutUs,
  Awards,
  Chef,
  Contact,
  Footer,
  Gallery,
  Header,
  Navbar,
  SpecialMenu,
  Video,
} from "./components/index";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Video />
      <Awards />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
