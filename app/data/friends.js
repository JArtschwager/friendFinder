//save application data ahere as an array of objects. format similar as below.
var uuid = require('uuid/v4');

//nbelow may need a var name?
var friendArray = [

{   name: "Zoey Artschwager",
    photo: "https://cdn.britannica.com/700x450/99/152499-120-23D4CC5D.jpg",
    "scores":[
        0,
        1,
        4,
        2,
        5,
        1,
        2,
        1,
        4,
        1
      ],
      id: uuid()
  },
  {   name: "Nadia Artschwager",
    photo: "https://s.abcnews.com/images/US/ht_Tiny_Tim_kb_121228_wmain.jpg",
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
  {   name: "Jennifer Artschwager",
    photo: "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/26168869_10101016956408355_1588294270133062539_n.jpg?_nc_cat=0&oh=15ab114d10a0b0384ce6d8f884c23fd3&oe=5B4E9DD6",
    "scores":[
        0,
        1,
        4,
        2,
        5,
        1,
        2,
        1,
        4,
        1
      ],
      id: uuid()
  },
];

module.exports = friendArray;
