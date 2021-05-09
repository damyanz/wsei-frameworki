import { Provider } from "react-redux";
import Header from "./components/molecules/Header";
import Sidebar from "./components/molecules/Sidebar";
import Dropdown from "./components/molecules/Dropdown";
import Home from "./components/organisms/Home";
import { store } from "./redux/store";
import { initDayJs } from "./helpers/initializers";

function App() {
  initDayJs();

  return (
    <Provider store={store}>
      <div className="flex flex-col items-center min-h-screen pt-16 bg-gray-bg">
        <Header />
        <div className="flex w-full max-w-screen-xl min-h-full">
          <Sidebar />
          <Home />
        </div>
      </div>
    </Provider>
  );
}

export default App;
