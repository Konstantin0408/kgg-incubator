let numBlocks = (w0, l0, h0) => BigInt(((w, l, h) => ((h*w*l + h*(h-1n)*(w+l)/2n + (h-1n)*h*(2n*h-1n)/6n)))(
  BigInt(w0), BigInt(l0), BigInt(h0))) // cringe
