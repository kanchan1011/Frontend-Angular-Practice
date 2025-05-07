let myPromise = new Promise((resolve, reject) => {
    let success = true; // You can change this to `false` to simulate failure

    if(success) {
        resolve("The operation was successful!");
    } else {
        reject("The operation failed.");
    }
});

myPromise
    .then((message) => {
        console.log(message); // This will run if the promise is resolved
    })
    .catch((message) => {
        console.log(message); // This will run if the promise is rejected
    });