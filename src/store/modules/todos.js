export default {
    state: {
        todos: []
    },
    getters: {
        allTodos: (state) => state.todos
    },
    actions: {
        fetchTodos({ commit }) {
            fetch("https://jsonplaceholder.typicode.com/todos")
                .then(res => res.json())
                .then(json => {
                    console.log(json)
                    commit('setTodos', json)
                }
                )
        },
        addTodo({ commit }, title) {
            fetch("https://jsonplaceholder.typicode.com/todos", {
                method: "POST",
                body: JSON.stringify({ title, completed: false }),
                headers: { "Content-Type": "application/json" },
            })
                .then((res) => res.json())
                .then(json => {
                    console.log(json)
                    commit('newTodo', json)
                })
                .catch((err) => console.log(err));
        }
    },
    mutations: {
        setTodos: (state, fetchedTodos) => (state.todos = fetchedTodos),
        newTodo: (state, newTodo) => state.todos.unshift(newTodo)
    }
};

