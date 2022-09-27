// let div1 = document.createElement('div');
// div1.textContent = 'hi world 1';
// div1.className = 'inserted-div';

// let div2 = document.createElement('div');
// div2.textContent = 'hi world 2';
// div2.className = 'inserted-div';

// let div3 = document.createElement('div');
// div3.textContent = 'hi world 3';
// div3.className = 'inserted-div';

// let div4 = document.createElement('div');
// div4.textContent = 'hi world 4';
// div4.className = 'inserted-div';

// let container = document.querySelector('#container');
// container.before(div1);
// container.prepend(div2);
// container.append(div3);
// container.after(div4);


let ul = document.querySelector('ul');

let item = document.createElement('li');
item.innerHTML = '>>>Item 0 <<<';
ul.prepend(item);   

let item2 = document.createElement('li');
item2.innerHTML = '>>>Item 4 <<<';
ul.append(item2);

ul.before('before');
ul.after('after');