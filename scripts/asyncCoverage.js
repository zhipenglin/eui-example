const fs = require('fs-extra'),path=require('path');

fs.copy(path.resolve(__dirname,'../coverage/lcov-report',),path.resolve(__dirname,'../build/report'));
