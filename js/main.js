function addition(...args) {
  let total = args.reduce((prev, arg) => {
    return (prev += arg);
  }, 0);
  return total;
}

function multiplication(...args) {
  let total = args.reduce((prev, arg) => {
    return (prev *= arg);
  }, 1);
  return total;
}
function subtraction(...args) {
   
  let total = args.reduce((prev, arg) =>{
      return prev -= arg;
    }, );
  return total;
}
function division(...args) {
 let total = args.reduce((prev, arg) =>{
    return prev /= arg;
}, );
  return total;
}


function operate(...args) {
    
  switch (args) {
    case "+": {

    return (addition(...args))
      
    }
    case "-": {
   return(subtraction(...args));
      
    }
    case "*": {
        return(multiplication(...args))
        
    }
    case "/": {
    return  (division(...args));
      
    }
   
  }
}


var display = document.querySelectorAll('input');
display[1].addEventListener('click',()=>{ forms.answer.value=  " "});
display[2].addEventListener('click',()=>{ forms.answer.value= forms.answer.value.substr(0 , forms.answer.value.length -1)});

display[4].addEventListener('click',()=>{ forms.answer.value+= display[4].value});
display[5].addEventListener('click',()=>{ forms.answer.value+= display[5].value});
display[6].addEventListener('click',()=>{ forms.answer.value+= display[6].value});
display[7].addEventListener('click',()=>{ forms.answer.value+= display[7].value});
display[8].addEventListener('click',()=>{ forms.answer.value+= display[8].value});
display[9].addEventListener('click',()=>{ forms.answer.value+= display[9].value});

display[10].addEventListener('click',()=>{ forms.answer.value+= display[11].value});
display[11].addEventListener('click',()=>{ forms.answer.value+= display[11].value});
display[12].addEventListener('click',()=>{ forms.answer.value+= display[12].value});
display[13].addEventListener('click',()=>{ forms.answer.value+= display[13].value});
display[14].addEventListener('click',()=>{ forms.answer.value+= display[14].value});
display[15].addEventListener('click',()=>{ forms.answer.value+= display[15].value});
display[16].addEventListener('click',()=>{ forms.answer.value+= display[16].value});

display[17].addEventListener('click',()=>{ 
    
 let result=forms.answer.value.split("").map(function(item) {
   
    return parseInt(item, 10);
});
 console.log(result)
 
//  forms.answer.value= operate(parseInt(result[1],result[2],result[0]));
 


});










