export const saveHistory = async(amount, base, convert) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            amount: amount,
            fromCurrency: base,
            toCurrency: convert, }
        )
    }

    const url = `http://localhost:8000/conversion/moneda/save`;

    const resp = await fetch(url, requestOptions);
    const data = await resp.json();
}