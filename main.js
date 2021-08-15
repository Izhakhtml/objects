///////////////////////////תרגיל 1./////////////////////////
// const man = {
//     height:175,
//     age:45,
//     whight:80,
//     name:"avrham",
//     heightUp:function () {
//       return this.height+10
//     },
//     ageUp:function() {
//       return this.age*3
//     }
// }
// console.log(man.name);
// console.log(man.ageUp());
///////////////////////////תרגיל 1./////////////////////////
///////////////////////////תרגיל 2./////////////////////////

// ///////////////השינוי///////////////
// console.log(man.heightUp());
// man.height=200
// console.log(man.heightUp());i9
// console.log(man.age);
// man.age = 60
// console.log(man.age);
// ///////////////השינוי///////////////

///////////////////////////תרגיל 2./////////////////////////
///////////////////////////תרגיל 3./////////////////////////

const student = {
     firstName:"shay",
     lastName:"baruch",
     tel:"05832874738",
     email:"ibhhhsha@gmzil.com",
     tests:[70,70,32,60],
     firstAndLast:function () {
         return this.firstName +" "+ this.lastName
     },
     testsUp:function () {
        let sum =0
        let ave =0
         for (let i = 0; i < this.tests.length; i++) {
               sum=sum+this.tests[i]
               ave =sum/this.tests.length
         }return ave
     },
     testsUp1:function () {
        let mini = this.tests[0];
        for (let i = 0; i <  this.tests.length; i++) {
             if (this.tests[i]<mini) {

                 mini=this.tests[i]
                
             }
        } 
        return mini
     }
}
console.log(student.firstName);
console.log(student.lastName);
console.log(student.tel);
console.log(student.email);
console.log(student.tests);

///////////////////////////תרגיל 3./////////////////////////
///////////////////////////תרגיל 4./////////////////////////

console.log(student.firstAndLast());

///////////////////////////תרגיל 4./////////////////////////
///////////////////////////תרגיל 5./////////////////////////

console.log(student.testsUp()); //aveage

///////////////////////////תרגיל 5./////////////////////////
///////////////////////////תרגיל 6./////////////////////////

console.log(student.testsUp1()); //mini

///////////////////////////תרגיל 6./////////////////////////

