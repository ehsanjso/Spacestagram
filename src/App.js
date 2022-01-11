import AppRouter from "./routers/AppRouter";
import "./styles/App.css";

function App() {
  return (
    <div className="antialiased text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-900 min-h-screen">
      <AppRouter />
    </div>
  );
}

export default App;
