import { prisma } from './generated/prisma-client'

// A `main` function so that we can use async/await
async function main() {
  
  // Read all users from the database and print them to the console
  const allUsers = await prisma.investors()
  console.log(allUsers)
}

main().catch(e => console.error(e))
