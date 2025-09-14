let boxes=document.querySelectorAll(".button");
let reset=document.querySelector(".reset");
let newGame=document.querySelector(".newgame");
let result=document.querySelector(".winner");
let msg=document.querySelector(".contain-btn");
let turn=true;
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach ((button)=>
{
    button.addEventListener("click",()=>
    {
        
        if(turn)
        {
            button.innerText="O";
            turn=false;
        }
        else{
            button.innerText="X";
            turn=true;
        }
        button.disabled=true;
        checkwinner();
    });
    
});

    const checkwinner =()=>{
    
        for(let i of winPattern )
        {
            let val1=boxes[i[0]].innerText;
            let val2=boxes[i[1]].innerText;
            let val3=boxes[i[2]].innerText;

            if(val1!=""&&val2!=""&&val3!="")
            {
                if(val1==val2&&val2==val3)
                {
                    console.log("winner",val1);
                    showWinner(val1);
                }
            }
        }
    };
    const disableBox =()=>
    {
        for(let i of boxes)
        {
            i.disabled=true;
        }
    }
    const showWinner =(winner)=>
    {
        result.innerText=`Congratulation,the winner is  ${winner}`;
        msg.classList.remove("hide") ;
        disableBox();

             
    }

    const enable=()=>
    {
        for(let i of boxes)
        {
            i.disabled=false;
            i.innerText="";
        }
    };
    const disable=()=>
    {
        for(let i of boxes)
        {
            i.disabled=false;
            i.innerText="";
        }
    };
   
    const resetBut =()=>
    {
        turn=true;
        enable();
        msg.classList.add("hide");
      
      };
      const newGameBut =()=>
      {
        turn=true;
        disable();
        msg.classList.add("hide");
      };

    reset.addEventListener("click",resetBut);
    newGame.addEventListener("click",newGameBut);
   
   