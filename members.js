
/* loading members from the json file */

const http = new XMLHttpRequest();

http.open("get", "members.json", true)

http.send();

http.onload = function(){
    if(this.readyState == 4 && this.status == 200) {
        let members = JSON.parse(this.responseText);

        let output = '';

        for(let item of members) {
            output += `
            <div class="member">
                <div class="image">
                    <img src="${item.image}" alt="" >
                </div>
                <h3 class="name">${item.firstname} ${item.lastname}</h3>
                <h4 class="email">${item.contact.email}</h4>
                <h4 class="tel">${item.contact.tel}</h4>
            </div>
            `;
        }
        document.querySelector(".members").innerHTML = output;
    }
}

/* adding handler and click events */

const burger = document.querySelector(".burger");
const selectDiv = document.querySelector(".select-div");
const div1 = document.querySelector(".div1");
const div2 = document.querySelector(".div2");
const div3 = document.querySelector(".div3");
const div4 = document.querySelector(".div4");
const div5 = document.querySelector(".div5");

const h1 = document.querySelector("#h1");
const h2 = document.querySelector("#h2");
const h3 = document.querySelector("#h3");
const h4 = document.querySelector("#h4");
const h5 = document.querySelector("#h5");

div1.addEventListener("click", () => {
    div1.style.background = "white"
    h1.style.display = "block"
    setTimeout(() => {
        div1.remove()
    }, 5000)
})

div2.addEventListener("click", () => {
    div2.style.background = "white"
    h2.style.display = "block"

    setTimeout(() => {
        div2.remove()
    }, 5000)
})

div3.addEventListener("click", () => {
    div3.style.background = "white";
    h3.style.display = "block"
    setTimeout(() => {
        div3.remove()
    }, 5000)
})

div4.addEventListener("click", () => {
    div4.style.background = "white";
    h4.style.display = "block"
    setTimeout(() => {
        div4.remove()
    }, 5000)
})

div5.addEventListener("click", () => {
    div5.style.background = "white";
    h5.style.display = "block";

    setTimeout(() => {
        div5.remove()
    }, 5000)
})