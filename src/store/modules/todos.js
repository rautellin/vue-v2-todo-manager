export default {
    state: {
        todos: []
    },
    getters: {
        allTodos: (state) => state.todos,
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        },
        doneTodosCount: (state, getters) => {
            return getters.doneTodos.length
        }
    },
    actions: {
        fetchTodos({ commit }) {
            fetch("https://jsonplaceholder.typicode.com/todos")
                .then(res => res.json())
                .then(json => {
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
                    commit('add', json)
                })
                .catch((err) => console.log(err));
        },
        deleteTodo({ commit }, id) {
            fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: "DELETE",
            })
                .then(() => {
                    commit('delete', id)
                })
                .catch((err) => console.log(err));
        },
        updateTodo({ commit }, updatedTodo) {
            fetch(`https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`, {
                method: "PUT",
                body: JSON.stringify(updatedTodo),
                headers: { "Content-Type": "application/json" },
            })
                .then((res) => res.json())
                .then(json => {
                    commit('update', json)
                })
                .catch((err) => console.log(err));
        },
        filterTodos({ commit }, event) {
            const limit = parseInt(event.target.options[event.target.options.selectedIndex].innerText)
            fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
                .then(res => res.json())
                .then(json => {
                    commit('setTodos', json)
                }
                )
        }
    },
    mutations: {
        setTodos: (state, todos) => (state.todos = todos),
        add: (state, newTodo) => state.todos.unshift(newTodo),
        update: (state, updTodo) => {
            const index = state.todos.findIndex(todo => todo.id === updTodo.id);
            if (index !== -1) {
                state.todos.splice(index, 1, updTodo);
            }
        },
        delete: (state, id) => {
            (state.todos = state.todos.filter(todo => todo.id !== id))
        }
    }
};

