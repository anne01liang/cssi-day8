document.querySelector("#viewMsg").addEventListener("click", (e)=>{
    const userPasscodeGuess=document.querySelector("#passcode").value;
    
    const messagesRef=firebase.database().ref();
    messagesRef.on("value", (snapshot)=>{
        const data=snapshot.val();
        for(let key in data){
            if(data[key].passcode == userPasscodeGuess){
                display(data[key]);
            } 
        }
    });
});

function display(messageObject){
    console.log("message");
    document.querySelector("#message").innerHTML = messageObject.message;
}