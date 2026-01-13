import { createContext, useContext, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeInfo = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("ThemeInfo must be used inside ThemeProvider");
  }

  const { theme, toggleTheme } = context;

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

const UseContextPage = () => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        style={{
          padding: "20px",
          backgroundColor: theme === "light" ? "#f5f5f5" : "#222",
          color: theme === "light" ? "#000" : "#fff",
        }}
      >
        <h1>useContext Hook</h1>
        <p>
          This example shows how data is shared globally
          without prop drilling.
        </p>

        <ThemeInfo />
      </div>
    </ThemeContext.Provider>
  );
};

export default UseContextPage;
