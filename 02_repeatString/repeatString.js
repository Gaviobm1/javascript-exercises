const repeatString = function(string, num) {
    let str = "";
    if (num>0){
    
        for (let i = num; i>0; i--) {
                str += string ; 
                }
            }
    if (num<0) {
        str += "ERROR";
                }
    return str;
}



// Do not edit below this line
module.exports = repeatString;
