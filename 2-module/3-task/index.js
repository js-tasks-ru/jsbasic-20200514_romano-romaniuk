let calculator = {
  read(a, b) {
    this.firstArg = a;
    this.secondArg = b;
  },
  sum() {
    return this.firstArg + this.secondArg;
  },
  mul(){
    return this.firstArg * this.secondArg;
  },
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
