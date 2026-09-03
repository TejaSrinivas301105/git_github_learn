console.log("This is the function that i want merge")

function safe(){
    try{
        console.log("This is the function that i want merge");
    }catch(e){
        console.error(e);
    }
}

const arr = (req,res)=>{
    try{
        const ans = await("/teacher/32");
        const res = ans.json();
        console.log(res);
    }
    catch(e){
        console.error(e);
    }
}

const see = (req,res)=>{
    try{
        const ans = await("/teacher/32");
        const res = ans.json();
        console.log(res);
    }
    catch(e){
        console.error(e);
    }
}

console.log("Hi conflict");

