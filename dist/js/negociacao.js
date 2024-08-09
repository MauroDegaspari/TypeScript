var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _data, _qualidade, _valor;
export class Negociacao {
    constructor(data, quantidade, valor) {
        _data.set(this, void 0);
        _qualidade.set(this, void 0);
        _valor.set(this, void 0);
        __classPrivateFieldSet(this, _data, data);
        __classPrivateFieldSet(this, _qualidade, quantidade);
        __classPrivateFieldSet(this, _valor, valor);
    }
    get data() {
        return __classPrivateFieldGet(this, _data);
    }
    get quantidade() {
        return __classPrivateFieldGet(this, _qualidade);
    }
    get valor() {
        return __classPrivateFieldGet(this, _valor);
    }
}
_data = new WeakMap(), _qualidade = new WeakMap(), _valor = new WeakMap();
