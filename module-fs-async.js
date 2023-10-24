const {readFile, writeFile} = require('node:fs');

//callback runs only when the condition is fullfilled 
/*(err,res)=>{
    if(err)
    {return;}
    else
    {console.log(result)}
} */
//if no utf encoding provied then callback return buffer value

/* general str for readFile 
readFile('./filepath','encoding',(err,result)=>{
if(err)
{
    console.log(err);
    return;
}
else{
    console.log(result);
    //rest of the code that need to executed after condition
}
});
*/

/* general str for writeFile
writeFile('./filepath',`text to be added`,{flag:'a'},(err,result)=>{
if(err)
{
    console.log(err);
    return;
}
else{
    console.log(result); //gives undefined as nothing to show 
    //rest of the code that need to executed after condition
}
});

*/
console.log("Start Task");
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err)
    {
        console.log(err);
        return;
    }
    else
    {
        //console.log(result)
        const firstfile = result;
        //now if first file read successfully then read next file
        readFile('./content/second.txt','utf8',(err,result)=>{
            if(err)
            {
                console.log(err);
                return;
            }
            else
            {
                const secondfile = result;
                // console.log(result)
                //now if second file also read then write result in third file third.txt
                writeFile('./content/result-file-async.txt',` This is asyn result: ${firstfile}, ${secondfile}`,{flag:'a'},(err,result)=>{
                    if(err){
                        console.log(err);
                        return;
                    }
                    else{
                        console.log(result);
                        console.log("Completing Task");

                    }
                });
            }
        });
    }
});
console.log("Ready for next task");

//alternative is using promises and async/await

