const MAX_STUDENT = 100;
let Student = function (id, name, birthday, gender, addr, classOf, email, tel) {
    this.id = id;
    this.name = name;
    this.birthday=birthday;
    this.gender = gender;
    this.addr = addr;
    this.classOf = classOf;
    this.email = email;
    this.tel = tel;
};

function getValue(id) {
    return document.getElementById(id).value;
}

function newStudent() {
    let s = [];
    for (let i = 1; i < MAX_STUDENT; i++) {
        s = new Student(i, getValue('name'), getValue('birthday'), getValue('gender'), getValue('address'), getValue('classOf'), getValue('email'), getValue('phoneNumber'));
        console.log(s);
        i++;
    }
    return s;
}

function showStudent() {
    let s = new Student(1, getValue('name'), getValue('birthday'), getValue('gender'), getValue('address'), getValue('classOf'), getValue('email'), getValue('phoneNumber'));

    console.log(s);
    let txt = '';
    txt += "<table>" +
        "<tr>" +
        "<td>id</td>" +
        "<td>name</td>" +
        "<td>birthday</td>" +
        "<td>gender</td>" +
        "<td>address</td>" +
        "<td>Class of</td>" +
        "<td>email</td>" +
        "<td>phone number</td>" +
        "</tr>";
    txt += "<tr>";
    txt += "<td>" + s.id + "</td>";
    txt += "<td>" + s.name + "</td>";
    txt += "<td>" + s.birthday + "</td>";
    txt += "<td>" + s.gender + "</td>";
    txt += "<td>" + s.addr + "</td>";
    txt += "<td>" + s.classOf + "</td>";
    txt += "<td>" + s.email + "</td>";
    txt += "<td>" + s.tel + "</td>";
    txt+="</tr></table>";
    document.getElementById('display1').innerHTML = txt;
}