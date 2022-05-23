const queryString = require('query-string');
console.log(location.search);

const query = queryString.parse(location.search);
console.log(query.a);
