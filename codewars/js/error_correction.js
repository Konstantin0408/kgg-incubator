let parityBit = binary => binary.split(' ').map(s => parseInt(s, 3) % 2 == 0 ? s.slice(0, -1) : "error").join(' ')
