    let boxes=document.querySelectorAll(".box");
    let reset=document.querySelector(".resetbtn");
    let newgamebtn=document.querySelector("#newgame");
    let messagecontainer=document.querySelector(".messagecontainer");
    let message=document.querySelector("#message");


    let turn=true;

    const winpattern=[
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [3,4,5],
        [6,7,8],

    ];

    boxes.forEach((box) =>{
        box.addEventListener("click",()=> {
            if(turn){
                box.innerText="O";
                turn=false; 
            }
            else{
                box.innerText="X";
                turn=true;
            }
            box.disabled=true;
            checkwinner();

        }
        );  
    }
    );

    const disabledbtns = () =>{
        for(let x of boxes){
            x.disabled=true;
        }
    };

    const enablebtns= ()=> {
        for(let x of boxes){
            x.disabled=false;
            x.innerText="";
        }
    };

    newgamebtn.addEventListener("click",()=> {
        enablebtns();
        messagecontainer.classList.add("hide");
        }
    );
    
    const showwinner = (winner) => {
        message.innerText = `Congrats! Winner is ${winner}`;
        messagecontainer.classList.remove("hide");
        disabledbtns();
    }


    const checkwinner = ()  => {
        for(let pattern of winpattern){
            let val1=boxes[pattern[0]].innerText;
            let val2=boxes[pattern[1]].innerText;
            let val3=boxes[pattern[2]].innerText;
        if(val1!="" && val2!="" && val3!="" ){
            if (val1===val2 && val2===val3){
                showwinner(val1);
                
            }
        }
        }
    
    };



