import express from 'express';
const app = express();

app.use(express.static('./'));
app.use('/wasm', express.static('./build/'));

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});