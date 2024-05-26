function fibonacci(n){
    if(n>=0 && n<= 1)
        return n;
    else
        return fibonacci(n-1) + fibonacci(n-2);
}
function fibo(){

    var number = document.getElementById("number").value;
    var output = document.getElementById("output");
    output.innerHTML = "";
    for(let i = 0;i<number;i++){
        let a = document.createElement("div");
        a.setAttribute("class", "ou")

        a.textContent = fibonacci(i);
        console.log(fibonacci(i));
        output.appendChild(a);
    }
}
