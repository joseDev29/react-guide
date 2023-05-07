import AppRouter from './AppRouter'
import AppWithMUI from './AppWithMUI'
import AuthProvider from './providers/AuthProvider'
// import StateProvider from "./state/state";

const App = () => {
  return (
    // <StateProvider>
    <AuthProvider>
      {/* <AppRouter /> */}
      <AppWithMUI />
    </AuthProvider>
    // </StateProvider>
  )
}

export default App
