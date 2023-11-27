export function getSerie(id: number): string {
    let numero ="";
    let id1: number = id + 1;
    if ((id1 >= 10000000) && (id1 <= 100000000)) {
        numero = String(id1);
    }
    if ((id1 >= 1000000) && (id1 <= 10000000)) {
        numero = "0" + id1;
    }
    if ((id1 >= 100000) && (id1 <= 1000000)) {
        numero = "00" + id1;
    }
    if ((id1 >= 10000) && (id1 <= 100000)) {
        numero = "000" + id1;
    }
    if ((id1 >= 1000) && (id1 <= 10000)) {
        numero = "0000" + id1;
    }
    if ((id1 >= 100) && (id1 <= 1000)) {
        numero = "00000" + id1;
    }
    if ((id1 >= 10) && (id1 <= 100)) {
        numero = "000000" + id1;
    }
    if (id1 < 10) {
        numero = "0000000" + id1;
    }
    return numero;

}