var user = prompt("Write your name", "");
if (user.length <= 2) {
    alert("Error");
} else {
    window.localStorage.setItem("name", user)
}

window.onload = function () {
    var value = window.localStorage.getItem("name");
    if (value !== null) {
        document.getElementById("result").innerHTML = "Hello" + " " +  user
    } else {
        document.getElementById("result").innerHTML = "Hello guest!";
    }
}




// var currentCounter = 1;
// function makeCounter() {
//     return {
//         getNext:function(){
//             return currentCounter++;
//         },
//         set: function(value) {
//             currentCounter = value;
//         },
//         reset: function() {
//             currentCounter = 1;
//         }
//     };
// }


// var counter = makeCounter();
// var counter2 = makeCounter();

// alert(counter.getNext());
// alert(counter.getNext());
// alert(counter.getNext());

// counter.set(111)
// alert(counter2.getNext());
// alert(counter2.getNext());
// alert(counter2.getNext());