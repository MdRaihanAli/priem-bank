// var  firstEnter = document.getElementById('firstEnter');
// firstEnter.addEventListener('click',function(){
//     var loginArea = document.getElementById('loginArea');
//     var maneArea = document.querySelector('.mane-area');
//     // loginArea.style.display="none";
//     maneArea.classList.add('nno')
// })

var addDeposit = document.getElementById('addDeposit');


addDeposit.addEventListener('click',function(){
    var depositeAmount = document.getElementById('depositAmount').value;
    depositeAmount = parseFloat(depositeAmount)

    calculation('depositeTotal',depositeAmount)
    calculation('carretBalance',depositeAmount)

   document.getElementById('depositAmount').value='';
})

// --------------widthdro sectioon---------------
var widthdrobtn = document.getElementById('widthdrobtn');

widthdrobtn.addEventListener('click',function(){
var widthdroBlance = document.getElementById('widthdroBlance').innerText;
 widthdroBlance = parseFloat(widthdroBlance);

 var widthAmount = document.getElementById('widthAmount').value;
 widthAmount = parseFloat(widthAmount);

 var totalWidthdrow = widthAmount + widthdroBlance;
 document.getElementById('widthdroBlance').innerText=totalWidthdrow;

 var carretBalance = document.getElementById('carretBalance').innerText;
 carretBalance = parseFloat(carretBalance );
  
 var wcb = carretBalance-widthAmount;
 console.log(wcb);

 document.getElementById('carretBalance').innerText=wcb;


 document.getElementById('widthAmount').value='';





})

function calculation(id,depositeAmount){

    var depositeTotal = document.getElementById(id).innerText;   
    depositeTotal = parseFloat(depositeTotal);
    var total = depositeAmount + depositeTotal;
    document.getElementById(id).innerText=total;
}