var exp = "";
const input = document.getElementById('input');
function calcad(value) {
    exp = exp + value;
    input.value = exp;
}
function remove() {
    exp = exp.substring(0,exp.length-1);
    input.value=exp;
}
function equal() {
    if(exp.length == 0 || exp == "")
    {
        alert("Need Input");
    }
    try{
        ans = eval(exp);
        input.value = ans;
    }
    catch(err){
        alert("Invalid Input");
    }
}
function reset(){
    input.value = "";
    exp = "";
}