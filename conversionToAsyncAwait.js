// Function that simulates package delivery - Original Promise-based logic adapted to Async/Await
const deliverPackage = () => {
    return new Promise((resolve, reject) => {
        console.log("Package is on its way...");
        setTimeout(() => {
            const delivered = true; // Simulate delivery status (Change to false to test error handling)
            if (delivered) {
                resolve("Package delivered successfully!");
            } else {
                reject("Failed to deliver package.");
            }
        }, 3000); // Simulates a 3-second delay
        console.log("Package is in wait...");
    });
};

// Converting the consumption of the promise to async/await
const processDelivery = async () => {
    try {
        console.log("Starting delivery process...");
        const message = await deliverPackage();
        console.log(message); // Output: Package delivered successfully!
    } catch (error) {
        console.log(error); // Output: Failed to deliver package.
    } finally {
        console.log("Delivery process attempt finished.");
    }
};

processDelivery();
