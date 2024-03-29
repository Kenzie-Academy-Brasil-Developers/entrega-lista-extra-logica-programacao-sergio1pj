function calculateSalary(_salario, _vendas) {
    let novoSalario;
    let comissao;
    const limite = 1200;
    if(_vendas <= limite) {
        comissao =  _vendas * 0.03
        novoSalario = _salario  + comissao;
        return novoSalario;
    }else {
        comissao = limite * 0.03 + (_vendas - limite) * 0.05
        novoSalario = _salario + comissao;
        return novoSalario;
    }
}

console.log(calculateSalary(1000, 1480));

function cashMachine(_saque, _salario, _vendas) {
    let notasDisponiveis = [200, 100, 50, 20, 10, 5, 2];
    let notas = [];
    let salarioTotal = calculateSalary(_salario, _vendas);
    let result = "Notas sacadas: "
    if(_saque > salarioTotal) {
        return "Não foi possível efetuar o saque. Saldo insuficiente";
    }
    if(Number.isInteger(_saque) === true && _saque > 0) {
        let saqueResidual = _saque;
        for(let i = 0; i < notasDisponiveis.length; i++) {
            notas.push(Math.floor(saqueResidual / notasDisponiveis[i]));
            saqueResidual = saqueResidual % notasDisponiveis[i];
            let pluralNotas = notas[i] > 1 ? "notas" : "nota";
            if(notas[i] >= 1) {
                result += `${notas[i]} ${pluralNotas} de R$${notasDisponiveis[i]}, `
            }
        }
        return result.concat(`Saldo Atual: R$${salarioTotal - _saque}`)
    } else {
        return "Verifique se o saque é uma quantia válida";
    }
}
console.log(cashMachine(550, 1000, 1480));

function calculateStock(_atual, _max, _min) {
    let quantidadeMedia = (_max + _min) / 2;
    if(_atual >= quantidadeMedia) {
        return "Não efetuar compra";
    }
    return "Efetuar compra";
}
console.log(calculateStock(100, 300, 0));
console.log(calculateStock(151, 300, 0));

function calculateAge(_nascimento, _atual) {
    const anos = _atual - _nascimento;
    const meses = 12 * anos;
    const dias = 365 * anos;
    const semanas = 52 * anos;
    return `Idade em anos: ${anos}, idade em meses: ${meses}, idade em dias: ${dias}, idade em semanas: ${semanas}`;
}
console.log(calculateAge(1994, 2022));

const matrizQuadrada3x3 = [ [1, 2, 3] , [4, 5, 6] , [7, 8, 9] ];
function getDiagonal(_matriz) {
    const diagonal = [];
    const N = _matriz.length;
    for(let i = 0; i < N; i++) {
        diagonal.push(_matriz[i][i]);
    }
    return diagonal;
}
console.log(getDiagonal(matrizQuadrada3x3));
