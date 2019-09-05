"use strict";
exports.__esModule = true;
var piscina = /** @class */ (function () {
    function piscina(diametro, custoConstrucao) {
        this.diametro = diametro;
        this.custoConstrucao = custoConstrucao;
    }
    piscina.prototype.raio = function () {
        return this.diametro / 2;
    };
    piscina.prototype.area = function () {
        return 3.14159 * (this.raio() * this.raio());
    };
    piscina.prototype.custoTotal = function () {
        return this.area() * this.custoConstrucao;
    };
    return piscina;
}());
exports.piscina = piscina;
