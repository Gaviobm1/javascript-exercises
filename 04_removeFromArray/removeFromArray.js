const removeFromArray = function() {
    if (arguments[1]) {
     const index = arguments[0].indexOf(arguments[1]);
     if (index > -1) {
      arguments[0].splice(index, 1);
     }
            }
     if (arguments[2]) {
         const index = arguments[0].indexOf(arguments[2]);
         if (index > -1) {
          arguments[0].splice(index, 1);
         }
        }
    if (arguments[3]) {
            const index = arguments[0].indexOf(arguments[3]);
            if (index > -1) {
             arguments[0].splice(index, 1);
            }
        }
    if (arguments[4]) {
                const index = arguments[0].indexOf(arguments[4]);
                if (index > -1) {
                 arguments[0].splice(index, 1);
                }
            }
                
     return arguments[0]

    }
    
 

// Do not edit below this line
module.exports = removeFromArray;
