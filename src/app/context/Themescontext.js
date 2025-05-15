"use client"
import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }) => {
  const [isThemeOn, setIsThemeOn] = useState(false)

  useEffect(() => {
    
    const storedTheme = localStorage.getItem('lightmode')
    if (storedTheme === 'active') {
      setIsThemeOn(true)
      document.body.classList.add('lightmode')
    }
  }, [])

  const enableLightMode = () => {
    document.body.classList.add('lightmode')
    localStorage.setItem('lightmode', 'active')
    setIsThemeOn(true)
  }

  const disableLightMode = () => {
    document.body.classList.remove('lightmode')
    localStorage.setItem('lightmode', 'null')
    setIsThemeOn(false)
  }

  const toggleTheme = () => {
    if (isThemeOn) {
      disableLightMode()
    } else {
      enableLightMode()
    }
  }

  return (
    <ThemeContext.Provider value={{ isThemeOn, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}