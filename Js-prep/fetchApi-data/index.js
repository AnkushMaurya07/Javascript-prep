

// async function data() {

//     const startTime = new Date()

//     const responseData = await fetch("https://dummyjson.com/products")
//     const data = await responseData.json()

//     const endTime = new Date()

//     const timeTaken = endTime - startTime
//     console.log(timeTaken);

//     console.log(data);
// }

// data()
// console.log("Hi I am First");

setTimeout(async () => {
    
    const startTime = new Date()

    const responseData = await fetch("https://dummyjson.com/products")
    const data = await responseData.json()

    const endTime = new Date()

    const timeTaken = endTime - startTime
    console.log(timeTaken);

    console.log(data);
}, 300);

