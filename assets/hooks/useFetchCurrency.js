import { useEffect, useState } from "react"
import { getCurrency } from "../helpers/getCurrency";
import { saveHistory } from "../helpers/saveHistory";

export const useFetchCurrency = (base, convert) => {
    const [state, setState] = useState({
        currentConvertValue: "",
        convert: "",
        base: "",
        loading: true
    });

    useEffect(() => {
        getCurrency(base, convert)
            .then(resp => {
                setState({
                    currentConvertValue: resp[`${base}_${convert}`],
                    convert: convert,
                    base: base,
                    loading: false
                })
               saveHistory(resp[`${base}_${convert}`], base, convert);
            });
    }, [base, convert])

    return state;
}