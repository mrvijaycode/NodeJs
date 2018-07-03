
// Asynchronous
console.log('Before..');

const p = getuser(1);
p.then(user => console.log(user));

console.log('After');

function getuser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a user from database..');
            resolve({ id: id, gitHubUsername: 'mosh' });
        }, 2000);
    });
}