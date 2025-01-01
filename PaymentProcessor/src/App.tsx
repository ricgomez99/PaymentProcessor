import './App.css'
import MainPage from './pages/main'
import { DashboardContext } from './components/context'

function App() {
  return (
    <DashboardContext.Provider value={undefined}>
      <main>
        <MainPage />
      </main>
    </DashboardContext.Provider>
  )
}

export default App
