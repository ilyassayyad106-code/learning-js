





//Nested scopes:

function one(){
    const username="ilyas"

    function two(){
        const website ="youtube"
        console.log(username);
        }

        // console.log(website); // 1st error, cause its accessed outside of scope

        two() // error found in upper line so this doesnt run, it'll after we commentout that
    }

        one() //even if we commentout two()func, then next call one() wont run 

    //ex2:
    
       if (true){
        const username = "ilyas"

        if (username === "ilyas"){
            const website = " JavaScript"
            console.log(username + website);
            }

            //console.log(website); //error, its outside of its scope
          
            }

            //console.log(username); //error, its also outside of its scope

   //+++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++++++++++++++++++++++++++
   //Hoisting

    console.log(addone(5)); //even before declaration this will be execute
   function addone(num){
    return num + 1
   }
  // console.log(addone(5)); // it'll execute
   

    //console.log(addtwo(5)); //won't execute cause we cannot access before initialization
    const addtwo = function(num){
    return num +2
   }
   console.log(addtwo(5));  //it'll be execute,
   
            