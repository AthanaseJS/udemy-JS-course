const friends = ['Michael','Steven','Peter']
console.log(friends)

const years = new Array('2001','2002','2003','2004')
console.log(years[0])
console.log(friends[0])
console.log(years.length)
console.log(friends[friends.length-1])
friends[1] = 'Jay'
console.log(friends)

friends.push('Ivan')
friends.unshift('Jon')
console.log(friends)
friends.pop()
friends.shift()
console.log(friends)

console.log(friends.indexOf('Jay'))
console.log(friends.indexOf('JJJ'))
console.log(friends.includes('Jay'))
