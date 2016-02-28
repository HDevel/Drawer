module.exports = function create(url, width, height) {
    this._canvas = new this._Canvas(width, height);
    this._ctx = this._canvas.getContext('2d');

    this._rect = this._rect || {w: 50, h: 50};
    this._colors = this._colors || {};
    this._font = this._font || '20px Arial';

    this._colors = {
        text: this._colors.text || '#000',
        cell: this._colors.cell || '#000',
        border: this._colors.border || '#F00',
        background: this._colors.background || '#DDD'
    };

    this._ctx.fillStyle = this._colors.background;
    this._ctx.fillRect(0, 0, width, height);

    this._fill(width, height);

    this._drawCell(0, 0, width, height, '', {strokeStyle: this._colors.border});

    this._save(this._canvas, url);
};
