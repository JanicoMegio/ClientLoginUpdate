import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main.tsx';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Footer from './components/Footer.tsx';
import PageNotFound from './components/Page404.tsx'
import theme from './components/Theme.ts'
import Dashboard from './components/MainDashboard.tsx';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/Dashboard" element={<Dashboard />}/>
        </Routes>
        <Footer/>
      </Router>
    </ThemeProvider>
  )
}

export default App
