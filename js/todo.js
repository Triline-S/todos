
var counter = 0

document.addEventListener("keyup", function(event) {
    if (event.key === "Enter" && document.getElementById("input").value != "") {
        var input = document.getElementById("input").value;
        document.getElementById("todo-list").innerHTML += "<li id=\"counter" + counter + "\">" + 
        "<button onclick=\"deleteTask(" + counter + ")\"> x </button> " + 
        "<span>" + input + "<span>" + "</li>";
        counter++;
    }
});

function deleteTask(TaskId){
    var target = document.getElementById("counter" + TaskId);
    target.remove();
}