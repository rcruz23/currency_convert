import React, {useState} from 'react';
import {CurrencyGrid} from "./CurrencyGrid";

const ConversionMoneda  = () => {
    const [currency, setCurrency] = useState("");
    const [currencySelected, setCurrencySelected] = useState(null);
    const [convertCurrency, setConvertCurrency] = useState("");

    const handleChangeCurrency = (({target}) => {
        setCurrency(target.value);
        setCurrencySelected(target.value.length);
    })

    const handleSubmit = ((e) => {
        e.preventDefault();
        setCurrencySelected(true);
        if(currency.length > 0){
            setConvertCurrency(currency);
        }else{
            setCurrencySelected(false);
        }
    })

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <div className="row m-3">
                    <div className="col-md-5">
                        <select className={ `form-control ${currencySelected === false ? 'is-invalid' : ''}`} onChange={ handleChangeCurrency }>
                            <option value="">Seleccione una opción</option>
                            <option value="USD">USD</option>
                            <option value="PLN">PLN</option>
                        </select>
                        <div className="invalid-feedback">Debe seleccionar un opción para la conversión</div>
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-primary" type="submit">Convertir</button>
                    </div>
                </div>
            </form>
            <CurrencyGrid
                base={convertCurrency}
            />
        </div>
    )
}

export default ConversionMoneda;