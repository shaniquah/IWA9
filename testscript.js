// Lexical Scopes

const empleObj = {
    go: 50,
    user: 'me',
    doThing: () => console.log('wassup')
}

if (empleObj.go === 50) {
    empleObj.doThing()
}

const why = 'QnA time';

/**
 * @type {globalThis}
 */
window.why 


/**
 * This is an example of a tooltip
 * JS Doc
 */
const me = 'Otshepeng Setuke';

delete empleObj.user;
console.log(empleObj.user);

/*
 * AVOIDING BURNOUT:
 * 
 * To find your purpose, ask these questions:
 * Why do I want to learn web development?
 * Do I want to build something on my own or rather be part of a team?
 * What am I most passionate about web development?
 * Am I a more technical or visual type of person?
 * 
 * "think like a programmer." 
 * persistence and practice are the keys to success 🏆.
 * 
 */

/**
 * user's nickname
 * 
 * @type {string}
 */
const stringVar = 'Tshepi';