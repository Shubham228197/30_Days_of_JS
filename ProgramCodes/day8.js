/*
Exercises: Level 1
1. Create an empty object called dog
2. Print the the dog object on the console
3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
4. Get name, legs, color, age and bark value from the dog object
5. Set new properties the dog object: breed, getDogInfo

===========================================================================================================

Exercises: Level 2
1. Find the person who has many skills in the users object.
2. Count logged in users, count users having greater than equal to 50 points from the following object.
const users = {
        Alex: {
            email: 'alex@alex.com',
            skills: ['HTML', 'CSS', 'JavaScript'],
            age: 20,
            isLoggedIn: false,
            points: 30
        },
        Asab: {
            email: 'asab@asab.com',
            skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
            age: 25,
            isLoggedIn: false,
            points: 50
        },
        Brook: {
            email: 'daniel@daniel.com',
            skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
            age: 30,
            isLoggedIn: true,
            points: 50
        },
        Daniel: {
            email: 'daniel@alex.com',
            skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
            age: 20,
            isLoggedIn: false,
            points: 40
        },
        John: {
            email: 'john@john.com',
            skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
            age: 20,
            isLoggedIn: true,
            points: 50
        },
        Thomas: {
            email: 'thomas@thomas.com',
            skills: ['HTML', 'CSS', 'JavaScript', 'React'],
            age: 20,
            isLoggedIn: false,
            points: 40
        },
        Paul: {
            email: 'paul@paul.com',
            skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
            age: 20,
            isLoggedIn: false,
            points: 40
        }
        }

3. Find people who are MERN stack developer from the users object
4. Set your name in the users object without modifying the original users object
5. Get all keys or properties of users object
6. Get all the values of users object
7. Use the countries object to print a country name, capital, populations and languages.

===========================================================================================================

Exercises: Level 3
1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addincome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
2. **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
        const users = [
        {
            _id: 'ab12ex',
            username: 'Alex',
            email: 'alex@alex.com',
            password: '123123',
            createdAt:'08/01/2020 9:00 AM',
            isLoggedIn: false
        },
        {
            _id: 'fg12cy',
            username: 'Asab',
            email: 'asab@asab.com',
            password: '123456',
            createdAt:'08/01/2020 9:30 AM',
            isLoggedIn: true
        },
        {
            _id: 'zwf8md',
            username: 'Brook',
            email: 'brook@brook.com',
            password: '123111',
            createdAt:'08/01/2020 9:45 AM',
            isLoggedIn: true
        },
        {
            _id: 'eefamr',
            username: 'Martha',
            email: 'martha@martha.com',
            password: '123222',
            createdAt:'08/01/2020 9:50 AM',
            isLoggedIn: false
        },
        {
            _id: 'ghderc',
            username: 'Thomas',
            email: 'thomas@thomas.com',
            password: '123333',
            createdAt:'08/01/2020 10:00 AM',
            isLoggedIn: false
        }
        ];

        const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
    ]
Imagine you are getting the above users collection from a MongoDB database.
        a. Create a function called signup which allows user to add to the collection. If user exists, inform the user that he has already an account.
        b. Create a function called signin which allows user to sign in to the application
3. The products array has three elements and each of them has six properties.
        a. Create a function called rateProduct which rates the product
        b. Create a function called averageRating which calculate the average rating of a product
4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
 */

// Answer

const person = {
  firstName: "Shubham",
  lastName: "Pandey",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  getFullName: function () {
    return `${this.firstName}${this.lastName}`;
  },
  "phone number": "+3584545454545",
};
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};
const users2 = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];
const dog = {};
console.log("Empty Object:", dog);
dog["name"] = "Dage";
dog["legs"] = "4";
dog["color"] = "Pink";
dog["age"] = "2";
dog.bark = function () {
  return "woof woof";
};
console.log("Dog Name:", dog.name);
console.log("Dog Legs:", dog.legs);
console.log("Dog Color:", dog.color);
console.log("Dog Age:", dog.age);
console.log("Dog Dark:", dog.bark());
dog["breed"] = "Dindi";
dog["getDogInfo"] = function () {
  return `${this.name} is ${this.age} year old of breed ${this.breed}. He is ${
    this.color
  } in color and like any other dog he have ${this.legs} and do ${this.bark()}`;
};
console.log(dog.getDogInfo());
let max = 0;
let namely = "";
let activelyLoggedIn = 0;
let countPoints = 0;
let MernStackDevs = [];
for (let i in users) {
  console.log(users[i]);
  if (users[i].skills.includes("MongoDB")) {
    if (users[i].skills.includes("Express")) {
      if (users[i].skills.includes("React")) {
        if (users[i].skills.includes("Node")) {
          MernStackDevs.push(i);
        }
      }
    }
  }
  if (users[i].isLoggedIn == true) {
    activelyLoggedIn++;
  }
  if (users[i].points >= 50) {
    countPoints++;
  }
  if (max < users[i].skills.length) {
    namely = i;
    max = users[i].skills.length;
  }
}
console.log("Person With Max Skills:", namely);
console.log("Actively LoggedIn users:", activelyLoggedIn);
console.log("Points with 50+:", countPoints);
console.log("Mern Devs:", MernStackDevs);
const NewUserEntry = {
  email: "pandey@gmail.com",
  skills: ["Javascript", "HTML", "CSS", "React", "Python", "Typescript"],
  isLoggedIn: true,
  age: 27,
  points: 50,
};
users["Shubham"] = NewUserEntry;
for (const [key, value] of Object.entries(users)) {
  console.log(`Key of users: ${key}`);
}
for (let item in users) {
  console.log(`value of ${item}:`, users[item]);
}
//Level 2 Question 7 is Already Done
const personAccount = {
  firstName: "Jason",
  lastName: "Todd",
  income: 300000,
  expences: {
    totalIncome: 400000,
    totalExpense: 200000,
    accountInfo: "ACC0123456789",
    addIncome: function () {},
    addExpense: function () {},
    accountBalance: function () {},
  },
  description: "I Earn, Invest and expend",
};
function signUp(usrInputId) {
  let returnStatement = "";
  let newUser = true;
  for (let item of users2) {
    if (item._id != usrInputId) {
      newUser = true;
    } else {
      newUser = false;
      break;
    }
  }
  if (newUser) {
    users2.push({
      _id: usrInputId,
      username: "Shubham",
      email: "pandey@gmail.com",
      password: "hey88you",
      createdAt: "02/12/2023 07:10 AM",
      isLoggedIn: true,
    });
    returnStatement = "User Added";
  } else {
    returnStatement = "Already a user with this ID";
  }
  return returnStatement;
}
console.log(signUp("xmp5s6"));
function signIn(usrInputId) {
  let newUser = true;
  for (let item of users2) {
    if (item._id != usrInputId) {
      newUser = true;
    } else {
      newUser = false;
      break;
    }
  }
  if (newUser) {
    return "Make an Account";
  } else {
    return "Logged In";
  }
}
console.log(signIn("xmp5s6"));
//Tip: a good programing pracice is to make another function for redundant code
function rateProduct(userId, productId, Prating) {
  let productFound = true;
  let returnStatement = "";
  for (let item of products) {
    if (item["_id"] == productId) {
      productFound = true;
      item["ratings"].push({ userId: userId, rate: Prating });
      returnStatement = `${item["name"]} rated with ${Prating} star`;
      break;
    } else {
      productFound = false;
    }
  }
  if (productFound) {
    return returnStatement;
  } else {
    return "Product Not Found";
  }
}
console.log(rateProduct("xmp5s6", "aesgfal", 5));
// console.log(products);
// for checking average rating for individual product need steps: product existence -> product have rating or not -> show avg rating
function averageRating() {
  for (let item of products) {
    if (item["ratings"].length > 0) {
      let sum = 0;
      for (let i = 0; i < item["ratings"].length; i++) {
        sum += item["ratings"][i].rate;
      }
      console.log(
        `Average rating for ${item["name"]} is ${sum / item["ratings"].length}`
      );
    } else {
      console.log("Product not Rated");
    }
  }
}
averageRating();
function likeProduct(prdId, userId) {
  // assuming user provide correct product id
  console.log("============================");
  for (let item of products) {
    let newLikeArrWnewUser = [...item["likes"]];
    if (prdId == item["_id"]) {
      console.log("Product Match");
      if (item["likes"].includes(userId)) {
        console.log("User Already Liked the Product");
        newLikeArrWnewUser = item["likes"].filter((val) => {
          return val != userId;
        });
        console.log("INSIDE IF ARRAY:", item["likes"]);
        item["likes"] = newLikeArrWnewUser;
      } else {
        console.log("User's First Like");
        item["likes"].push(userId);
        console.log("INSIDE ELSE ARRAY:", item["likes"]);
      }
    } else {
      console.log("Not this Product");
    }
  }
}
likeProduct("hedfcg", "eefarm");
likeProduct("hedfcg", "fg12cy");
likeProduct("hedfcg", "leoePrm");
likeProduct("ab12ex", "leoePrm");
console.log(products);
