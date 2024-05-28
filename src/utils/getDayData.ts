import { days } from '../data/days';
import { talents } from '../data/talents';
import { characters } from '../data/characters';

export const getDayData = (dayName: string) => {
  const day = days.find(d => d.day === dayName);
  if (!day) return null;

  return {
    day: day.day,
    talents: day.talents.map(talentId => {
      const talent = talents.find(t => t.id === talentId);
      return {
        ...talent,
        characters: talent?.characters
          .map(characterId => {
            const character = characters.find(c => c.id === characterId);
            return character ? character.name : null;
          })
          .filter(name => name !== null),
      };
    }),
  };
};
