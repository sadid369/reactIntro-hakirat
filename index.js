function addTodo (params) {
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;
    const h2 = document.createElement("h2");
    h2.textContent = title;
    const p = document.createElement("p");
    p.textContent = description;
    document.body.append(h2, p);

    console.log(title);
    console.log(description);
}

const button = document.querySelector("button");
button.addEventListener("click", addTodo);
