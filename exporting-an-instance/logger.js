class Logger {
   #name;
   #count;
   constructor(name) {
      this.#count = 0;
      this.#name = name;
   }

   log(message) {
      this.#count++;
      console.log(`[${this.#name}] ${message}`);
      console.log(this.#count);
   }
}

module.exports = new Logger('DEFAULT');
