/* calculate average score for each team*/

/*
code challenge 2 

var Mike_1,Mike_2,Mike_3,John_1,John_2,John_3,Mike_av,John_av

Mike_1=89;
Mike_2=120;
Mike_3=103;
John_1=116;
John_2=94;
John_3=123;

Mike_av=(Mike_1+Mike_2+Mike_3)/3;
John_av=(John_1+John_2+John_3)/3;

console.log(Mike_av);
console.log(John_av);

if (Mike_av>John_av) {
    console.log(' Mike has the highest score average of ' + Mike_av)
} else if (John_av>Mike_av) {
    console.log(' John has the highest score average of ' + John_av)
} else {
    console.log('Draw boys')
}
*/

/*Code challange 3

make array of tips and build funcion*/
/*
function tip_calculator(spend) {
    var meal_tip;
    if (spend<50) {
      meal_tip = 0.2*spend;
    } else if (spend>200) {
        meal_tip = 0.1*spend;    
    } else {meal_tip = 0.15*spend;
    } 
    return meal_tip 
}
var bills = [124,48,268]

var tips =[tip_calculator(bills[0]),tip_calculator(bills[1]),tip_calculator(bills[2])]

console.log(tips)

var total_spend=[bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]]
console.log(total_spend)
/*

/*Code challange 4

using objects and methods

var john = {
    Name: 'John',
    Mass: 65,
    Height: 1.80,
    CalcBMI: function() {
        this.bmi=this.Mass/(this.Height*this.Height);
        return this.bmi
    }
};
var mark = {
    Name: 'Mark',
    Mass: 65,
    Height: 1.60,
    CalcBMI: function() {
        this.bmi=this.Mass/(this.Height*this.Height);
        return this.bmi
    }
}

john.CalcBMI();
mark.CalcBMI();
console.log(john,mark);

*/

/* code challange 5
using loops and iterations */

var john = {
   bills: [124,48,268,180,42],
   tip: [0,0,0,0,0],
   final_bill: [0,0,0,0,0],
   calctip: function() {
       for (var i=0; i<this.bills.length; i++) {
        if (this.bills[i]<50) {
            this.tip[i] = 0.2*this.bills[i];
          } else if (this.bills[i]>200) {
            this.tip[i] = 0.1*this.bills[i];    
          } else {this.tip[i] = 0.15*this.bills[i];
          } 
       }
    },
    calcfinalbill: function() {
        for (var i=0; i<this.bills.length; i++) {
            this.final_bill[i]=this.bills[i]+this.tip[i]
        }
    }
} 

john.calctip();
john.calcfinalbill();
console.log(john)