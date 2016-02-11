#!/bin/bash

# Make startig folder
# mkdir $1; touch $1/index.jsx $1/$1.css $1/$1.jsx;
# echo "export default from \"./$1.jsx\"" > $1/index.jsx;

# Copy file because whatever
lowered=`echo "print '$1'.lower()" | python`
cat Marley/Marley.jsx | sed "s/Marley/$1/" | sed "s/marley/$lowered/" > $1/$1.jsx

