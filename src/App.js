import "./App.css";
import Aboutus from "./component-files/Aboutus";
import Content from "./component-files/Content";
import Footer from "./component-files/Footer";
import Header from "./component-files/Header";
// import AboutUs from "./component-files/AboutUs";
// import Practices from "./component-files/Practices";
// import Footer from "./component-files/Footer";
// import Whyus from "./component-files/Whyus";

function App() {
  return (
    <div>
      <Header />
      <Content/>
      <Aboutus/>
      <Footer/>
    </div>
  );
}

export default App;
