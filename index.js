const dotenv = require('dotenv')
dotenv.config()
const http = require("http")

function requestControler () {
    // Lógica
    console.log("HOLAAAA");
}

// Configuración del srv
const server = http.createServer(requestControler)
const PORT = process.env.PORT 
server.listen(PORT, function () {
    console.log("Aplicación corriendo en el puerto: " + PORT )
})
