
import {createSelector} from 'reselect';

const obj1 = {x:5}; const obj2 = {x:6};

const selectInput = obj => obj.x;

let m =2;
const selA = createSelector(
    [selectInput],
    (x) => {console.log("SELECTOR", x); return x*m;}
);
const selB = createSelector(
    [selectInput],
    (x) => {console.log("SELECTOR", x); return x*m;}
);

const retSel = n => createSelector(
    [selectInput],
    (x) => {console.log("SELECTOR", x); return x*n;}
);


// alert(retSel(2)(obj1));
// alert(retSel(2)(obj1));




alert(selA(obj1));
alert(selA(obj1));
alert(selB(obj1));
alert(selB(obj1));

module.exports = 1;

//   "proxy": "http://localhost:5000",