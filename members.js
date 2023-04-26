
/* loading members from the json file */

const http = new XMLHttpRequest();

http.open("get", "members.json", true)

http.send();

http.onload = function(){
    if(this.readyState == 4 && this.status == 200) {
        let members = JSON.parse(this.responseText);

        let output = '';
        let memberNow = '';
        for(item of members) {
            output += `
            <div data-aos="zoom-in" 
            data-aos-easing="linear" data-aos-duration="1000" 
            class="member">
                <div class="image">
                    <img src="${item.image}" alt="" >
                </div>
                <h3 class="name">${item.firstname} ${item.lastname}</h3>
                <h4 class="email"><a href="mailto:${item.contact.email}">${item.contact.email}</a></h4>
                <h4 class="tel">${item.contact.tel}</h4>
                <h4 class="payment">Payment Type: ${item.Payment}</h4>
                <h4 class="position">Position: ${item.Position}</h4>
            </div>
            `;
            if(item.Position === '2') {
                memberNow += `
                <div class="member-now">
                   <!--<div class="member-image">
                    <img src="${item.image}" alt="${item.firstname} photo">
                   </div>-->
                   <div class="some-detail" data-aos="fade-right" data-aos-offset="300"
                   data-aos-easing="ease-in-sine" data-aos-duration="1500">
                       <h2>Know who you will contribute to this month:</h2>
                       <p>
                           <b>NOTE</b>: Please keep time and all payment should be made on time, we accepts late 
                           payments till the 10<sup>th</sup> date of a month.
                       </p>
                       <p> In case of any issue that could result to late payment, <i>Please inform the person concern</i></p>
                   </div>
                   <div class="member-detail" data-aos="fade-left" data-aos-offset="300"
                   data-aos-easing="ease-in-sine" data-aos-duration="1500">
                       <h3 class="name">Full Name: ${item.firstname} ${item.lastname}</h3>
                       <h4 class="email">Email: <a href="mailto:${item.contact.email}">${item.contact.email}</a></h4>
                       <h4 class="tel">Contact: ${item.contact.tel}</h4>
                       <h4 class="payment">Payment Type: ${item.Payment}</h4>
                       <h4 class="position">Position: ${item.Position}</h4>
                    </div>
                </div>
                `
            }
        }
        document.querySelector(".members").innerHTML = output;
        document.querySelector(".member-this-month").innerHTML = memberNow;
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