import { AuthProvider } from "./providers/AuthProvider"
import { RoutesMain } from "./routes"
import GlobalStyle from "./styles/global"

function App() {
  return (
    <main>
      <GlobalStyle/>
      
      <AuthProvider>
        <RoutesMain/>
      </AuthProvider>
    </main>
  )
}

export default App
