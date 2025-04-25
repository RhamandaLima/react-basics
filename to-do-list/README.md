#  To-Do List

In this challenge, a task management application in the style of a **to-do list** was developed. The application allows the user to manage their daily tasks with the following functionalities:

- **Add a new task**: The user can insert new tasks into the list.
- **Mark and unmark a task as completed**: The user can mark a task as completed or undo it.
- **Remove a task from the list**: The user can delete a task from the list.
- **Show task completion progress**: Display progress based on tasks marked as completed.

### Concepts used

During the development of this challenge, the following concepts were applied:

- **States**: Using `useState` to manage the state of the task list and progress.
- **Immutability of state**: The state is treated as immutable when updating the task list.
- **Lists and keys in ReactJS**: Each task is rendered in a list with a unique key to ensure efficient rendering.
- **Props**: Components are created in a reusable way using props.
- **Componentization**: The application was broken down into small components for better organization and reusability.
- **Responsiveness**: The interface was built to ensure a good experience on different screen sizes.

### How to run the project

1. Clone this repository;
   
2. Navigate to the project directory:
   
```bash
cd to-do-list
```

3. Install the project dependencies using npm:

```bash
npm install
```

4. Run the development server:

```bash
npm run dev
```

5. Open your browser and go to http://localhost:5173 to see the application running.

### Screenshots of the application
Here, you can see screenshots of the application running, as well as a comparison with the prototype.

#### Example of the application running:

![image](https://github.com/user-attachments/assets/f3815b8a-908e-4c66-bbf7-2b3df608cd3e)

![image](https://github.com/user-attachments/assets/059b5f07-4eef-42c7-9e1d-5efe8b33e60f)

#### Comparison with the prototype:

![image](https://github.com/user-attachments/assets/e5d0f806-3350-44cf-b861-4e2610a4d4a0)
![image](https://github.com/user-attachments/assets/f86e11ea-aa99-425d-96a1-bb7d465b2ec7)

### Technologies used

- **React** (Version: 19.0.0)
- **TypeScript** (Version: 5.7.2)
- **Vite** (Version: 6.3.1)
- **CSS**
