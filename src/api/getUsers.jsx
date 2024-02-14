export async function getUsers(names) {
  let users = [];

  for (let name of names) {
    let user = fetch(`https://api.github.com/search/users?${name}`).then(
      (successResponse) => {
        if (successResponse.status !== 200) {
          return null;
        } else {
          return successResponse.json();
        }
      },
      (failResponse) => {
        return null;
      }
    );
    users.push(user);
  }

  let results = await Promise.all(users);
console.log(results);
  return results;
}
export default getUsers;
