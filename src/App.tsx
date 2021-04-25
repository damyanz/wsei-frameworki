import { Provider } from "react-redux";
import Header from "./components/molecules/Header";
import Sidebar from "./components/molecules/Sidebar";
import Dropdown from "./components/molecules/Dropdown";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div
        className="flex flex-col items-center min-h-screen pt-16 bg-gray-bg"
        style={{ height: "200vh" }}
      >
        <Header />
        <div className="w-full max-w-screen-xl min-h-full">
          <Sidebar />
        </div>
      </div>
    </Provider>
  );
}

export default App;
