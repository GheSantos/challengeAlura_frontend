const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function encriptar(palavraEncriptada) {
    let matrizCodigo = [
        ["a", "ai"],
        ["e", "enter"],
        ["i", "imes"],
        ["o", "ober"],
        ["u", "ufat"]
    ]
    palavraEncriptada = palavraEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (palavraEncriptada.includes(matrizCodigo[i][0])) {
            palavraEncriptada = palavraEncriptada.replaceAll(matrizCodigo[i][0], (matrizCodigo[i][1]));
        }
    }
    return palavraEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(palavraDesencriptada) {
    let matrizCodigo = [
        ["a", "ai"],
        ["e", "enter"],
        ["i", "imes"],
        ["o", "ober"],
        ["u", "ufat"]
    ]
    palavraDesencriptada = palavraDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (palavraDesencriptada.includes(matrizCodigo[i][1])) {
            palavraDesencriptada = palavraDesencriptada.replaceAll(matrizCodigo[i][1], (matrizCodigo[i][0]));
        }
    }

    console.log("Texto Desencriptado: " + palavraDesencriptada);
    return palavraDesencriptada;
}

function copiarTexto() {

    const texto = mensagem.value;

    mensagem.select();

    document.execCommand("copy");
}

function Limpar() {
    mensagem.value = "";
}