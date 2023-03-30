function getResults() {
    const listen = document.getElementById("listen");

    let inputs_1 = listen.getElementsByClassName("1")[0].getElementsByTagName("input");
    let result_1 = 0;
    for (let index = 0; index < inputs_1.length; index++) {
        const element = inputs_1[index];
        if (!isNaN(Number(element.value))) result_1 += Number(element.value);
    }

    let inputs_2 = listen.getElementsByClassName("2")[0].getElementsByTagName("input");
    let result_2 = 0;
    for (let index = 0; index < inputs_2.length; index++) {
        const element = inputs_2[index];
        if (!isNaN(Number(element.value))) result_2 += Number(element.value);
    }

    let inputs_3 = listen.getElementsByClassName("3")[0].getElementsByTagName("input");
    let result_3 = 0;
    for (let index = 0; index < inputs_3.length; index++) {
        const element = inputs_3[index];
        if (!isNaN(Number(element.value))) result_3 += Number(element.value);
    }

    document.getElementById("result_1").value=result_1;
    document.getElementById("result_2").value=result_2;
    document.getElementById("result_3").value=result_3;



    let array = [result_1, result_2, result_3];
    array.sort(function (a, b) {return a-b;});
    array.reverse();


    if (document.getElementById("result_1").value == array[0]) document.getElementById("winner").textContent = "Winner: Team #1";
    else if (document.getElementById("result_2").value == array[0]) document.getElementById("winner").textContent = "Winner: Team #2";
    else if (document.getElementById("result_3").value == array[0]) document.getElementById("winner").textContent = "Winner: Team #3";
}
function leeren(value) {
    const listen = document.getElementById("listen");
    let inputs = listen.getElementsByClassName(value)[0].getElementsByTagName("input");
    for (let index = 0; index < inputs.length; index++) {
        const element = inputs[index];
        element.value="";
    }
}
function init() {
    const interval = setInterval(() => {
        getResults();
      }, 100);      
}