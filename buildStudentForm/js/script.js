let Student=function (fullname,birthday,gender,addr,classOf,email,tel) {
    this.name=fullname;
    this.gender=gender;
    this.addr=addr;
    this.classOf=classOf;
    this.email=email;
    this.tel=tel;
};
function getValue(id) {
    return document.getElementById(id).value;
}
function newStudent() {
    let s=new Student(getValue('name'),getValue('birthday'),getValue('gender'),getValue('address'),getValue('classOf') ,getValue('email',getValue('phoneNumber')));
console.log(s);
}