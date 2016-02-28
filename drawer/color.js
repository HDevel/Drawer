module.exports = function color(name, color) {
    this._colors = this._colors || {};
    this._colors[name] = color;

    return this;
};
