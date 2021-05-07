//sets up O2Auth and connects to discords servers
require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

//logs in to the bot account
bot.login(TOKEN);

//tells you that you are logged in
bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

//turns dad jokes into an array
const jokes = ["How do you get a squirrel to like you? Act like a nut", "Why don't eggs tell jokes? They'd crack each other up", "What do you call someone with no body and no nose? Nobody knows", "Did you hear the rumor about butter? Well, I'm not going to spread it!", "Why couldn't the bicycle stand up by itself? It was two tired.", "Why can't a nose be 12 inches long? Because then it would be a foot.", "This graveyard looks overcrowded. People must be dying to get in.", "my wife divorced me", "What time did the man go to the dentist? Tooth hurt-y.", "How many tickles does it take to make an octopus laugh? Ten tickles.", "How do you make a tissue dance? You put a little boogie in it.", "Why did the math book look so sad? Because of all of its problems!", "What do you call cheese that isn't yours? Nacho cheese.", "What kind of shoes do ninjas wear? Sneakers!", "How does a penguin build its house? Igloos it together.", "I'm on a seafood diet. I see food and I eat it.", "Why did the scarecrow win an award? Because he was outstanding in his field.", "I made a pencil with two erasers. It was pointless.", "I'm reading a book about anti-gravity. It's impossible to put down!", "Did you hear about the guy who invented the knock-knock joke? He won the 'no-bell' prize.", "I've got a great joke about construction, but I'm still working on it.", "I used to hate facial hair...but then it grew on me.", "I decided to sell my vacuum cleaner—it was just gathering dust!", "I had a neck brace fitted years ago and I've never looked back since.", "Did you hear about the circus fire? It was in tents.", "Can February March? No, but April May!", "How do lawyers say goodbye? We'll be suing ya!", "Wanna hear a joke about paper? Never mind—it's tearable.", "What's the best way to watch a fly fishing tournament? Live stream.", "Spring is here! I got so excited I wet my plants.", "I could tell a joke about pizza, but it's a little cheesy.", "Don't trust atoms. They make up everything!", "When does a joke become a dad joke? When it becomes apparent.", "I wouldn't buy anything with velcro. It's a total rip-off."]

//sends a joke when someone says '.joke'
bot.on('message', msg => {
  //picks random joke
  const randomJoke = jokes[Math.floor(Math.random()*jokes.length)];

  //sees if message asks for a joke
  if (msg.content == '.joke') {

    //sends joke
    msg.channel.send(randomJoke)
  }
});

//words to search for when making a "hey ___ im dad" joke
const imWords = ["i'm ", "I'm ", "i'M ", "I'M ", "im ", "Im ", "iM ", "IM "];

//checks for the word 'im' to setup dad joke
bot.on('message', msg => {
  //checks through array of im words to see if message contains it
    for (var i = 0; i < imWords.length; i++) {
      //gets the index of the im word in the message
      const index = msg.content.indexOf(imWords[i]);

      //checks that word i there
      if (index !== -1 && msg.author.id !== '777990086511296522') {

        // add one to include the space
        const name = msg.content.slice(index + imWords[i].length + 0);

        //sends message
        msg.channel.send(`Hi ${name}, I'm Dad`);

        //stops function
        break;
      }
    }
});

//words to check for greetings
const heyDadsWords = ["hey dad", "hi dad", "hello dad", "Hey dad", "Hi dad", "Hello dad", "hey Dad", "hi Dad", "hello Dad", "Hey Dad", "Hi Dad", "Hello Dad"];

//greets the person that said hey
bot.on('message', msg => {
  //checks that message contains greeting
  for (var i = 0; i < heyDadsWords.length; i++) {

    //checks that message is greeting dadbot, and that the message wasnt sent by dadbot
    if (msg.content.includes(heyDadsWords[i]) && msg.member.id != '777990086511296522') {
      //send the message
      msg.channel.send("Hey " + msg.author.toString());

      //stops function
      break;
    }
  }
});
