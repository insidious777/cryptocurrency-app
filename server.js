const http = require("http");
const rp = require('request-promise');
const requestOptions = {
  method: 'GET',
  uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
  qs: {
    'start': '1',
    'limit': '100',
    'convert': 'USD'
  },
  headers: {
    'X-CMC_PRO_API_KEY': '4a574444-9768-4055-8345-2283050828f4'
  },
  json: true,
  gzip: true
};

let data;
rp(requestOptions).then(response => {
  data=response;
}).catch((err) => {
  console.log('API call error:', err.message);
});

http.createServer(function(request,response){
    console.log(data);
    response.setHeader('Access-Control-Allow-Origin','http://localhost:3000')
    response.end(JSON.stringify(data));
}).listen(3001, "127.0.0.1",function(){
    console.log("Server start listening at 3001");
});