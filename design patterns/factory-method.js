class Notification {
    sendMessage(message) {
        throw new Error("o método criar não está definido")
    }
}

class NotificationEmail extends Notification {
    sendMessage(message) {
        console.log("enviando um email: " + message)
    }
}
class NotificationSMS extends Notification {
    sendMessage(message) {
        console.log("enviando um SMS: " + message)
    }
}

class FactoryNotification {
    static createNotification(type){
        switch (type){
            case "email":
                return new NotificationEmail()
            case "sms":
                return new NotificationSMS()
            default:
                throw new Error("tipo desconhecido")
        }
    }
}

