//Bài 1:
let errors = {
  name: {
    required: "Vui lòng nhập họ tên",
    min: "Họ tên phải từ 5 ký tự",
  },
  email: {
    email: "Định dạng email không hợp lệ",
    unique: "Email đã có người sử dụng",
    required: "Vui lòng nhập địa chỉ email",
  },
  password: {
    required: "Vui lòng nhập mật khẩu",
    same: "Mật khẩu phải khớp với mật khẩu nhập lại",
  },
};
let getError = function (field) {
  console.log('[Bài 1] ',Object.values(errors[field])[0]);
};

getError("password");

//Bài 2:
const customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

function Person(name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
};
function createCustomers(customers) {
  let field = "shortName";
  const newArrr = customers.map((el)=>{
    return new Person(el.name, el.age, el.address)
  })
  return newArrr.sort((a,b)=>{
    return a.age - b.age
  }).map((el) => {
    el[field] = `${el.name.slice(0, el.name.indexOf(" "))} ${el.name.slice(
      el.name.lastIndexOf(" ")
    )}`;
    return el;
  });
}
console.log("[Bài 2]", createCustomers(customers));

//Bài 3:
function Validate(name, password, email) {
  this.name = name;
  this.password = password;
  this.email = email;
};

let data = [];
function handleRegister(name, password, email){
  let arrError = []
  if(!name){
    arrError.push('name');
  }
  if(!password){
    arrError.push('password');
  }
  if(!email){
    arrError.push('email');
  }
  if(arrError.length == 0){
    const person = new Validate(name, password, email);
    person.role = 'user'
    data.push(person);
  }else{
    console.log(`[Bài 3] Bạn nhập thiếu trường sau: ${arrError.map(el=>el).join(', ')}`)
  }
};
function handleLogin(name, password){
  let arrError = []
  if(!name){
    arrError.push('name');
  }
  if(!password){
    arrError.push('password');
  }
  if(arrError.length == 0){
    const result = data.find((el)=>{
       return el.name ===name && el.password===password ? el : ''
    })
    if(result.length === 0){
      console.log('[Bài 3] Thông tin đăng nhập không hợp lệ !!!')
    }else{
      console.log('[Bài 3]Thông tin người đăng nhập: ', result)
    }
  }else{
    console.log(`[Bài 3] Bạn nhập thiếu trường sau: ${arrError.map(el=>el).join(', ')}`)
  }
}
handleRegister(
  "Nguyen Van A",
  "123456",
  "nguyenvana@email.com"
);
handleRegister(
  "Nguyen Van B",
  "1234567",
  "nguyenvanb@email.com"
);
handleRegister(
  "Nguyen Van B",
  "1234567",
  "nguyenvanb@email.com"
);
handleLogin("Nguyen Van B", "1234567");