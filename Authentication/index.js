const bcrypt = require('bcryptjs');

const myfunction = async() => {
  const password = 'Red12345';
  const hashedPassword = await bcrypt.hash(password, 8);

  console.log(password);
  console.log(hashedPassword);
}

myfunction();
