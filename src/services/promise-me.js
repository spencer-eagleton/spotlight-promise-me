/**
 * TODO:
 */
export async function getVillagers() {
  const response = await fetch('https://acnhapi.com/v1/villagers');
  const data = await response.json();
  console.log('data', data);
  return data;
}
/**
 * TODO:
 */
export function getVillagers2() {
  const data = fetch('https://acnhapi.com/v1/villagers')
    .then((data) => data.json())
    .then((villagerData) => {
      console.log('villagerData', villagerData);
    });
  return data;
}
/**
 * TODO:
 */
export async function getMachines() {
  const resp = await fetch('https://ponball.herokuapp.com/api/v1/machines');
  const data = await resp.json();
  console.log('data', data);
  return data;
}
/**
 * TODO:
 */
export const get20Machines = () => {
  const data = fetch(
    'https://ponball.herokuapp.com/api/v1/machines?limit=20&offset=20'
  )
    .then((data) => data.json())
    .then((machines20) => {
      console.log('machines20', machines20);
    });
  return data;
};
/**
 * TODO:
 */
export async function getFish() {
  const data = fetch('http://acnhapi.com/v1/fish/')
    .then((data) => data.json())
    .then((fish) => {
      console.log('fish', fish);
    });
  return data;
}
/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */
