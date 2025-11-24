export function generatePassword(passwordLength) {
  const sample =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += sample[Math.floor(Math.random() * sample.length)];
  }
  return password;
}
