const dateFormat = (dateStr : string): string => {
    let aux = dateStr.split(/\D/g);
    return [aux[2],aux[1],aux[0] ].join("-");
}

export default dateFormat;