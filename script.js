function calculateSalary(_salario, _vendas) {
    let novoSalario;
    const limite = 1200;
    if(_vendas <= limite) {
        novoSalario = _salario  + _vendas * 0.03;
        return novoSalario;
    }else {
        novoSalario = _salario + limite * 0.03 + (_vendas - limite) * 0.05;
        return novoSalario;
    }
}
console.log(calculateSalary(1212, 1000));
console.log(calculateSalary(1212, 2000));

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
console.log(cashMachine(350, 1212, 2000))