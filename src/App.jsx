import AppRouter from "./AppRouter";
import AuthProvider from "./providers/AuthProvider";
// import StateProvider from "./state/state";

const App = () => {
  return (
    // <StateProvider>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
    // </StateProvider>
  );
};

export default App;
