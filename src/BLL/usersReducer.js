const onFollow = 'on_follow';
const onNotFollow = 'on_notFollow';
const onSetUsers = 'on_SetUsers';

let initialUsersState = {users:[]
    // users: [
    //     {
    //         id: 0,
    //         avaUsers: 'https://i.pinimg.com/236x/11/82/ba/1182baa6a3fa464487fca0f7f1979e0a.jpg',
    //         followed: true,
    //         fullName: 'Bryndzak Roman',
    //         status: 'React-Redux, it\'s good.',
    //         userCity: 'Khmelnytskyi',
    //         userCountry: 'Ukraine'
    //     },
    //     {
    //         id: 1, avaUsers: 'https://i.pinimg.com/236x/11/82/ba/1182baa6a3fa464487fca0f7f1979e0a.jpg',
    //         followed: false,
    //         fullName: 'Боднрук Вася',
    //         status: 'Life, it\'s good.',
    //         userCity: 'Gvizdets',
    //         userCountry: 'Ukraine'
    //     },
    //     {
    //         id: 2, avaUsers: 'https://i.pinimg.com/236x/11/82/ba/1182baa6a3fa464487fca0f7f1979e0a.jpg',
    //         followed: false,
    //         fullName: 'Bryndzak Rostyslav',
    //         status: 'La-la-la-la.',
    //         userCity: 'Derazhnya',
    //         userCountry: 'Ukraine'
    //     },
    //     {
    //         id: 3, avaUsers: 'https://i.pinimg.com/236x/11/82/ba/1182baa6a3fa464487fca0f7f1979e0a.jpg',
    //         followed: true,
    //         fullName: 'Bryndzak Mike',
    //         status: 'I study React-Redux.',
    //         userCity: 'L\'viv',
    //         userCountry: 'Ukraine'
    //     },
    // ]
};

const usersReducer = (state = initialUsersState, action) => {
    switch (action.type) {
        case onFollow:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId)
                        return {...u, followed: false};
                    return u
                })
            };
        case onNotFollow:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId)
                        return {...u, followed: true};
                    return u
                })
            };
        case onSetUsers:
            return {
                ...state,
                users: [...state.users, ...action.users]
            };
        default:
                return state;
    }
};

export const followAC = (userId) => ({type: onFollow, userId});
export const notFollowAC = (userId) => ({type: onNotFollow, userId});
export const setUsersAC = (users) => ({type: onSetUsers, users});

export default usersReducer;