import React from "react";

import styles from "./app.module.css";
import DemoPage from "./components/DemoPage";

function App() {
  return (
    <div className={styles.app}>
      <DemoPage />
    </div>
  );
}

export default App;
