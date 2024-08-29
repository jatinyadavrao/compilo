const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

const JDoodleClientID = '';
const JDoodleClientSecret = '';


app.post('/compile', async (req, res) => {
    const { code, input } = req.body;
  
    try {
      const response = await axios.post('https://api.jdoodle.com/v1/execute', {
        script: code,
        language: 'java',
        versionIndex: '0',
        clientId: JDoodleClientID,
        clientSecret: JDoodleClientSecret,
        stdin: input,
      });
  
      res.json({
        status: 'success',
        output: response.data.output,
      });
    } catch (error) {
      console.error('Error executing code:', error);
      res.json({
        status: 'error',
        message: 'Failed to execute code',
      });
    }
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });