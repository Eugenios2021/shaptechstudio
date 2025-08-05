import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Header from './components/Header'
import Hero from './components/Hero'
import Project from './components/Project'
import About from './components/About'
import Support from './components/Support'
import Footer from './components/Footer'

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

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
        <Hero />
        <Project />
        <About />
        <Support />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default App