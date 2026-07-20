const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Main App Health Check route
app.get('/', (req, res) => {
  res.json({ 
    status: "online", 
    message: "Welcome to Pause Vid Core API Engine" 
  });
});

app.listen(PORT, () => {
  console.log(`Pause Vid Server is running safely on port ${PORT}`);
});
