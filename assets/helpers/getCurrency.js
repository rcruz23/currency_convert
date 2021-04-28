export const getCurrency = async(base, convert) => {
    const url = `https://free.currconv.com/api/v7/convert?q=${base}_${convert}&compact=ultra&apiKey=3297a4db42ad3d1d415b`;
    //url para pruebas de consumo por exceso de peticiones a url
    //const url = `http://localhost:8000/api/currency?base=${base}&convert=${convert}`;
    let data = {};

    const resp = await fetch(url);
       if(resp.ok){
           data = await resp.json();
       }

    return data;
}