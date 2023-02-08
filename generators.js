// a generator that yields another generator thats yield multiplication table

function* generator(a, b) {
  for(let i = a; i <= b; i++) {
    yield subGenerator(i);
  }  
}

function* subGenerator(a) {
    for(let i = 1; i <= 10; i++) {
      yield `${a} x ${i} = ${a * i}`
    }
}
