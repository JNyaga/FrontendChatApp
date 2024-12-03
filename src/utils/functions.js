//utils/function.js


/**
 * title- New message from open chat
 * icon - image Url from flaticon
 * body - main contetn of the notification
 * 
 */
function sendNotification(message, user) {
    document.onvisibilitychange = () => {
        if (document.hidden) {
            const notification = new Notification("New message from open Chat", {
                icon: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
                body: `@${user}: ${message}`,
                vibrate: true
            })
            notification.onclick = () => function () {
                window.open("http://localhost:3000/chat")
            }
        }
    }

    // close not after 3 seconds
    // setTimeout(() => {
    //     notification.close();
    // }, 3 * 1000);
}



export default function checkPageStatus(message, user) {
    if (user !== sessionStorage.getItem("userName")) {
        if (!("Notification" in window)) {
            alert("this browser does not support system notification")
        }
        else if (Notification.permission === "granted") {
            sendNotification(message, user)
        }
        else if (Notification.permission !== "denied") {
            Notification.requestPermission((permission) => {
                if (permission === "granted") {
                    sendNotification(message, user)
                }
            })
        }
    }


}