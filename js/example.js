var ul = document.getElementsByTagName("ul")[0];
var h2 = document.getElementsByTagName("h2")[0];


// ADD NEW ITEM TO END OF LIST
var list = document.getElementById('page');
var entry = document.createElement('li');
entry.appendChild(document.createTextNode('cream'));
ul.insertBefore(entry,ul.lastChild.nextSibling);

// ADD NEW ITEM START OF LIST
var FirstEntry = document.createElement('li');
FirstEntry.appendChild(document.createTextNode('kale'));
ul.insertBefore(FirstEntry,ul.firstChild);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var node = document.getElementsByTagName('li');
var length = node.length;
for (var i = 0; i < length; i++) {
    node[i].className = node[i].className + "cool";
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var HeadEntry = document.createElement('span');
HeadEntry.appendChild(document.createTextNode(length));
h2.appendChild(HeadEntry);
