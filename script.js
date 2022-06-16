// setTimeout(()=>{
//     console.log("hello");
// },3000);

// function hi() {
//     console.log("i am secod");
// }

// hi();


// function* generator(){ 
//  yield "hi";
//  yield "hello";
// }


// const square=generator();
// console.log(square.next().value); //hi
// console.log(square.next().value); //hello
//------------------------------------------

//closure

// function outer(){
//     var name="rahul"
//     function inner() {
//         console.log(name);
//     }
//     inner();
// }
// outer();

// currying example

// function calculate(a) {
//     return function (b) {
//        return function (c) {
//           return a+b+c;
//        }
//     }
//  }

//  console.log(calculate(2)(4)(6));




// let str = 'AppDividend';
// console.log('Original String: ', str);
// let newStr = str.replace(/App/g, '');
// console.log('After character removed: ', newStr);

// function Remove(){
//     let name="akarsh"
//     console.log(name.slice(1))
   
//      }
//      Remove()
   




//weakset


   //   var obj= new WeakSet();

   //   var obAkarshe={};
   //   var objtwo={};
   
   //   obj.add(obAkarshe);
   //   console.log("obAkarshe add")
   
   //   obj.add(objtwo);
   //   console.log("objtwo add")
   
   
   // console.log("weakset has objtwo add"+ obj.has(objtwo))
   
   // obj.delete(obAkarshe);
   // console.log("deleted obAkarshe")




// // find and filter

// var requests = [{  
//    App: 'Adobe',  
//    Count: 10  
// }, {  
//    App: 'Apple',  
//    Count: 12  
// }, {  
//    App: 'Amazon',  
//    Count: 5  
// }, {  
//    App: 'Microsoft',  
//    Count: 2  
// }]; 



// requests.find(function(item) {  
//    return item.App == "Apple"  
// });
// requests.filter(function(item) {  
//    return item.App == "Apple"  
// });  



// // repeat with the interval of 2 seconds
// let timerId = setInterval(() => alert('tick'), 2000);

// // after 5 seconds stop
// setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);


// window.printme();
// let N=5;
// let star="";

// for(let i=1;i<=N;i++){
  
//      for(let j=i;j<=i;j++){
//       document.write(j+" ");
     
//      }
//      document.write("\n")
//    }
  

//    let i;
//    let j;

// for(i=1;i<=N;i++){

//    for(j=i;j<=i;j++){
//       document.write("&nbsp;&nbsp; ");
//  for(j=i;j<=i;j++){
//    document.write(j+" ");
//  }



// call aply bind.


// var person1 = {Name: "Akarsh"};
// var person2 = {Name: "Rohit"};
// function say(greeting) {
// console.log(greeting + " " + this.Name );
// }
// say.call(person1, "Hello"); 
// say.call(person2, "Hello"); 

// var person1 = {Name: "Akarsh"};
// var person2 = {Name: "Rohit"};
// function say(greeting) {
// console.log(greeting + " " + this.Name );
// }
// say.apply(person1, ["Hello"]); 
// say.apply(person2, ["Hello"]); 

// var person1 = {Name: "Akarsh"};
// var person2 = {Name: "Rohit"};
// function say() {
// console.log("Hello " + this.Name );
// }
// var sayHelloAkarsh = say.bind(person1);
// var sayHelloRohit = say.bind(person2);
// sayHelloAkarsh(); 
// sayHelloRohit(); 


// function myFirst() {
//    console.log("Hello");
//  }
//  setTimeout(()=>{
//     console.log("settime out");
//     },1000)   
//  function mySecond() {
//    console.log("Goodbye");
//  }
 
//  mySecond();
//  myFirst();



//  function printLetter(letter) {
//    return new Promise((resolve, reject) => {
//        setTimeout(() => {
//            // console.log(letter)
//            resolve(letter)
//        }, 1000)
//    })
//  }
 
 //European Computer Manufacturers Association

//  async function prinAlphabets() {
//    let ans1 = await printLetter('A')
//    console.log(ans1)
//    console.log('Before B gets resolved')
//    let ans2 = await printLetter('B')
//    console.log(ans2)
//    console.log('Before C gets resolved')
//    let ans3 = await printLetter('C')
//    console.log(ans3)
//  }
 
//  prinAlphabets()
// let N=153;
// let sum=0;
// let rem=0;
// var p=N;
// while(N>0){
//   rem=N%10;
//   sum+=rem*rem*rem;
//   N=Math.floor(N/10)

// }

// console.log(sum);
// if(sum===p){
//    console.log("it is armstrong no.");
// }
// else{
//    console.log("it is not armstrong");
// }





// var Count_Occ = (s) => 
// {
//      let count=1;
//     let str='';
//     let op="";
//     for(let i=0;i<s.length;i++){
//       for(j=i+1;j<s.length;j++){
//         if(s[i]==s[j]){
//           count++;
//         }
//       }
//       if(count>1){
//         str=s[i];
//         op=op+" "+s[i]+count;
//         s=s.replace(str,' ');
//         s=s.split(str).join('');
//       }
//       count=1;
//     }
//     return op.split(' ').sort().join('');
// };
 

// Code 40, Column DS, DT, DU


//construcor method

// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       name: 'Constructor Method'
//     }
//   }
//   render() {
//     return (
//       <div>
//        <p> This is a {this.state.name}</p>
//       </div>
//     )
//   }
// }

//getDerivedStateFromProps()
//1st file this will in ChildComponent
// import React, { Component } from 'react'
// export class ChildComponent extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//           name: 'Constructor Method'
//         }
//       }

//     static getDerivedStateFromProps(props, state) {
//         return {name: props.nameFromParent} 
//       }
//     render() {
//         return (
//             <div>
//                 This is a {this.state.name}
//             </div>
//         )
//     }
// }
// 2nd comp file//secondly make getDerivedStateFromPropsMethod component 
// export default class getDerivedStateFromPropsMethod extends Component {
   
//     render() {
//         return (
//             <div>
//                 <ChildComponent nameFromParent="getDerivedStateFromProps Method"/>
//             </div>
//         )
//     }
// }



//componentDidMount()

// import React, { Component } from 'react'

// export default class componentDidMountMethod extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       name: 'This name will change in 5 sec'
//     }
//   }
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({name: "This is a componentDidMount Method"})
//     }, 5000)

//   }
//   render() {
//     return (
//       <div>
//        <p>{this.state.name}</p>
//       </div>
//     )
//   }
// }



//// shouldComponentUpdateMethod
//import React, { Component } from 'react'
// export default class shouldComponentUpdateMethod extends Component {
//    constructor(props){
//      super(props)
//      this.state = {
//        name: 'shouldComponentUpdate Method'
//      }
//    }
//    shouldComponentUpdate() {
//      return false; //Change to true for state to update
//    }
 
//    componentDidMount(){
//      setTimeout(() => {
//        this.setState({name: "componentDidMount Method"})
//      }, 5000)
//    }
//    render() {
//      return (
//        <div>
//         <p>This is a {this.state.name}</p>
//        </div>
//      )
//    }
//  }




//  ////getSnapshotBeforeUpdateMethod


//  import React, { Component } from 'react'

// export default class getSnapshotBeforeUpdateMethod extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//           name: 'constructor Method'
//         }
//       }

//       componentDidMount(){
//         setTimeout(() => {
//           this.setState({name: "componentDidMount Method"})
//         }, 5000)
//       }
//       getSnapshotBeforeUpdate(prevProps, prevState) {
//         document.getElementById('previous-state').innerHTML = "The previous state was " + prevState.name
//       }
//       componentDidUpdate() {
//         document.getElementById('current-state').innerHTML = "The current state is " + this.state.name
//       }
//     render() {
//         return (
//             <>
//                <h5>This is a {this.state.name}</h5>
//                 <p id="current-state"></p>
//                 <p id="previous-state"></p>
//             </>
//         )
//     }
// }










