//save application data ahere as an array of objects. format similar as below.
var uuid = require('uuid/v4');

//nbelow may need a var name?
var friendArray = [

{   name: "Zoey Artschwager",
    photo: "https://www.instagram.com/p/BhkyFvyFJaEOdj17anLmqJAUMjmfjwkBroH8340/?taken-by=jenn.arts",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ],
      id: uuid()
  },
  {   name: "Nadia Artschwager",
    photo: "https://www.instagram.com/p/BhkAry9lnvG3l3TnSN9yjSVfmP-OeVcddA_Bkg0/?taken-by=jenn.arts",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ],
      id: uuid()
  }
];

module.exports = friendArray;
