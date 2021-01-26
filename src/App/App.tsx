import React from "react";
import { Products } from "../pages/Products";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import styles from "./App.module.scss";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function App() {
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });
  return (
    <div className={styles.App}>
      <Provider store={store}>
        <ThemeProvider theme={darkTheme}>
          <Products />
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
