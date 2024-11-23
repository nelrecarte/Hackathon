// middlewares/requestLogger.js
const requestLogger = (req, res, next) => {
    const { method, originalUrl, body, params, query, headers } = req;
    const timestamp = new Date().toISOString();
  
    // Log basic request info
    console.log(`[${timestamp}] ${method} ${originalUrl}`);
    console.log(`Request Headers: ${JSON.stringify(headers)}`);
    
    if (method === 'POST' || method === 'PUT') {
      console.log(`Request Body: ${JSON.stringify(body)}`);
    }
    
    if (Object.keys(params).length > 0) {
      console.log(`Request Params: ${JSON.stringify(params)}`);
    }
  
    if (Object.keys(query).length > 0) {
      console.log(`Request Query: ${JSON.stringify(query)}`);
    }
  
    next(); // Continue to the next middleware or route handler
  };
  
  module.exports = requestLogger;
  