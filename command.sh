#!/bin/bash

mkdir $1; touch $1/index.jsx $1/$1.css $1/$1.jsx;
echo "export default from \"./$1.jsx\"" > $1/index.jsx;