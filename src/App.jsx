import Route from "./components/Route";
import SideBar from "./components/Sidebar";
import AccordionPage from './pages/AccordionPage'
import DropdownPage from "./pages/DropdownPage";
import ButtonPage from './pages/ButtonPage'

function App() {
  return <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
    <SideBar />
    <div className="col-span-5">
      <Route path="/accordion">
        <AccordionPage/>
      </Route>
      <Route path="/buttons">
        <ButtonPage/>
      </Route>
      <Route path="/dropdown">
        <DropdownPage/>
      </Route>
      <Route path="/">
        <DropdownPage />
      </Route>
    </div>
  </div>
}

export default App;
