function myName(name) {
    return 'meu nome eh ' + name;
}



function verify(age, nome){
    if (age >= 18) {
        return myName(nome) + ', Maior de idade'
    }else{
        return myName(nome) + ' Menor de idade'
    }
}



(function(){
    const ages = 22
    const names = 'Allan Cristhian'

    console.log(verify(ages, names))
})()