let display=document.getElementById('display')
btn=document.querySelectorAll('button');
let empty='';
display.value=0
for(num of btn)
{
    num.addEventListener('click',(ele)=>{
        btnNum=ele.target.innerText;
        console.log(btnNum);
        if(btnNum=="=")
        {
           display.value=eval(empty)
        }
        else if(btnNum=="C")
        {
            empty="0";
           display.value=empty;
        }
        else{
            empty += btnNum;
            display.value= empty;
        }
    })
}