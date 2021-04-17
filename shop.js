//implement a total function that wil check the innerHTML of the plus and minus buttons and calculate the total

function total(){
    let prices = Array.from(document.getElementsByClassName('price'));
    let quantities=Array.from(document.getElementsByClassName('qte'));
    let totale=0;    
    for(let i=0;i<prices.length;i++){
        totale+=prices[i].innerHTML*quantities[i].innerHTML;
    }
    return (document.getElementById('totalp').innerHTML='Shopping Bag total : $ '+totale)
}


// make the plus buttons reactive 

var plusBtnArray = Array.from(document.getElementsByClassName('add'));


for(let plusBtn of plusBtnArray){
    plusBtn.addEventListener('click',function(){
        plusBtn.nextElementSibling.innerHTML++;
        total();
    })
}


// make the minus buttons reactive

var minusBtnArray = Array.from(document.getElementsByClassName('minus'));

for (let minusBtn of minusBtnArray){
    minusBtn.addEventListener('click',function(){
        if(minusBtn.previousElementSibling.innerHTML>0){
            minusBtn.previousElementSibling.innerHTML--;
            total();
        }    
    });
}

// make the heart icons reactive

var heartArray = Array.from(document.getElementsByClassName('fa-heart'));
for(let heart of heartArray){
    heart.addEventListener('click',function(){
        if(heart.style.color==='grey'){
            heart.style.color='red'
        }
        else {
            heart.style.color='grey'
        }
    });
}

// make the trush icons reactive

var trushArray= Array.from( document.getElementsByClassName('fa-trash-alt'));

for (let trush of trushArray){
    trush.addEventListener('click',function(){
        trush.parentElement.remove();
        total();
    });
}
