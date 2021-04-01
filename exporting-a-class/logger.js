class Logger {
   #name;
   constructor(name) {
      this.#name = name;
   }

   log(message) {
      console.log(`[${this.#name}] ${message}`);
   }

   info(message) {
      console.log(`Info: ${message}`);
   }

   verbose(message) {
      console.log(`Verbose: ${message}`);
   }
}

module.exports = Logger;
