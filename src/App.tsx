import React from 'react';
import { useTranslation } from 'react-i18next';

import "./App.scss";


function App() {
  const [t] = useTranslation("global")

  return (
    <div className="App">
      {t("header.title")}
    </div>
  );
}

export default App;
