/*jshint esversion: 9 */
var Common = require('@helpers/common'),
  query = require('array-query');

function voiceMap(config) {
  //this.codeMap = {};
  var self = this;


  this.voices = [
    {
      "provider": "google",
      "language": "Danish (Denmark)",
      "type": "Standard",
      "code": "da-DK",
      "translate" : 'en',
      "voice": "da-DK-Standard-A",
      "voice_alias" : "Dora",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "Danish (Denmark)",
      "type": "WaveNet",
      "code": "da-DK",
      "translate" : 'en',
      "voice": "da-DK-Wavenet-A",
      "voice_alias" : "Heidi",
      "gender": "FEMALE"
    },

    {
      "provider": "google",
      "language": "Dutch (Netherlands)",
      "type": "Standard",
      "code": "nl-NL",
      "translate" : 'en',
      "voice": "nl-NL-Standard-A",
      "voice_alias" : "Eva",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "Dutch (Netherlands)",
      "type": "WaveNet",
      "code": "nl-NL",
      "translate" : 'en',
      "voice": "nl-NL-Wavenet-A",
      "voice_alias" : "Mila",
      "gender": "FEMALE"
    },

    {
      "provider": "google",
      "language": "English (Australia)",
      "type": "Standard",
      "code": "en-AU",
      "voice": "en-AU-Standard-A",
      "translate" : 'en',
      "voice_alias" : "Mia",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "English (Australia)",
      "type": "Standard",
      "code": "en-AU",
      "translate" : 'en',
      "voice": "en-AU-Standard-B",
      "voice_alias" : "Oliver",
      "gender": "MALE"
    },
    {
      "provider": "google",
      "language": "English (Australia)",
      "type": "Standard",
      "code": "en-AU",
      "translate" : 'en',
      "voice": "en-AU-Standard-C",
      "voice_alias" : "Chloe",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "English (Australia)",
      "type": "Standard",
      "code": "en-AU",
      "translate" : 'en',
      "voice": "en-AU-Standard-D",
      "voice_alias" : "Noah",
      "gender": "MALE"
    },
    {
      "provider": "google",
      "language": "English (Australia)",
      "type": "WaveNet",
      "code": "en-AU",
      "translate" : 'en',
      "voice": "en-AU-Wavenet-A",
      "voice_alias" : "Ava",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "English (Australia)",
      "type": "WaveNet",
      "code": "en-AU",
      "translate" : 'en',
      "voice": "en-AU-Wavenet-B",
      "voice_alias" : "Thomas",
      "gender": "MALE"
    },
    {
      "provider": "google",
      "language": "English (Australia)",
      "type": "WaveNet",
      "code": "en-AU",
      "translate" : 'en',
      "voice": "en-AU-Wavenet-C",
      "voice_alias" : "Isla",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "English (Australia)",
      "type": "WaveNet",
      "code": "en-AU",
      "translate" : 'en',
      "voice": "en-AU-Wavenet-D",
      "voice_alias" : "James",
      "gender": "MALE"
    },

    {
      "provider": "google",
      "language": "English (UK)",
      "type": "Standard",
      "code": "en-GB",
      "translate" : 'en',
      "voice": "en-GB-Standard-A",
      "voice_alias" : "Lily",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "English (UK)",
      "type": "Standard",
      "code": "en-GB",
      "translate" : 'en',
      "voice": "en-GB-Standard-B",
      "voice_alias" : "Harry",
      "gender": "MALE"
    },
    {
      "provider": "google",
      "language": "English (UK)",
      "type": "Standard",
      "code": "en-GB",
      "translate" : 'en',
      "voice": "en-GB-Standard-C",
      "voice_alias" : "Emily",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "English (UK)",
      "type": "Standard",
      "code": "en-GB",
      "translate" : 'en',
      "voice": "en-GB-Standard-D",
      "voice_alias" : "Leo",
      "gender": "MALE"
    },
    {
      "provider": "google",
      "language": "English (UK)",
      "type": "WaveNet",
      "code": "en-GB",
      "translate" : 'en',
      "voice": "en-GB-Wavenet-A",
      "voice_alias" : "Alice",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "English (UK)",
      "type": "WaveNet",
      "code": "en-GB",
      "translate" : 'en',
      "voice": "en-GB-Wavenet-B",
      "voice_alias" : "Jacob",
      "gender": "MALE"
    },
    {
      "provider": "google",
      "language": "English (UK)",
      "type": "WaveNet",
      "code": "en-GB",
      "translate" : 'en',
      "voice": "en-GB-Wavenet-C",
      "voice_alias" : "Beatrix",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "English (UK)",
      "type": "WaveNet",
      "code": "en-GB",
      "translate" : 'en',
      "voice": "en-GB-Wavenet-D",
      "voice_alias" : "Oscar",
      "gender": "MALE"
    },
    {
      "provider": "google",
      "language": "English (US)",
      "type": "Standard",
      "code": "en-US",
      "translate" : 'en',
      "voice": "en-US-Standard-B",
      "voice_alias" : "Liam",
      "gender": "MALE"
    },

    {
      "provider": "google",
      "language": "English (US)",
      "type": "Standard",
      "code": "en-US",
      "translate" : 'en',
      "voice": "en-US-Standard-C",
      "voice_alias" : "Emma",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "English (US)",
      "type": "Standard",
      "code": "en-US",
      "translate" : 'en',
      "voice": "en-US-Standard-D",
      "voice_alias" : "Mason",
      "gender": "MALE"
    },
    {
      "provider": "google",
      "language": "English (US)",
      "type": "Standard",
      "code": "en-US",
      "translate" : 'en',
      "voice": "en-US-Standard-E",
      "voice_alias" : "Grace",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "English (US)",
      "type": "WaveNet",
      "code": "en-US",
      "translate" : 'en',
      "voice": "en-US-Wavenet-A",
      "voice_alias" : "Ethan",
      "gender": "MALE"
    },
    {
      "provider": "google",
      "language": "English (US)",
      "type": "WaveNet",
      "code": "en-US",
      "translate" : 'en',
      "voice": "en-US-Wavenet-B",
      "voice_alias" : "Ben",
      "gender": "MALE"
    },
    {
      "provider": "google",
      "language": "English (US)",
      "type": "WaveNet",
      "code": "en-US",
      "translate" : 'en',
      "voice": "en-US-Wavenet-C",
      "voice_alias" : "Ella",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "English (US)",
      "type": "WaveNet",
      "code": "en-US",
      "translate" : 'en',
      "voice": "en-US-Wavenet-D",
      "voice_alias" : "William",
      "gender": "MALE"
    },
    {
      "provider": "google",
      "language": "English (US)",
      "type": "WaveNet",
      "code": "en-US",
      "translate" : 'en',
      "voice": "en-US-Wavenet-E",
      "voice_alias" : "Alexis",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "English (US)",
      "type": "WaveNet",
      "code": "en-US",
      "translate" : 'en',
      "voice": "en-US-Wavenet-F",
      "voice_alias" : "Sarah",
      "gender": "FEMALE"
    },
    /*
    {
      "provider": "google",
      "language": "French (France)",
      "type": "Standard",
      "code": "fr-FR",
      "translate" : 'fr',
      "voice": "fr-FR-Standard-A",
      "voice_alias" : "madeline",
      "gender": "FEMALE"
    },*/
    {
      "provider": "google",
      "language": "French (France)",
      "type": "Standard",
      "code": "fr-FR",
      "translate" : 'fr',
      "voice": "fr-FR-Standard-B",
      "voice_alias" : "jean-luc-picard",
      "gender": "MALE"
    },
    {
      "provider": "google",
      "language": "French (France)",
      "type": "Standard",
      "code": "fr-FR",
      "translate" : 'fr',
      "voice": "fr-FR-Standard-C",
      "voice_alias" : "Adele",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "French (France)",
      "type": "Standard",
      "code": "fr-FR",
      "translate" : 'fr',
      "voice": "fr-FR-Standard-D",
      "voice_alias" : "Adam",
      "gender": "MALE"
    },
    {
      "provider": "google",
      "language": "French (France)",
      "type": "WaveNet",
      "code": "fr-FR",
      "translate" : 'fr',
      "voice": "fr-FR-Wavenet-A",
      "voice_alias" : "Jeanne",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "French (France)",
      "type": "WaveNet",
      "code": "fr-FR",
      "translate" : 'fr',
      "voice": "fr-FR-Wavenet-B",
      "voice_alias" : "Paul",
      "gender": "MALE"
    },
    {
      "provider": "google",
      "language": "French (France)",
      "type": "WaveNet",
      "code": "fr-FR",
      "translate" : 'fr',
      "voice": "fr-FR-Wavenet-C",
      "voice_alias" : "Ines",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "French (France)",
      "type": "WaveNet",
      "code": "fr-FR",
      "translate" : 'fr',
      "voice": "fr-FR-Wavenet-D",
      "voice_alias" : "Arthur",
      "gender": "MALE"
    },

    {
      "provider": "google",
      "language": "French (Canada)",
      "type": "Standard",
      "code": "fr-CA",
      "translate" : 'fr',
      "voice": "fr-CA-Standard-A",
      "voice_alias" : "Romy",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "French (Canada)",
      "type": "Standard",
      "code": "fr-CA",
      "translate" : 'fr',
      "voice": "fr-CA-Standard-B",
      "voice_alias" : "Logan",
      "gender": "MALE"
    },
    {
      "provider": "google",
      "language": "French (Canada)",
      "type": "Standard",
      "code": "fr-CA",
      "translate" : 'fr',
      "voice": "fr-CA-Standard-C",
      "voice_alias" : "Rosa",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "French (Canada)",
      "type": "Standard",
      "code": "fr-CA",
      "translate" : 'fr',
      "voice": "fr-CA-Standard-D",
      "voice_alias" : "Felix",
      "gender": "MALE"
    },
    {
      "provider": "google",
      "language": "French (Canada)",
      "type": "WaveNet",
      "code": "fr-CA",
      "translate" : 'fr',
      "voice": "fr-CA-Wavenet-A",
      "voice_alias" : "Delphine",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "French (Canada)",
      "type": "WaveNet",
      "code": "fr-CA",
      "translate" : 'fr',
      "voice": "fr-CA-Wavenet-B",
      "voice_alias" : "Alexandre",
      "gender": "MALE"
    },
    {
      "provider": "google",
      "language": "French (Canada)",
      "type": "WaveNet",
      "code": "fr-CA",
      "translate" : 'fr',
      "voice": "fr-CA-Wavenet-C",
      "voice_alias" : "Camille",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "French (Canada)",
      "type": "WaveNet",
      "code": "fr-CA",
      "translate" : 'fr',
      "voice": "fr-CA-Wavenet-D",
      "voice_alias" : "George",
      "gender": "MALE"
    },

    {
      "provider": "google",
      "language": "German",
      "type": "Standard",
      "code": "de-DE",
      "translate" : 'de',
      "voice": "de-DE-Standard-A",
      "voice_alias" : "Hanna",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "German",
      "type": "Standard",
      "code": "de-DE",
      "translate" : 'de',
      "voice": "de-DE-Standard-B",
      "voice_alias" : "Finn",
      "gender": "MALE"
    },
    {
      "provider": "google",
      "language": "German",
      "type": "WaveNet",
      "code": "de-DE",
      "translate" : 'de',
      "voice": "de-DE-Wavenet-A",
      "voice_alias" : "Anna",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "German",
      "type": "WaveNet",
      "code": "de-DE",
      "translate" : 'de',
      "voice": "de-DE-Wavenet-B",
      "voice_alias" : "Jan",
      "gender": "MALE"
    },
    {
      "provider": "google",
      "language": "German",
      "type": "WaveNet",
      "code": "de-DE",
      "translate" : 'de',
      "voice": "de-DE-Wavenet-C",
      "voice_alias" : "Julia",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "German",
      "type": "WaveNet",
      "code": "de-DE",
      "translate" : 'de',
      "voice": "de-DE-Wavenet-D",
      "voice_alias" : "Jonas",
      "gender": "MALE"
    },

    
    {
      "provider": "google",
      "language": "Italian",
      "type": "Standard",
      "code": "it-IT",
      "translate" : 'it',
      "voice": "it-IT-Standard-A",
      "voice_alias" : "Greta",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "Italian",
      "type": "WaveNet",
      "code": "it-IT",
      "translate" : 'it',
      "voice": "it-IT-Wavenet-A",
      "voice_alias" : "Giulia",
      "gender": "FEMALE"
    },

    {
      "provider": "google",
      "language": "Japanese",
      "type": "Standard",
      "code": "ja-JP",
      "translate" : 'ja',
      "voice": "ja-JP-Standard-A",
      "voice_alias" : "Yui",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "Japanese",
      "type": "WaveNet",
      "code": "ja-JP",
      "translate" : 'ja',
      "voice": "ja-JP-Wavenet-A",
      "voice_alias" : "Rio",
      "gender": "FEMALE"
    },

    {
      "provider": "google",
      "language": "Korean",
      "type": "Standard",
      "code": "ko-KR",
      "translate" : 'ko',
      "voice": "ko-KR-Standard-A",
      "voice_alias" : "Ji-woo",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "Korean",
      "type": "Standard",
      "code": "ko-KR",
      "translate" : 'ko',
      "voice": "ko-KR-Standard-B",
      "voice_alias" : "Seo-yeon",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "Korean",
      "type": "Standard",
      "code": "ko-KR",
      "translate" : 'ko',
      "voice": "ko-KR-Standard-C",
      "voice_alias" : "Ye-jun",
      "gender": "MALE"
    },
    {
      "provider": "google",
      "language": "Korean",
      "type": "Standard",
      "code": "ko-KR",
      "translate" : 'ko',
      "voice": "ko-KR-Standard-D",
      "voice_alias" : "Do-yoon",
      "gender": "MALE"
    },
    {
      "provider": "google",
      "language": "Korean",
      "type": "WaveNet",
      "code": "ko-KR",
      "translate" : 'ko',
      "voice": "ko-KR-Wavenet-A",
      "voice_alias" : "Seo-yun",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "Korean",
      "type": "WaveNet",
      "code": "ko-KR",
      "translate" : 'ko',
      "voice": "ko-KR-Wavenet-B",
      "voice_alias" : "Min-seo",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "Korean",
      "type": "WaveNet",
      "code": "ko-KR",
      "translate" : 'ko',
      "voice": "ko-KR-Wavenet-C",
      "voice_alias" : "Hyun-woo",
      "gender": "MALE"
    },
    {
      "provider": "google",
      "language": "Korean",
      "type": "WaveNet",
      "code": "ko-KR",
      "translate" : 'ko',
      "voice": "ko-KR-Wavenet-D",
      "voice_alias" : "Gun-woo",
      "gender": "MALE"
    },

    {
      "provider": "google",
      "language": "Norwegian",
      "type": "Standard",
      "code": "nb-NO",
      "translate" : 'nb',
      "voice": "nb-NO-Standard-E",
      "voice_alias" : "Hilda",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "Norwegian",
      "type": "WaveNet",
      "code": "nb-NO",
      "translate" : 'nb',
      "voice": "nb-NO-Wavenet-E",
      "voice_alias" : "Liv",
      "gender": "FEMALE"
    },

    {
      "provider": "google",
      "language": "Polish",
      "type": "Standard",
      "code": "pl-PL",
      "translate" : 'pl',
      "voice": "pl-PL-Standard-A",
      "voice_alias" : "Ada",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "Polish",
      "type": "Standard",
      "code": "pl-PL",
      "translate" : 'pl',
      "voice": "pl-PL-Standard-B",
      "voice_alias" : "Oskar",
      "gender": "MALE"
    },
    {
      "provider": "google",
      "language": "Polish",
      "type": "Standard",
      "code": "pl-PL",
      "translate" : 'pl',
      "voice": "pl-PL-Standard-C",
      "voice_alias" : "Robert",
      "gender": "MALE"
    },
    {
      "provider": "google",
      "language": "Polish",
      "type": "Standard",
      "code": "pl-PL",
      "translate" : 'pl',
      "voice": "pl-PL-Standard-D",
      "voice_alias" : "Nadia",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "Polish",
      "type": "Standard",
      "code": "pl-PL",
      "translate" : 'pl',
      "voice": "pl-PL-Standard-E",
      "voice_alias" : "Danka",
      "gender": "FEMALE"
    },

    {
      "provider": "google",
      "language": "Polish",
      "type": "WaveNet",
      "code": "pl-PL",
      "translate" : 'pl',
      "voice": "pl-PL-Wavenet-A",
      "voice_alias" : "Ela",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "Polish",
      "type": "WaveNet",
      "code": "pl-PL",
      "translate" : 'pl',
      "voice": "pl-PL-Wavenet-B",
      "voice_alias" : "Stefan",
      "gender": "MALE"
    },
    {
      "provider": "google",
      "language": "Polish",
      "type": "WaveNet",
      "code": "pl-PL",
      "translate" : 'pl',
      "voice": "pl-PL-Wavenet-C",
      "voice_alias" : "Olaf",
      "gender": "MALE"
    },
    {
      "provider": "google",
      "language": "Polish",
      "type": "WaveNet",
      "code": "pl-PL",
      "translate" : 'pl',
      "voice": "pl-PL-Wavenet-D",
      "voice_alias" : "Marta",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "Polish",
      "type": "WaveNet",
      "code": "pl-PL",
      "translate" : 'pl',
      "voice": "pl-PL-Wavenet-E",
      "voice_alias" : "Wanda",
      "gender": "FEMALE"
    },
    
    {
      "provider": "google",
      "language": "Portugese (Brazil)",
      "type": "Standard",
      "code": "pt-BR",
      "translate" : 'pt',
      "voice": "pt-BR-Standard-A",
      "voice_alias" : "Maria",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "Portugese (Brazil)",
      "type": "WaveNet",
      "code": "pt-BR",
      "translate" : 'pt',
      "voice": "pt-BR-Wavenet-A",
      "voice_alias" : "Helena",
      "gender": "FEMALE"
    },

    {
      "provider": "google",
      "language": "Portugese (Portugal)",
      "type": "Standard",
      "code": "pt-PT",
      "translate" : 'pt',
      "voice": "pt-PT-Standard-A",
      "voice_alias" : "",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "Portugese (Portugal)",
      "type": "Standard",
      "code": "pt-PT",
      "translate" : 'pt',
      "voice": "pt-PT-Standard-B",
      "voice_alias" : "",
      "gender": "MALE"
    },
    {
      "provider": "google",
      "language": "Portugese (Portugal)",
      "type": "Standard",
      "code": "pt-PT",
      "translate" : 'pt',
      "voice": "pt-PT-Standard-C",
      "voice_alias" : "",
      "gender": "MALE"
    },
    {
      "provider": "google",
      "language": "Portugese (Portugal)",
      "type": "Standard",
      "code": "pt-PT",
      "translate" : 'pt',
      "voice": "pt-PT-Standard-D",
      "voice_alias" : "",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "Portugese (Portugal)",
      "type": "WaveNet",
      "code": "pt-PT",
      "translate" : 'pt',
      "voice": "pt-PT-Wavenet-A",
      "voice_alias" : "",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "Portugese (Portugal)",
      "type": "WaveNet",
      "code": "pt-PT",
      "translate" : 'pt',
      "voice": "pt-PT-Wavenet-B",
      "voice_alias" : "",
      "gender": "MALE"
    },
    {
      "provider": "google",
      "language": "Portugese (Portugal)",
      "type": "WaveNet",
      "code": "pt-PT",
      "translate" : 'pt',
      "voice": "pt-PT-Wavenet-C",
      "voice_alias" : "",
      "gender": "MALE"
    },
    {
      "provider": "google",
      "language": "Portugese (Portugal)",
      "type": "WaveNet",
      "code": "pt-PT",
      "translate" : 'pt',
      "voice": "pt-PT-Wavenet-D",
      "voice_alias" : "",
      "gender": "FEMALE"
    },

    {
      "provider": "google",
      "language": "Russian",
      "type": "Standard",
      "code": "ru-RU",
      "translate" : 'ru',
      "voice": "ru-RU-Standard-A",
      "voice_alias" : "Diana",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "Russian",
      "type": "Standard",
      "code": "ru-RU",
      "translate" : 'ru',
      "voice": "ru-RU-Standard-B",
      "voice_alias" : "Nikola",
      "gender": "MALE"
    },
    {
      "provider": "google",
      "language": "Russian",
      "type": "Standard",
      "code": "ru-RU",
      "translate" : 'ru',
      "voice": "ru-RU-Standard-C",
      "voice_alias" : "Nina",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "Russian",
      "type": "Standard",
      "code": "ru-RU",
      "translate" : 'ru',
      "voice": "ru-RU-Standard-D",
      "voice_alias" : "Luca",
      "gender": "MALE"
    },
    
    {
      "provider": "google",
      "language": "Russian",
      "type": "WaveNet",
      "code": "ru-RU",
      "translate" : 'ru',
      "voice": "ru-RU-Wavenet-A",
      "voice_alias" : "Tanya",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "Russian",
      "type": "WaveNet",
      "code": "ru-RU",
      "translate" : 'ru',
      "voice": "ru-RU-Wavenet-B",
      "voice_alias" : "Boris",
      "gender": "MALE"
    },
    {
      "provider": "google",
      "language": "Russian",
      "type": "WaveNet",
      "code": "ru-RU",
      "translate" : 'ru',
      "voice": "ru-RU-Wavenet-C",
      "voice_alias" : "Veronica",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "Russian",
      "type": "WaveNet",
      "code": "ru-RU",
      "translate" : 'ru',
      "voice": "ru-RU-Wavenet-D",
      "voice_alias" : "Ivan",
      "gender": "MALE"
    },

    {
      "provider": "google",
      "language": "Slovak",
      "type": "Standard",
      "code": "sk-SK",
      "translate" : 'sk',
      "voice": "sk-SK-Standard-A",
      "voice_alias" : "",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "Slovak",
      "type": "WaveNet",
      "code": "sk-SK",
      "translate" : 'sk',
      "voice": "sk-SK-Wavenet-A",
      "voice_alias" : "",
      "gender": "FEMALE"
    },

    {
      "provider": "google",
      "language": "Spanish",
      "type": "Standard",
      "code": "es-ES",
      "translate" : 'es',
      "voice": "es-ES-Standard-A",
      "voice_alias" : "Camila",
      "gender": "FEMALE"
    },

    {
      "provider": "google",
      "language": "Swedish",
      "type": "Standard",
      "code": "sv-SE",
      "translate" : 'sv',
      "voice": "sv-SE-Standard-A",
      "voice_alias" : "Ebba",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "Swedish",
      "type": "WaveNet",
      "code": "sv-SE",
      "translate" : 'sv',
      "voice": "sv-SE-Wavenet-A",
      "voice_alias" : "Agnes",
      "gender": "FEMALE"
    },

    {
      "provider": "google",
      "language": "Turkish",
      "type": "Standard",
      "code": "tr-TR",
      "translate" : 'tr',
      "voice": "tr-TR-Standard-A",
      "voice_alias" : "Azra",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "Turkish",
      "type": "Standard",
      "code": "tr-TR",
      "translate" : 'tr',
      "voice": "tr-TR-Standard-B",
      "voice_alias" : "",
      "gender": "MALE"
    },
    {
      "provider": "google",
      "language": "Turkish",
      "type": "Standard",
      "code": "tr-TR",
      "translate" : 'tr',
      "voice": "tr-TR-Standard-C",
      "voice_alias" : "",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "Turkish",
      "type": "Standard",
      "code": "tr-TR",
      "translate" : 'tr',
      "voice": "tr-TR-Standard-D",
      "voice_alias" : "",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "Turkish",
      "type": "Standard",
      "code": "tr-TR",
      "translate" : 'tr',
      "voice": "tr-TR-Standard-E",
      "voice_alias" : "",
      "gender": "MALE"
    },

    {
      "provider": "google",
      "language": "Turkish",
      "type": "WaveNet",
      "code": "tr-TR",
      "translate" : 'tr',
      "voice": "tr-TR-Wavenet-A",
      "voice_alias" : "Ecrin",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "Turkish",
      "type": "WaveNet",
      "code": "tr-TR",
      "translate" : 'tr',
      "voice": "tr-TR-Wavenet-B",
      "voice_alias" : "",
      "gender": "MALE"
    },
    {
      "provider": "google",
      "language": "Turkish",
      "type": "WaveNet",
      "code": "tr-TR",
      "translate" : 'tr',
      "voice": "tr-TR-Wavenet-C",
      "voice_alias" : "",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "Turkish",
      "type": "WaveNet",
      "code": "tr-TR",
      "translate" : 'tr',
      "voice": "tr-TR-Wavenet-D",
      "voice_alias" : "",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "Turkish",
      "type": "WaveNet",
      "code": "tr-TR",
      "translate" : 'tr',
      "voice": "tr-TR-Wavenet-E",
      "voice_alias" : "",
      "gender": "MALE"
    },


    {
      "provider": "google",
      "language": "Ukranian",
      "type": "Standard",
      "code": "uk-UA",
      "translate" : 'uk',
      "voice": "uk-UA-Standard-A",
      "voice_alias" : "Katya",
      "gender": "FEMALE"
    },
    {
      "provider": "google",
      "language": "Ukranian",
      "type": "WaveNet",
      "code": "uk-UA",
      "translate" : 'uk',
      "voice": "uk-UA-Wavenet-A",
      "voice_alias" : "Elina",
      "gender": "FEMALE"
    }
  ];

  this.getVoice = function (input) {
    var filter = function(value) {
      return input.trim().toLowerCase() == value.trim().toLowerCase();
    };

    var ret = query("voice")
      .filter(filter)
      .or("voice_alias")
      .filter(filter)
      .on(this.voices);

    if(!ret || !ret.length) return [];

    return ret;

  }

  this.getLang = function (input) {
    var filter = function(value) {
      return input.length > 1 && value.toLowerCase().indexOf(input.toLowerCase()) > -1;
    };

    var ret = query("code")
      .filter(filter)
      .on(this.voices);

    if(!ret || !ret.length) return [];
    return ret
  }

}

module.exports = new voiceMap();
