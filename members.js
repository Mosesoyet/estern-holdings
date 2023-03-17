
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