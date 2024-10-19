import { loginUser, registerUser, selectUser, setUser } from "../../../src/redux/reducers/userSlice"
import { RootState, store } from "../../../src/redux/store"

jest.mock('redux-persist', () => {
    const actualReduxPersist = jest.requireActual('redux-persist')
    return {
        ...actualReduxPersist,
        persistStore: jest.fn().mockReturnValue({})
    }
})

describe("userSlice", () => {
    test('should handle initial state', () => {
        const state = store.getState() as RootState
        expect(selectUser(state)).toBeNull()
    })

    test('should handle set user', () => {
        const user = { name: "Aazad", email: "aazad@gmail.com" }
        store.dispatch(setUser(user))
        const state = store.getState() as RootState
        expect(selectUser(state)).toEqual(user)
    })
})

describe("register user thunk", () => {
    test('should handle successfull registration', async () => {
        const user = { name: "Aazad", email: "aazad@gmail.com" }
        const action = await store.dispatch(registerUser(user))
        const state = store.getState() as RootState
        expect(action.type).toBe(registerUser.fulfilled.type)
        expect(selectUser(state)).toEqual(user) // in case object equality we have to use toEqual
    })

    test('should handle successfull failure', async () => {
        const action = await store.dispatch(registerUser({}))
        const state = store.getState() as RootState
        expect(action.type).toBe(registerUser.rejected.type)
        expect(selectUser(state)).toBeNull()
    })

    describe('loginUser thunk', () => {
        test('should handle successful login', async () => {
            const credentials = { email: 'jane@example.com', password: 'password123' };
            const action = await store.dispatch(loginUser(credentials));
            const state = store.getState() as RootState;

            expect(action.type).toBe(loginUser.fulfilled.type);
            expect(selectUser(state)).toEqual(credentials);
        });



        test('should handle failed login', async () => {
            const action = await store.dispatch(loginUser({})); // Invalid credentials to trigger failure
            const state = store.getState() as RootState;

            expect(action.type).toBe(loginUser.rejected.type);
            expect(selectUser(state)).toBeNull();
        });

    });
})