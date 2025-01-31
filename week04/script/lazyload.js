let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];
let namesB = names.filter(name => name.charAt(0) === 'B');
console.log(namesB);
let nameLenght = names.map((x) => x.length);
console.log(nameLenght);
names.reduce((total, name) => total + name.length, 0) / names.length;
`Welcome to the ${nameLenght}`;