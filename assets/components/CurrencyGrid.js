import React from 'react';
import { CurrencyGridItem } from "./CurrencyGridItem";


export const CurrencyGrid = ({base}) => {

    const currencies = base.trim().length > 0 ? ["MXN", "ERN", "DZD", "CDF", "MAD", "SYP"] : [];

    return (
        <>
            <div className="card-grid">
                <ol>
                    {
                        currencies.map(cur => (
                            <CurrencyGridItem key={cur} baseCur={base} convertCur={cur}/>
                        ))
                    }
                </ol>
            </div>
        </>
    )
}
