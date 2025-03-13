class Usuario {
    constructor(id, nome, email) {
        this.id = id
        this.nome = nome
        this.email = email
    }
}
class UserRepository {
    constructor() {
        this.users = []
    }
    addUser(user) {
        this.users.push(user)
    }
    deleteUser(id) {
        this.users = this.users.filter(user => user.id != id) 
    }
    getUserById(id) {
        return this.users.find(user => user.id == id)
    }
}
const userRepo = new UserRepository()
const user1 = new Usuario(1234, "joão", "joao@gmail.com")
userRepo.addUser(user1)