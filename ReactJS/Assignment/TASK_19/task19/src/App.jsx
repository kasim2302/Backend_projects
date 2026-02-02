import { ThemeProvider } from "./Theme/ThemeContext";
import Header from "./components/Header";
import Content from "./components/Content";
import { CounterProvider } from "./pages/CounterContext";
import CounterControls from "./components/CounterControl";
import CounterDisplay from "./components/CounterDisplay";
import { FocusProvider } from "./pages/FocusContext";
import InputBox from "./components/InputBox";
import FocusButton from "./components/FocusButton";
import { AuthProvider } from "./Auth/AuthContext";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { useContext } from "react";
import { AuthContext } from "./Auth/AuthContext";
import { RenderCountProvider } from "./pages/RenderCountContext";
import Counter from "./components/Counter";
import RenderCountDisplay from "./components/RenderCountDisplay";
import PrevValueTracker from "./components/PrevValueTracker";
import RefVsStateCounter from "./components/RefVsStateCounter";
import FocusAfterUpdate from "./components/FocusAfterUpdate";
import './index.css'


function AppContent() {
  const { user } = useContext(AuthContext);
  return user ? <Dashboard /> : <Login />;
}
function App() {
  return (
    <>
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <Content />
      </div>
    </ThemeProvider>
    <CounterProvider>
      <div className="min-h-screen flex flex-col items-center justify-center gap-6">
        <CounterControls />
        <CounterDisplay />
      </div>
    </CounterProvider>
     <FocusProvider>
      <div className="min-h-screen flex flex-col items-center justify-center gap-6">
        <InputBox />
        <FocusButton />
      </div>
    </FocusProvider>

     <AuthProvider>
      <AppContent />
    </AuthProvider>

    <RenderCountProvider>
      <div className="min-h-screen flex flex-col items-center justify-center gap-6">
        <Counter />
        <RenderCountDisplay />
      </div>
    </RenderCountProvider>

      <PrevValueTracker />
      <RefVsStateCounter/>
      <FocusAfterUpdate/>
      <RefVsStateCounter/>
    </>
    
  
    
  );
}

export default App;
