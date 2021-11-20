function Calcular(){
    let Nome = document.getElementById('Nome').value
    let Mensal = Number(document.getElementById('Rmensal').value)
    let Tjuros = Number(document.getElementById('Txjuros').value)
    let Meses = Number(document.getElementById('Nprestacoes').value)

    let juros = Tjuros/100
    
    var res = document.getElementById("Resultado")
         
    

    // pmt = valor mensal a ser financiado
    var p = ((1+juros)**Meses-1)/juros 
    // valorfinal = valor que será poupado futuramente
    var valorfinal = Mensal*p.toFixed(2)
  
        res.innerHTML = `${Nome}, caso você aplique R $${Mensal}, à taxa de juros de ${Tjuros}% ao mês, durante ${Meses} meses,
        acumulará uma poupança de R $${valorfinal}`
    
    
}