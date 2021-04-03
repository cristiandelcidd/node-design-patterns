export default class Logger {
   #name;
   constructor(name) {
      this.#name = name;
   }

   log(message) {
      console.log(`[${this.#name}] ${message}`);
   }
}
