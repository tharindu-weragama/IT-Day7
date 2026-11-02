let Number = Math.random() * 10 + 1;

let ranNumber = Math.floor(Number);

console.log(ranNumber);

function btnGuessNumberOnAction() {
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
    });
}   