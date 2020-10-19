import React from 'react';
import { Box } from '@material-ui/core';
import Navigation from './component/Navigation';
import Content from './component/Content';

function App() {
  return (
    <Box display="flex">
      <Navigation />
      <Content />
    </Box>
  )
}

export default App;
