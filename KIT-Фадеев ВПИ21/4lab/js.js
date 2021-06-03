let div = document.createElement('div');
div.className = "alert";
div.innerHTML = "Идет загрузка...";
document.body.prepend(div);
setTimeout(() => div.remove(), 1000);


function start(a) {
    return document.createElement(a);
}

function end(b, a) {
    return b.appendChild(a)
}

const div1 = document.getElementById('people');
const i = 10;
const url = 'https://randomuser.me/api/?results=10';



fetch(url)
    .then((response) => response.json())
    .then(function(data) {
        let people = data.results;
        return people.map(function(people) {
            let img = start('img');
            let divcard = start('div');
            divcard.className = "card";
            let divcardbody = start('div');
            divcardbody.className = "card-body";
            let divrow = start('div');
            divrow.className = "row";
            let divgender = start('div');
            divgender.className = "col-auto";
            let divname = start('div');
            divname.className = "col";
            let divloc = start('div');
            divloc.className = "col";
            let divemail = start('div');
            divemail.className = "col";
            let divdate = start('div');
            divdate.className = "col"; //auto
            let divphone = start('div');
            divphone.className = "col";
            let divimg = start('div');
            divimg.className = "col-auto"; //auto
            divgender.innerHTML = `${people.gender}`;
            divname.innerHTML = `${people.name.first}<br>${people.name.last}`;
            divloc.innerHTML = `${people.location.city}`;
            divemail.innerHTML = `${people.email}`;
            let idate = people.dob.date.split('T')[0];
            divdate.innerHTML = `${idate}<br>Age:${people.dob.age}`;
            divphone.innerHTML = `${people.phone}`;
            divimg.innerHTML = ``;
            img.src = people.picture.medium;
            end(divcard, divcardbody);
            end(divcardbody, divrow);
            end(divrow, divgender);
            end(divrow, divname);
            end(divrow, divloc);
            end(divrow, divemail);
            end(divrow, divdate);
            end(divrow, divphone);
            end(divrow, divimg);
            end(divimg, img);
            end(div1, divcard);
        })
    })
    .catch(function(error) {
        console.log(error);
    });