
document.addEventListener("keyup", function(event) {
    if (event.key === "Enter" && document.getElementById("input").value != "") {
        var input = document.getElementById("input").value;
        document.getElementById("todo-list").innerHTML += "<li>" + input + "</li>";
    }
});