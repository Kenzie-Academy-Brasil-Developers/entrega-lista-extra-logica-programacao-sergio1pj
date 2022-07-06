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
