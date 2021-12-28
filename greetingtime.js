  function greeting(time){
      if (typeof time!=="number"){
     return "please provide a valid input";
      }
      
      else if (time>=6 && time<12){
          return "GOOD MORNING";
      } else if(time>=12 && time<=16){
          return "GOOD AFTERNOON";
      }else if(time>16 && time<=19){
          return "GOOD EVINING";
      }else{return "GOOD night";}
  }
  console.log(greeting("ten"));