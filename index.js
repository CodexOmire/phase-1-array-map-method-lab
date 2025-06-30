const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(tutorial => {
    return tutorial.split(' ').map(word => {
      // Separate word from punctuation
      const match = word.match(/^([a-zA-Z]+)([^a-zA-Z]*)$/);
      if (match) {
        const [, wordPart, punctuation] = match;
        const lowerWord = wordPart.toLowerCase();
        
        // Handle special cases
        if (lowerWord === 'oo') return 'OO' + punctuation;
        if (lowerWord === 'api') return 'API' + punctuation;
        if (lowerWord === 'nan') return 'NaN' + punctuation;
        if (lowerWord === 'jsonp') return 'JSONP' + punctuation;
        if (lowerWord === 'stoppropagation') return 'StopPropagation' + punctuation;
        if (lowerWord === 'preventdefault') return 'PreventDefault' + punctuation;
        
        // Default title case
        return wordPart.charAt(0).toUpperCase() + wordPart.slice(1).toLowerCase() + punctuation;
      }
      
      // Fallback for words that don't match the pattern
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
  });
}
