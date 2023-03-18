
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

div1.addEventListener("click", () => {
    setTimeout(() => {
        alert("No cheating!, wait for the meeting time!!");
    }, 500)
})

div2.addEventListener("click", () => {
    setTimeout(() => {
        alert("No cheating!, wait for the meeting time!!");
    }, 500)
})

div3.addEventListener("click", () => {
    setTimeout(() => {
        alert("No cheating!, wait for the meeting time!!");
    }, 500)
})

div4.addEventListener("click", () => {
    setTimeout(() => {
        alert("No cheating!, wait for the meeting time!!");
    }, 500)
})

div5.addEventListener("click", () => {
    setTimeout(() => {
        alert("No cheating!, wait for the meeting time!!");
    }, 500)
})