
let time = 100;
let val = ['|','/', '-', '\\', '|', '/', '-' ,'\\','|\n'];

val.forEach(ele => {
  setTimeout(() => {
    process.stdout.write('\r' + ele + '');
  }, time += 200);
  
});