function addPromise (a, b) {
    return new Promise(function(resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        } else{
            reject('Not valid parameters');
        };
    });
}

addPromise(2, 'b').then(function(sum) {
    console.log('promise success', sum);
}, function(err) {
    console.log('promise error', err);
});
