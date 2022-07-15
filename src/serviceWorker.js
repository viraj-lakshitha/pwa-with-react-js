export default function serviceWorker() {
    const serviceWorkerURL = `${process.env.PUBLIC_URL}/service-worker.js`
    navigator.serviceWorker.register(serviceWorkerURL).then(response => {
        console.log("Response from SW -> ", response)
    }).catch(error => {
        console.log("Error from SW -> ", error)
    })
}