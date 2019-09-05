var piscina = /** @class */ (function () {
    function piscina(diametro, custoConstrucao) {
        this.diametro = diametro;
        this.custoConstrucao = custoConstrucao;
    }
    piscina.prototype.raio = function () {
        return this.diametro / 2;
    };
    piscina.prototype.area = function () {
        return 3.14 * (this.raio() * this.raio());
    };
    piscina.prototype.custoTotal = function () {
        return this.area() * this.custoConstrucao;
    };
    return piscina;
}());
