//Operador rest em JavaScript.
function minhaFuncao(...args) {
    console.log(args)
}
minhaFuncao(1);
minhaFuncao(1, 2);
minhaFuncao(1, 2, 3, 4);
minhaFuncao([1, 2, 3], [4, 5, 6]);
minhaFuncao(1, 2, 3, 4, 5, 6);
// exemplo.
const calcular = (x, y, z) => {
    const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
};
//const calcular1 = (...args) => {
//return args.reduce((a, b) => a, b, 0);
//};