import Footer from "./components/Footer.jsx";
import Clientes from "./pages/partials/Clientessection";
import Contatos from "./pages/partials/Contatossection.jsx";
import Equipe from "./pages/partials/Equipesection";
import Home from "./pages/partials/Homesection";
import Porfolio from "./pages/partials/Portfoliosection.jsx";
import Servico from "./pages/partials/Servicossection";

function App() {
  return (
    <>
      <Home />
      <Servico />
      <Equipe />
      <Clientes />
      <Porfolio />
      <Contatos />
      <Footer />
    </>
  );
}

export default App;
