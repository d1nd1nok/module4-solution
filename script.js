var names = ["John", "Sara", "James", "Michael", "Rachel", "Jill"];

for (var i = 0; i < names.length; i++) {
    var name = names[i];
    
    // Check if the name starts with 'J' or 'j'
    if (name.charAt(0).toLowerCase() === 'j') {
        console.log("Goodbye " + name);
    } else {
        console.log("Hello " + name);
    }
}

