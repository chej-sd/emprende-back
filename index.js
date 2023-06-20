const http = require("http")

function requestControler () {
    // Lógica
    console.log("HOLAAAA");
}

// Configuración del srv
const server = http.createServer(requestControler)

server.listen(4000)
