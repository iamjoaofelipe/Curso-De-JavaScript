// Criar objeto imutavél em JavaScript.
let cores = {
    "verde": "#10e04b",
    "azul": "#1b50e0",
    "preto": "#000000",
    "branco": "#ffffff"
}
Object.freeze(cores);
cores.amarelo = "#fff200";
cores.verde = "345sg5";
delete cores.verde