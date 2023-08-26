const friendStatus = document.querySelector("h2");
const btn = document.querySelector("#btn");
let flag = 0;

btn.addEventListener("click", () => {
    if (flag == 0){
        friendStatus.innerHTML = "Stranger";
        friendStatus.style.color = "red";
        btn.innerHTML = "Add Friend"
        btn.style.backgroundColor = "rgb(87, 221, 139)"
        flag = 1;
    } else {
        friendStatus.innerHTML = "Friend";
        friendStatus.style.color = "green";
        btn.innerHTML = "Remove"
        btn.style.backgroundColor = "#d9d9d4"
        flag = 0;
    }
})


