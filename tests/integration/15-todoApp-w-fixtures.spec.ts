import { test, expect } from "../../fixtures/todo-fixutres"

test.describe('todo tests', () => {

  test('Should add an item', async ({ todoPage }) => {
    await todoPage.addTodo('My Item')
  })

  test('Should remove an item', async ({ todoPage }) => {
    await todoPage.remove('item1')
  })
})