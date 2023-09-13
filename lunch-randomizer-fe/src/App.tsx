import React, { useState } from "react";
import Card from "./components/Card";
import InputOptions from "./features/InputOptions";
import Layout from "./layout/Layout";

const App: React.FC = () => {
  return (
      <Layout>
        <Card>
          <InputOptions />
        </Card>
      </Layout>
  );
};

export default App;
