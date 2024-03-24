export const toDo = {
  id: Main Key Autoincrememnt,
  name: 'buy groceries',
  deadline: '2024-03-25',
  type: 'toDo' | 'toGet',
  info: 'go to the store and buy groceries',
  steps_id: Foreign Key steps,
  priorityLevel: 10,
  image: File,
  createdAt: timestamp
}

export const steps = {
  id: Main Key Autoincrememnt,
  toDo_id: Foreign Key toDo,
  step: 'Drive to the store',
}