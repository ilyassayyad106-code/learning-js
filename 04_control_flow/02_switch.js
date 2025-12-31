//switch case: 
//basic syntax: 
    // switch (key) {
    //     case value:
            
    //         break;
    
    //     default:
    //         break;
    // }
 
    
    const month = 3 
       switch (month){
        case 1: 
        console.log("january");
        break;
        
        case 2: 
        console.log("fabruary");
        break;
        
        case 3: 
        console.log("march");
        break;

        case 4: 
        console.log("april");
        break;

        default:
            console.log("no match");
            break;
            
        }

     //IMP=>   // if we remove or comment out break; then all next code after that removed break-
        //will be executed , except "default"

        let day = "thursday"
        switch (day) {

            case "monday":
                console.log("its monday");
                 break;

            case "tuesday":
                console.log("its tuesday");
                 break;

            case "wednesday":
                console.log("its wednesday");
                 break;

            case "thursday":
                console.log("its thursday");
                // break;  // now if i remove this break; all next code will be execute except "default"

            case "friday":
                console.log("its friday");
               //  break;

            case "saturday":
                console.log("its saturday");
               //  break;

            case "sunday":
                console.log("its holiday");
                break;
                     
                 default:
                    console.log("get back to work");
                    
                     break;
                    }
                  

