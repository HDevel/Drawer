module.exports = function fill(width, height) {
    var ctx = this._ctx;

    for (var x = 0; x < width; x += this._rect.w) {
        for (var y = 0; y < height; y += this._rect.h) {
            this._drawCell(x, y, this._rect.w, this._rect.h,
                (x / this._rect.w + 1) + '.' + (y / this._rect.h + 1),
                {
                    font: this._font,
                    strokeStyle: this._colors.cell
                }
            );
        }
    }
};
