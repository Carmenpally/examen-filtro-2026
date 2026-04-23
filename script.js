
const name = "Zara Darkbane";
const characterClass = "Hechicera";
const level = 7;
let health = 80;
let mana = 120;
const attack = 45;
const defense = 30;


const enemyDefense = 25;
const isStunned = false;
const spellCost = 50;




function calculateDamage(attack, defense) {
  const damage = attack - defense;
  
  return damage > 0 ? damage : 0;
}


const isAlive = (health) => health > 0;


const canCastSpell = (currentMana, spellCost, isStunned) => {
 
  return currentMana >= spellCost && !isStunned;
};


function getPresentation(name, characterClass, level) {
  return `${name} — ${characterClass} (Nivel ${level})`;
}


console.log("--- Ficha de Personaje ---");
console.log(getPresentation(name, characterClass, level));

console.log("--- Lógica de Combate ---");
const damageDealt = calculateDamage(attack, enemyDefense);
console.log(`Daño infligido al enemigo: ${damageDealt}`);

console.log(`¿El personaje sigue con vida?: ${isAlive(health)}`);

console.log(`¿Puede lanzar el hechizo?: ${canCastSpell(mana, spellCost, isStunned)}`);


console.log("Prueba con personaje aturdido:", canCastSpell(mana, spellCost, true));