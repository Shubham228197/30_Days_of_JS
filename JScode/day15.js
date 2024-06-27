/*
Exercises Level 1
1. Create an Animal class. The class will have name, age, color, legs properties and create different methods
2. Create a Dog and Cat child class from the Animal Class.

===========================================================================================================

Exercises Level 2
1. Override the method you create in Animal class

===========================================================================================================

Exercises Level 3
1. Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
        ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

        console.log('Count:', statistics.count()) // 25
        console.log('Sum: ', statistics.sum()) // 744
        console.log('Min: ', statistics.min()) // 24
        console.log('Max: ', statistics.max()) // 38
        console.log('Range: ', statistics.range() // 14
        console.log('Mean: ', statistics.mean()) // 30
        console.log('Median: ',statistics.median()) // 29
        console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
        console.log('Variance: ',statistics.var()) // 17.5
        console.log('Standard Deviation: ', statistics.std()) // 4.2
        console.log('Variance: ',statistics.var()) // 17.5
        console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

        you output should look like this
        console.log(statistics.describe())
        Count: 25
        Sum:  744
        Min:  24
        Max:  38
        Range:  14
        Mean:  30
        Median:  29
        Mode:  (26, 5)
        Variance:  17.5
        Standard Deviation:  4.2
        Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
1. Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totallncome, totalExpense, accountInfo,add Income, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
*/

//Answer

class Animal {
  constructor(name, age, color, legs) {
    this._name = name;
    this._age = age;
    this._color = color;
    this._legs = legs;
  }
  getName() {
    return this._name;
  }
}
class Dog extends Animal {
  constructor(name, age, color, legs) {
    super(name, age, color, legs);
  }
}
class Cat extends Animal {
  constructor(name, age, color, legs) {
    super(name, age, color, legs);
  }
  getName() {
    return `${this._name} is a pet`;
  }
}
const c1 = new Animal("Cow", 3, "Black", 4);
console.log(c1.getName());

const Dg1 = new Dog("Dog", 2, "Brown", 4);
console.log(`${Dg1.getName()}`);
const Ct1 = new Cat("Cat", 1, "White", 4);
console.log(`${Ct1.getName()}`);

class Statistics {
  static _age = [
    31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
    31, 34, 24, 33, 29, 26,
  ];
  constructor() {
    this._ageToLive = [
      31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38,
      37, 31, 34, 24, 33, 29, 26,
    ];
  }

  static count() {
    // instance level variable ca not not accessible in static function
    console.log(this._age);
  }
  static sum() {}
  static min() {}
  static max() {}
  static range() {}
  static mean() {}
  static median() {}
  static mode() {}
  static var() {}
  static std() {}
  static freqDist() {}
  static describe() {}
  show() {
    // to use value into a instance of  CLASS we must pass through object otherwise the class
    console.log(this._ageToLive);
  }
}
const obj = new Statistics();
obj.show();
Statistics.count();
// ADD Methods adn vakur to the skeleton..then done
// exercise 3 Question 2 is same as question 1
