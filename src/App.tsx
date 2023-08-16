import { AxiosInterceptor } from "./AxiosInterceptor"
import { AuthProvider } from "./providers/AuthProvider"
import { RoutesMain } from "./routes"
import GlobalStyle from "./styles/global"

function App() {
  return (
    <main>
      <GlobalStyle/>
      
      <AxiosInterceptor>
        <AuthProvider>
          <RoutesMain/>
        </AuthProvider>
      </AxiosInterceptor>
    </main>
  )
}

export default App
