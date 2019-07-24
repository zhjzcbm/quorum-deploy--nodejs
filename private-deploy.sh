#! /bin/bash
flist=`ls $(pwd)"/solidity"`
for f in ${flist}
  do
    node private-deploy.js $f $1
done
