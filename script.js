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

    // var depositeTotal = document.getElementById('depositeTotal').innerText;   
    // depositeTotal = parseFloat(depositeTotal);
    // var total = depositeAmount + depositeTotal;
    // document.getElementById('depositeTotal').innerText=total;
    calculation('depositeTotal',depositeAmount)
    calculation('carretBalance',depositeAmount)

//     var carretBalance = document.getElementById('carretBalance').innerText;
//     carretBalance = parseFloat(carretBalance);
//    var total = carretBalance+depositeAmount;
//    document.getElementById('carretBalance').innerText=total;

   document.getElementById('depositAmount').value='';
})


function calculation(id,depositeAmount){

    var depositeTotal = document.getElementById(id).innerText;   
    depositeTotal = parseFloat(depositeTotal);
    var total = depositeAmount + depositeTotal;
    document.getElementById(id).innerText=total;
}