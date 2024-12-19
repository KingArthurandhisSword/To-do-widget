document.getElementById("todo-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Estää lomakkeen oletustoiminnon
    const taskInput = document.getElementById("todo-input"); // Hakee syötteen
    const task = taskInput.value.trim(); // Poistaa tyhjät välit alusta ja lopusta

    if (task) {
        addTaskToList(task); // Lisää tehtävän listalle
        taskInput.value = ""; // Tyhjentää syötekentän
    }
});

function addTaskToList(task) {
    const todoList = document.getElementById("todo-list");
    const li = document.createElement("li");
    li.style.display = "flex"; // Jotta napit ja teksti ovat samassa linjassa
    li.style.alignItems = "center";

    // Luo pyöreän täpän napin vasemmalle puolelle
    const doneButton = document.createElement("button");
    doneButton.className = "done-button"; // Käyttää CSS-tyyliä
    doneButton.onclick = () => doneButton.classList.toggle("completed"); // Vaihtaa luokkaa "completed"

    // Luo tehtävän tekstin
    const taskText = document.createTextNode(task);

    // Luo "Delete"-nappi oikealle
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "x";
    deleteButton.className = "delete-button"; // Käyttää CSS-tyyliä
    deleteButton.onclick = () => li.remove(); // Poistaa tehtävän

    // Lisää elementit listaelementtiin
    li.appendChild(doneButton); // Täppänappi vasemmalle
    li.appendChild(taskText); // Teksti keskelle
    li.appendChild(deleteButton); // Delete-nappi oikealle

    // Lisää listaelementti tehtävälistaan
    todoList.appendChild(li);
}
