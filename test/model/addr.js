#!/usr/bin/env node

process.env.NODE_ENV = process.env.NODE_ENV || 'development';


var addrs =
  [
    { addr: 'mjRmkmYzvZN3cA3aBKJgYJ65epn3WCG84H',
    },
 /*
    { addr: 'mjRmkmYzvZN3cA3aBKJgYJ65epn3WCG84H',
      balance: 46413.0,
      totalReceived: 357130.17644359,
      totalSent: 310717.17644359,
    },
    { addr: 'mgKY35SXqxFpcKK3Dq9mW9919N7wYXvcFM',
      balance: 0.01979459,
      totalReceived: 0.01979459,
      totalSent: 0,
      transactions: [ '91800d80bb4c69b238c9bfd94eb5155ab821e6b25cae5c79903d12853bbb4ed5' ],
    },
    { addr: 'mmvP3mTe53qxHdPqXEvdu8WdC7GfQ2vmx5',
      balance: 10580.50027254,
      totalReceived: 12157.65075053,
      totalSent: 1577.15047799,
      transactions: [
        '91800d80bb4c69b238c9bfd94eb5155ab821e6b25cae5c79903d12853bbb4ed5',
        'f6e80d4fd1a2377406856c67d0cee5ac7e5120993ff97e617ca9aac33b4c6b1e',
        'bc27f31caae86750b126d9b09e969362b85b7c15f41421387d682064544bf7e7',
        '2cd6a1cb26880276fbc9851396f1bd8081cb2b9107ff6921e8fd65ed2df3df79',
        '8bea41f573bccb7b648bc0b1bbfeba8a96da05b1d819ff4a33d39fbcd334ecfd',
        'cb0d55c37acc57f759255193673e13858b5ab3d8fdfa7ee8b25f9964bdaa11e3',
        '7b007aeace2299d27b6bb6c24d0a8040d6a87e4c2601216c34d226462b75f915',
        'a9f40fbaecd2b28a05405e28b95566d7b3bd8ac38a2853debd72517f2994c6fc',
        '4123255b7678e37c168b9e929927760bc5d9363b0c78ec61a7b4a78b2a07adab',
        'cb3760529c2684c32047a2fddf0e2534c9241e5d72011aac4a8982e0c7b46df3',
        'e8d00d8cc744381233dbc95e2d657345084dfb6df785b81285183f4c89b678d4',
        '7a748364255c5b64979d9d3da35ea0fbef0114e0d7f96fccd5bea76f6d19f06b',
        'd0b7e087040f67ef9bd9f21ccf53d1b5410400351d949cabf127caf28a6e7add',
        '209f97873265652b83922921148cad92d7e048c6822e4864e984753e04181470',
        '3a4af7755d3061ecced2f3707c2623534104f08aa73a52ca243d7ddecf5fe86d',
        '4a4b5c8d464a77814ed35a37e2a28e821d467a803761427c057f67823309b725',
        'd85f5265618fb694c3ea3ca6f73eba93df8a644bc1c7286cec2fbc2fbf7d895e',
        '0d2c778ed9976b52792c941cac126bda37d3b1453082022d5e36ac401be3b249',
        'daf03d666047ca0b5340b4a0027f8562b7c5bac87dca3727093b5393176a541a',
        'a0dc03a870e589ea51e3d3a8aed0d34f4f1ae6844acad26dae48fe523b26e764',
        '3df1a50e2e5d8525f04bd21a66bad824364a975449fa24fd5c2537d0f713919b',
        '7bc26c1f3b4ab5ca57677593d28d13bff468a658f4d5efc379c1612554cf668e',
        'ded4cbc9c52fd5599b6a93f89a79cde9aeb5a7f8f56732bb67ae9554325b3666',
        '91224a219196a3f6e6f40ad2137b13fe54109e57aaed7527ea34aa903e6b8313',
        'ee899a182bbb75e98ef14d83489e631dd66a8c5059dc8255692dd8ca9efba01f',
        '0a61590c7548bd4f6a0df1575b268057e5e3e295a44eaeeb1dfbd01332c585ed',
        'd56c22950ad2924f404b5b0baa6e49b0df1aaf09d1947842aed9d0178958eb9d',
        'c6b5368c5a256141894972fbd02377b3894aa0df7c35fab5e0eca90de064fdc1',
        '158e1f9c3f8ec44e88052cadef74e8eb99fbad5697d0b005ba48c933f7d96816',
        '7f6191c0f4e3040901ef0d5d6e76af4f16423061ca1347524c86205e35d904d9',
        '2c2e20f976b98a0ca76c57eca3653699b60c1bd9503cc9cc2fb755164a679a26',
        '59bc81733ff0eaf2b106a70a655e22d2cdeff80ada27b937693993bf0c22e9ea',
        '7da38b66fb5e8582c8be85abecfd744a6de89e738dd5f3aaa0270b218ec424eb',
        '393d51119cdfbf0a308c0bbde2d4c63546c0961022bad1503c4bbaed0638c837',
        '4518868741817ae6757fd98de27693b51fad100e89e5206b9bbf798aeebb804c',
        'c58bce14de1e3016504babd8bbe8175207d75074134a2548a71743fa3e56c58d',
        '6e69ec4a97515a8fd424f123a5fc1fdfd3c3adcd741292cbc09c09a2cc433bea',
        '0e15f2498362050e5ceb6157d0fbf820fdcaf936e447207d433ee7701d7b99c2',
        'a3789e113041db907a1217ddb5c3aaf0eff905cc3d913e68d977e1ab4d19acea',
        '80b460922faf0ad1e8b8a55533654c9a9f3039bfff0fff2bcf8536b8adf95939',
      ]
    },
    */
  ];

var 
  mongoose= require('mongoose'),
  assert  = require('assert'),
  config  = require('../../config/config'),
  Address = require('../../app/models/Address');


mongoose.connection.on('error', function(err) { console.log(err); });

describe('Address fromAddrWithInfo', function(){

  before(function(done) {
    mongoose.connect(config.db);
    done();
  });

  after(function(done) {
    mongoose.connection.close();
    done();
  });


  addrs.forEach( function(t) {
    it('should retrieve the correct info for' + t.addr, function(done) {
      Address.fromHashWithInfo(t.addr, function(err, a) {
        if (err) done(err);

        assert.equal(t.addr, a.addr);
        if (t.balance) assert.equal(t.balance, a.balance, "balance");
        if (t.totalReceived) assert.equal(t.totalReceived, a.totalReceived, "totalReceived");
        if (t.totalSent) assert.equal(t.totalSent, a.totalSent, "totalSent");
        if (t.transactions) {
          t.transactions.forEach( function(tx) {
            assert(tx in a.inTransactions);
          });
        }
        done();
      });
    });
  });

});

