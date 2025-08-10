import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Header from './components/Header'
import Hero from './components/Hero'
import Project from './components/Project'
import About from './components/About'
import Support from './components/Support'
import Footer from './components/Footer'
import PrivatePolicy from './components/private_policy'

const theme = createTheme({
  palette: {
    primary: {
      main: '#007acc',
    },
    secondary: {
      main: '#ff813f',
    },
    background: {
      default: '#ffffff',
      paper: '#fafafa',
    },
    text: {
      primary: '#333333',
      secondary: '#555555',
    },
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
})

const HomePage = () => (
  <>
    <Hero />
    <Project />
    <About />
    <Support />
  </>
)

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shaptechstudio" element={<HomePage />} />
            <Route path="/privacy-policy" element={<PrivatePolicy />} />
            <Route path="/shaptechstudio/privacy-policy" element={<PrivatePolicy />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}

export default App