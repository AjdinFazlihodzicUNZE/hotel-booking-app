import React, { useState } from 'react';
import { HashLoader } from "react-spinners";

function Loader() {
  const [loading] = useState(true);
  const color = "#a58f44";

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
      <HashLoader
        color={color}
        loading={loading}
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loader;
