const user = {
  name: 'Adriano',
  lastName: 'Cruz de Oliveira'
}

function getUserWithFulName(user){
  return {
    ...user,
    fulName: `${user.name} ${user.lastName}`
  }
}

const userWithFullName = getUserWithFulName(user);

console.log(userWithFullName);