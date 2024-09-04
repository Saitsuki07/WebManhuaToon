const axios = require('axios');  

module.exports = async (req, res) => {  
  try {  
    const response = await axios.get('https://webtoon.p.rapidapi.com/canvas/titles/list', {  
      headers: {  
        'x-rapidapi-key': '88d8532652msha149818d41ad8f2p1a343ajsn15c2e1fc154e',  
        'x-rapidapi-host': 'webtoon.p.rapidapi.com'  
      },  
      params: {  
        genre: 'ALL',  
        sortOrder: 'READ_COUNT',  
        startIndex: 0,  
        pageSize: 20,  
        language: 'en'  
      }  
    });  

    res.status(200).json(response.data);  
  } catch (error) {  
    res.status(500).json({ message: 'Error fetching data', error: error.message });  
  }  
};