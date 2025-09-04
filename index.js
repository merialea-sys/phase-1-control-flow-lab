function scuberGreetingForFeet(someValue){
  //this where we can use conditionals given our argument, someValue
  //don,t forget to return whatever the result is
  if (someValue <= 400) {
    return 'This one is on me!';
  } else if (someValue > 400 && someValue < 2000) {
    return "That will be twenty bucks.";
  }else if (someValue >2000 && someValue < 2500) {
    return "I will gladly take your thirty bucks.";
  }else if (someValue >2500) {
    return "No can do.";
  }
  // Write your code here!
}

function ternaryCheckCity(city){
  const cityMessage = city === "NYC" ? "Ok, sounds good." : "No go."
  return cityMessage;
  // Write your code here!
}

function switchOnCharmFromTip(tip){
  let tipMessage;

  switch (tip) {
    case 'generous':
      tipMessage = 'Thank you so much.';
      break;
    case 'not as generous':
      tipMessage = 'Thank you.';
      break;
    default:
      tipMessage = 'Bye.';
  }
  return tipMessage;
  // Write your code here!
}