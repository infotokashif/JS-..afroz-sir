
try{

    const arr= [1,4,5,7,8,1,2,9,1,7,7,4,8,7,7,7,]
    // <!--const result = foo(array,searchby) -->//
    const result = foo(arr,50)
    console.log(result);
    }
    catch(e){
        console.log(e.massage)
    }
    function foo(array,searchby){
        if (!Array.isArray(array)) throw new Error ("Bhai woh array nhi hai")
    
        return array.reduce((a,b)=>{
            const occ= b===searchby ? 1:0;
            return occ+a;
        }, 0)
    }
    
    