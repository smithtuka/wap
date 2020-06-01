
"use strict";
window.onload = function(){


    
    const textArea = document.getElementById("text-area");
        let count=0;
        let accountInfoList = [];

        //MODULE

        var myModule = ( function(){
            "use strict";
                        // Account Creation function - Using a constructor function - see similar ES2015 class
                        function _Account(fName, lName, tel, email, accType, date, currency, amount){
                            this.fName = fName;
                            this.lName = lName;
                            this.tel = tel;
                            this.email = email;
                            this.accType = accType;
                            this.date = date;
                            this.currency = currency;
                            this.amount = amount;
                        }
                        // class Account {
                        //     constructor(fName, email, amount) {
                        //         this.fName = fName;
                        //         this.email = email;
                        //         ....
                        //     }
                        // }

                        const addAccount =function (fName,lName,tel,email,accType,date,currency,amount){
                            accountInfoList[count++] =  new _Account(fName,lName,tel,email,accType,date,currency,amount);
                            alert(accountInfoList[count-1].fName + "\t has been added successfully!");
                            };

                     // may turn this into a function on itself - may try to use streams to push out this list
                        function printRecords(){
                            let textAreaText = "NAME" + "\t\t" + "AMOUNT" + "\t\t\t" + "ACCOUNT TYPE"+"\n" ;
                        for(const a of accountInfoList){
                            let item = "\n" + a.fName + "\t\t" + " "+ a.currency+a.amount + "\t\t" + a.accType +"\n";
                            textAreaText =    textAreaText+item;     
                        }
                        textArea.value = textAreaText;
                    }

                        

                        return {
                            
                            printRecords:printRecords,
                            addAccount:addAccount
                            
                        };

                        
    

        })();
   

    //SUBMIT
    document.getElementById("btn").onclick = function(){
            //personal details
    const fName = document.getElementById("fName").value;
    const lName = document.getElementById("lName").value;
    const tel = document.getElementById("tel").value;
    const email = document.getElementById("mail").value;
    // account details
    const acc = document.getElementById("accType");
    const accType = acc.options[acc.selectedIndex].text;
    // // deposit details
    const date = document.getElementById("date").value;
    const curr = document.getElementById("currency");
    const currency = curr.options[curr.selectedIndex].value;
    const amount = document.getElementById("amount").value;

    // use module
    myModule.addAccount(fName,lName,tel,email,accType,date,currency,amount);  
    myModule.printRecords();

    }






}