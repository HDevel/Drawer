module.exports = function drawCell(x, y, width, height, text, addition) {
    var ctx = this._ctx,
        colors = this._colors;

    addition = addition || {};
    text = text || '';
    ctx.font = addition.font || this._font;

    var textParams = ctx.measureText(text),
        textPosition = {
            x: x + (width - textParams.width) * 0.5,
            y: y + height * 0.5 + parseInt(ctx.font) * 0.5
        };

    ctx.strokeStyle = addition.strokeStyle || colors.cell;
    ctx.strokeRect(x + 0.5, y + 0.5, width - 1, height - 1);

    ctx.fillStyle = addition.fillStyle || colors.text;
    ctx.fillText(text, textPosition.x, textPosition.y);
};
