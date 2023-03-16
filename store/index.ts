interface StateProps {
  count: number;
}

// State is a reactive object that stores the application-level state.
const state = () => ({
  count: 0,
});

// Mutations are operations that actually mutates the state.
const mutations = {
  increment(state: StateProps, { payload }: { payload: number }) {
    state.count += Number(payload);
  },
  decrement(state: StateProps, payload: number) {
    state.count -= Number(payload);
  },
};

// Actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
  increment(context: { commit: Function }, payload: number) {
    context.commit("increment", { payload });
  },
  decrement({ commit }: { commit: Function }, payload: number) {
    commit("decrement", payload);
  },
};

// Getters are functions that return a value based on the state.
const getters = {
  count(state: StateProps) {
    return state.count;
  },
};

export { state, mutations, actions, getters };
