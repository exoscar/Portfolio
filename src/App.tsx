import { ThemeProvider } from "@emotion/react";
import theme from "./Constants/theme";
import "./App.css";
import { Layout } from "./components/Layout";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        
        Apple
        </Layout>
    </ThemeProvider>
  );
}

export default App;
