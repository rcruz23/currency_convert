import React from 'react';
import PropTypes from 'prop-types';
import {useFetchCurrency} from "../hooks/useFetchCurrency";

export const CurrencyGridItem = ({baseCur, convertCur}) => {
    const { currentConvertValue, convert, base} = useFetchCurrency(baseCur, convertCur);

    return (
        <div className="row">
            <div className="col-md-2"><label>{ convert }</label></div>
            <div className="col-md-2"><label>{ currentConvertValue }</label></div>
        </div>
    )
}

CurrencyGridItem.propTypes = {
    baseCur: PropTypes.string.isRequired,
    convertCur: PropTypes.string.isRequired
}