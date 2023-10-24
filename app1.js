
    //import { capitalize } from "./js2"

    //comment
    /* 
    multi line comment
    */
    console.log("hello1");
    console.log("hello");

    // undefined, null, boolean, string, symbol, number, object
    var x = 5; // scope throughout prog
    console.log(x);

    const pi = 3.14; //constant value 
    console.log(pi);

    let a; //var declaration reamins undefined until initalized
    console.log(a);
    a=20; //value assigned
    a++;
    console.log(a);
    a+=20;
    console.log(a);

    let z ="name: \"uddhav\" \nz"; //only use in scope
    let n = " x"
    console.log(z+n);
    let q =z.length;
    console.log(q);
    console.log(z[0]);
    console.log(z[z.length-1]);
    //string is immutable


    //Arrays
    let array1 = ["x",1,"abhjjvh",1010];
    console.log(array1);
    array1.push(1,2,3,4,5); // append value to end of array
    console.log(array1);
    array1.pop(); //remove last element 
    console.log(array1);
    array1.shift(); //remove 1st element
    console.log(array1);
    array1.unshift(200); // add element to start of array
    console.log(array1);

    //multidimensional arrays
    let array2 = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ];
    console.log(array2);
    console.log(array2[0][1]);
    array2[0][1] = 200
    console.log(array2[0][1]);


    //functions
    function reuse(x,y){
        return x+y
    }

    let y =20;
    let s = reuse(x,y);
    console.log(s);

    let b= reuse(100,200);
    console.log(b);

    let undef;
    function testundef(nm){
        if (typeof undef == "undefined")
        {
            console.log("undefined");
        }
        else{
            console.log("defined");
        }
    }

    testundef(undef);

    let array3 = [1,2,3,4,5];
    console.log(JSON.stringify(array3));

    function test(isTrue){
        if(isTrue)
        {
            console.log("true");
        }
        else{
            console.log("false");
        }
    }

    let bool1 = true;
    test(bool1);
    let bool2 = false;
    test(bool2);

    // equality operator == try do type conversion before eqauting
    // strict equality operator === don't do type conversion before equating
    // unequality !=
    // strict unequality !==
    // && and
    // || or

    let alpha = 10;
    switch(alpha){
        case 10:
            console.log("10");
            break;
        case 20:
            console.log("20");
            break;
        default:
            console.log("default");
    }

    console.log(Math.pow(alpha,2));
    console.log(Math.sqrt(alpha));

    // JS Objects

    let obj ={
        "name": "uddhav",
        "last_name": "gupta",
        "location": "new delhi",
        "code": 93125,
        "lang": ["py","java","c","x"]
    };
    console.log(obj);
    console.log(obj.code); // dot notaion access of JSON
    console.log(obj["lang"]); //bracket notation access
    obj.code = 1919191; // updating the value of property in JSON
    console.log(obj.code);
    obj.test = 123; // adding new property to JSON
    console.log(obj);
    delete obj.test; // delete a property from JSON
    console.log(obj);

    // testing object for property
    function checkObj(checkprop){
        if(obj.hasOwnProperty(checkprop))
        {
            return obj[checkprop]
        }
        else{
            return "Not Found"
        }
    }
    let xx = checkObj("location");
    console.log(xx);

    // Complex JSON

    let plants =[
        {
            "type": "flower",
            "test": "alpha",
            "list":["rose","tulip","dandelion"]
        },
        {
            "type": "tree",
            "test": "alpha",
            "list":["fir","pine","birch"]
        }
    ];

    console.log(plants);
    let plantcopy = JSON.parse(JSON.stringify(plants)); // way in JS to create a copy of object
    console.log(plantcopy);
    console.log(plants[1].list[1]);
    
    //Important
    //Handling operation on complex JSON

    let plantstest ={
        "a":{
            "type": "flowers",
            "test": "alphas",
            "list":["roses","tulips","dandelions"]
        },
        "b":{
            "type": "trees",
            "test": "alphas",
            "list":["firs","pines","birchs"]
        }
    };
    
    console.log(plantstest);
    function updaterecordsplant(id,prop,value){
        if (value === "") // if empty value delete the property
        {
            delete plantstest[id][prop];
        }
        else 
        if (prop === "list") // check if property is list
        {
            plantstest[id][prop] = plantstest[id][prop] || []; // ensure a list is there for append if exist then same gets... 
            // ...overwritten or else creates a empty list if not present as list
            plantstest[id][prop].push(value);
        }
        else // if normal property then update as it is
        {
            plantstest[id][prop] = value;
        }
        return plantstest;
    }

    console.log(updaterecordsplant("a","test","newalpha"));
    console.log(updaterecordsplant("a","list","newalphalist"));
    console.log(updaterecordsplant("a","test",""));


    let i = 0;
    let whileaaray = [];
    //while loop
    while (i<5)
    {
        whileaaray.push(i);
        i++;
    }
    console.log(whileaaray);


    let forarray = [];
    for(let i =0; i<5; i++)
    {
        forarray.push(i);
    }
    console.log(forarray);

    for(let i =0; i<2; i++)
    {
        console.log(plants[i]);

    }

    //parseInt
    console.log(parseInt("56"));
    console.log(parseInt("56a"));
    console.log(parseInt("a2"));
    console.log(parseInt("11111",2));

    //ternary operator can also be nested within
    let ab = 10;
    let bc = 20;
    let zc;

    ab > bc ? zc = 1 : zc = 0;
    console.log(zc);


    
    /* 
    diff b/w let and var 

    1. in let you cannot declare a variable twice
    but in var you can declare more than once same variable
    
    2. var is declared globally if not declared inside function
    but for let scope is limited to block only
    */

    /* 
    Read only variable with const keyword

    no reassignment
    try naming const variable in all capital
    */

    const XYZ = 20;
    console.log(XYZ);


    // mutate an array declared with const using bracket notation

    const arrayconst = [2,3,4,5];

    arrayconst[0]=10000;
    console.log(arrayconst);

    // preventing object mutation using Object.freeze()

    const PI = 3.14
    Object.freeze(PI);
    try{
        PI=1111;
    }
    catch(ex)
    {
        console.log(ex);
    }




    // try catch throw finally
    
    try{
        console.log("try starts");
        unicycle;
        console.log("try never reaches here");

    }
    catch(err){
        console.log("error occoured: "+err.stack);
    }
    finally{
        console.log("this always runs");
    }
    console.log("code continue");


    // throw
    let json = '{"name1": "uddhav"}';

    try{
        let user1 = JSON.parse(json);
        if (!user1.name){
            throw new SyntaxError("incomplete data: no name");
        }
        console.log(user1.name);
    } catch(err)
    {
        console.log("JSON error: "+ err.message);
    }


    // array iteration 8 methods
    // forEach map filter reduce some every find findindex

    //forEach parse each element of array with index
    [1,2,3,4,5].forEach(function(item,index){
        console.log(index, item);
    });

    //map can replace the element of array with new element
    //return updated array
    const ar = [1,2,3,4,5].map(function(item){
        return item*2;
    });
    console.log(ar);

    //filter  check each items of array for a condition
    // return array of valid items
    const ar1 = [1,2,3,4,5].filter(function(item){
        return item%2 === 0
    });
    console.log(ar1);

    // reduce reduces array in some operation
    // return the final result
    const ar2 = [1,2,3,4,5].reduce(function(result, item){
        return result*item;
    },1); // 1 is inital result
    console.log(ar2);

    // some check condition need to match only one to be true
    // return true/ false
    const neg = [1,2,3,4,5].some(function(item){
        return item<0; 
    });
    console.log(neg);

    //every every element should meet condition
    // return true false
    const neg2 = [-1,-2,-3,-4,-5].every(function(item){
        return item<0;
    });
    console.log(neg2);

    // find goes to every element if found return it(search)
    // return the matched element
    const found = [1,2,3,4,5].find(function(item){
        return item === 5;
    });
    console.log(found);

     // findindex goes to every element if found return index(index search)
    // return the matched element index
    const foundindex = [1,2,3,4,5].findIndex(function(item){
        return item === 5;
    });
    console.log(foundindex);


//anonymous function: a function with no name

let magic = function(){
        return new Date();
    }

    console.log(magic);

    // Arrow Functions
    let magicarrow = () => new Data();

    // Arrow function with parameters
    let arr1 = [1,2];
    let arr2 = [3,4];
    let conct = (a1,a2) => a1.concat(a2);
    console.log(conct(arr1,arr2));

    // Arrow function higher order
    const realnumarray = [1,2,3,0,-4,-0.6];
    const squarelist = (arr) =>{
        const squarednos = arr.filter((num) => Number.isInteger(num) && num >0).map(x => x*x);
        return squarednos;
    }
    const squaredint = squarelist(realnumarray);
    console.log(squaredint)

    // Arrow function higher order default value

    const increment = (num, val=1) => num +val;

    console.log(increment(5,3));


    //rest operator for aribitary no of arguements in function
    const s1 = function(...args){
        return args.reduce((result,index) => result+index,0);
    };
    console.log(s1(1,2,3,4,5));

    //spread operator to eval arrays in place
    // expand array into individual parts
    // if array made equal then changes reflect in both 
    // to overcome this spread operator used to pass element not array
    // changes in array dont reflect back in elements 

    const month = ["JAN", "FEB","MAR","APR"];
    let arw2;
    arw2 = [...month];
    // arw2 = month; // in this assignment the change reflect in new array but not with spread operator
    month[0]="ud";
    console.log(arw2);


    //destructuring an object

    let voxel = {x: 3.6, y: 7.4, z: 6.54};

    let vx = voxel.x;
    let vy = voxel.y;
    let vz = voxel.z;
    console.log(vx,vy,vz); // old way to destructure

    //new way // copy x in a like that
    const {x: av,y: bv,z: cv}=voxel;
    console.log(av,bv,cv);


    //destructing a nested object
    const local_temp ={
        today: {min: 13, max:24 },
        tommrow: {min: 10, max: 20 }
    };

    const {tommrow: {max: maxoftommrow}}= local_temp;

    console.log(maxoftommrow);


    //template literal
    const person= {
        name: "uddhav",
        age: 21
    };
    const templategreet = `Hello ${person.name}! your age is ${person.age}.`;

    console.log(templategreet);

    //classes

    class SpaceShip {
        constructor(tragetplanet){
            this.tragetplanet = tragetplanet;
        }
    }

    let ship = new SpaceShip("earth");
    console.log(ship.tragetplanet);

    // function making class
    function makeclass(){
        class vegetable {
            constructor(name){
                this.name = name;
            }
            get vegis(){ //getter
                return this.name;
            }
            set vegis(newname){ //setter
                this.name = newname;
            }
        }
        return vegetable;
    } 

    let vegetable = makeclass();
    const carrot = new vegetable("carrot");
    console.log(carrot.name);
    console.log(carrot.vegis); //getter
    carrot.vegis = "pea"; //setter
    console.log(carrot.vegis);

    
    // const newcap = capitalize("hello");
    // console.log(newcap);

