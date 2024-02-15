// export async function getUsers(names) {
//   let users = [];

//   for (let name of names) {
//     let user = fetch(`https://api.github.com/search/users?q=${name}`).then(
//       (successResponse) => {
//         if (successResponse.status !== 200) {
//           return null;
//         } else {
//           return successResponse.json();
//         }
//       },
//       (failResponse) => {
//         return null;
//       }
//     );
//     users.push(user);
//   }

//   let results = await Promise.all(users);
//   console.log(results);
//   return results;
// }

// export async function getUserInfo(username) {
  
//   const response = await fetch(`https://api.github.com/users/${username}`);
//   if (!response.ok && response.status === 403) {
//     throw new Error("error getting user info");
//   }
//   return await response.json();
// }
