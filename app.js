const express = require('express');
const app = express();
const schoolRoutes = require('./routes/schoolRoutes');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/', schoolRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
