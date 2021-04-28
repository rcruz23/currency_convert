import React, {useEffect, useState} from 'react';
import axios from "axios";

const CurrencyHistory  = () => {
    const [history, setHistory] = useState({registers: [], loading:true});

    useEffect(() => {
        getHistory()
    }, []);

    const getHistory = () => {
        axios.get("http://localhost:8000/conversion/moneda/history").then(response => {
            setHistory({registers: response.data, loading: false});
        })
    }

    return (
        <div>
            <section className="row-section">
                <div className="container">
                    {history.loading ? (
                        <div className="row d-flex justify-content-center">
                            <div className="spinner-border" role="status">
                                <span className="sr-only"></span>
                            </div>
                        </div>
                    ) : (
                        <div className="row">
                            <table className="table table-responsive">
                                <thead>
                                    <tr>
                                        <td>Moneda base</td>
                                        <td>Moneda a convertir</td>
                                        <td>Valor del cambio</td>
                                        <td>Fecha de consulta</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    { history.registers.map(register =>
                                        <tr key={register.id}>
                                            <td>{register.fromCurrency}</td>
                                            <td>{register.toCurrency}</td>
                                            <td>{register.amount}</td>
                                            <td>{register.createdAt}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}

export default CurrencyHistory;