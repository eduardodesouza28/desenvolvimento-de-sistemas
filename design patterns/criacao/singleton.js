class Database {
    constructor(){
        if (!Database.instance) {
            Database.instance = this
        }
        return Database.instance
    }
}
//não deixa criar mais de uma instancia de uma classe, se for criado mais de uma ele só referencia a existente