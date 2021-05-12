npm run build
npm run task createClusterInfoCmd mongodb://database-test:27017/datastack-testing

npm run task getClusterInfoCmd {for get clusterInfoId}
example 
```javascript
[ 
  { 
    _id: 608639eff922820075035ab6,
    limit: 9,
    decodeConnection: 'mongodb://database-test:27017/datastack-testing',
    encodeConnection: '34295e1db90227ad9680f0e92a6c81ab90dcbda3ee5dfb3d056e42399a09191708ec831c73f961ae73ca63875b2f17c9785f0dc29aa610b9c23af93ad9c070' 
  } 
]
```
response _id => clusterInfoId

npm run task createClusterDomainCmd vorda-igeargeek-com 6089278f992cce0083903d6a http://vorda-igeargeek-com/
npm run task seed vorda-igeargeek-com
npm run task taskSeedTest vorda-igeargeek-com