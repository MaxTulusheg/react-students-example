const defaultStore = {
  username: 'Jhon Doe',
  canAddBooks: true,
  canRemoveBooks: true,
};

const userReducer = (store = defaultStore, action) => {
  switch (action.type) {
    default:
      return store;
  }
};

export default userReducer;
