const params = (new URL(document.location)).searchParams;
const id = parseInt(params.get('id'));

console.log('Id : ', id);