const SUPPORTED_LANGUAGES = ['es', 'en'];
const selectedLanguage = process.argv[2];

// node async-imports/main.js en
// node async-imports/main.js es

if (!SUPPORTED_LANGUAGES.includes(selectedLanguage)) {
   console.log('The specified language is not supported');
   process.exit(1);
}

const translationModule = `./strings-${selectedLanguage}.js`;
import(translationModule).then((strings) => console.log(strings.HELLO));
