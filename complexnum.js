function createComplexVal(R, I) {
  const complexNum = {
    r: R,
    i: I,
    add: function(addend) {
      this.r += addend.r;
      this.i += addend.i;
    },
    power: function(exponent) {
      let l = sqrt(this.r ** 2 + this.i ** 2);
      let a = atan2(this.i, this.r)
      a = (this.i < 0) ? (TWO_PI - a) : (a);
      l = l ** exponent;
      a = (a * exponent) % TWO_PI;
      this.r = l * cos(a);
      this.i = l * sin(a);
    },
    multiply: function(cFactor) {
      let a = this.r;
      let b = this.i;
      let c = cFactor.r;
      let d = cFactor.i;
      this.r = a * c - b * d;
      this.i = a * d + b * c;
    },
    scale: function(s) {
      this.r *= s;
      this.i *= s;
    },
    conjugate:function() {
      this.i *= -1;
    },
    setValue:function(nReal, nImag) {
      this.r = nReal;
      this.i = nImag;
    },
    getValue:function() {
      return {
        x:this.r,
        y:this.i
      };
    }
  }
  return complexNum;
}
