export default function user(user = null, action) {
    if (action.type == 'LOGIN_AS_JESSE') {
        return {name:'Jesse'};
    }
    
    return user;
}