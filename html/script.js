const h = document.createElement('h1')
h.innerHTML = "hello from javascript. this is javascript call.";
document.body.append(h)
console.log(h);



// default export 
// use any value expoting time
import user from './script1.js';
// same name from another file. it is named export 
// it is not allow any value. same variable name in curlibracket {}
import {val} from './script1.js'

console.log(user);
console.log(val)

