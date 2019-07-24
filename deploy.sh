#! /bin/bash
flist=`ls ${1}"solidity"`
for f in ${flist}
  do
    node post-deploy.js $f
done
~     