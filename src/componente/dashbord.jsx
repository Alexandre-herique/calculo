import React, {useState} from 'react';
import './dashbord.css'
 


function Dashbord () {

    const [result,setResult] = useState([]);
    const [numerador, setNumerador] = useState('');
    const [denominador, setDenominador] = useState('');
    const [pol, setPol] = useState('');


    function digitePol (e){
        setPol(e.target.value)
    }
   
     function digitaNumerdor (e){
        setNumerador(e.target.value)
    }
    function digitaDenomindor (e){
        setDenominador(e.target.value)
    }
    

    
    
    
        
        var s1 = parseFloat(pol) + 0
        var s2 = parseFloat(numerador)
        var s3 = parseFloat(denominador)
        var mm = parseFloat(25.4)
        // var resltPol = s1 * mm;
        // var resultFra = (s2 * mm) / s3

    
        var resultado = (((s1 + 0) * mm) + (s2 * mm))/s3
        var total = resultado.toFixed(2)



    
        return(
            <div className="Dashbord">
                <div className= "card2">
                    <h1>Comversor de medida Pol fracionarias para mm </h1>
                    <div className= "medida">
                        <p className="subtitulo">Adicione a medidada Polegada</p>
                        <div>
                            <p>Pol inteira </p>
                            <input type="number" onChange={digitePol} value={pol} />
                            <p className="fracao">fração</p>
                            <input type="number" onChange={digitaNumerdor} value={numerador} />
                            <p>/</p>
                            <input type="number" onChange={digitaDenomindor} value={denominador} />
                           
                            <p>o resultado é: {total}</p>
                        </div>
                    </div>
        
        
                </div>
             </div>   
        )
    
        
}

export default Dashbord;
