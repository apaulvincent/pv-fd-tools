export function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
}



export function getColor(c1, c2, ratio) {
  
  c1 = c1.replace('#', '');
  c2 = c2.replace('#', '');
  
  var r = Math.ceil(parseInt(c1.substring(0,2), 16) * ratio + parseInt(c2.substring(0,2), 16) * (1 - ratio));
  var g = Math.ceil(parseInt(c1.substring(2,4), 16) * ratio + parseInt(c2.substring(2,4), 16) * (1 - ratio));
  var b = Math.ceil(parseInt(c1.substring(4,6), 16) * ratio + parseInt(c2.substring(4,6), 16) * (1 - ratio));

  var r2 = (r.toString(16).length == 1) ? '0' + r.toString(16) : r.toString(16);
  var g2 = (g.toString(16).length == 1) ? '0' + g.toString(16) : g.toString(16);
  var b2 = (b.toString(16).length == 1) ? '0' + b.toString(16) : b.toString(16);

   return '#' + r2 + g2 + b2;
  
}

