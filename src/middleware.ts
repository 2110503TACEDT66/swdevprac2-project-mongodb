export { default } from 'next-auth/middleware'

export const config = {
    matcher:["/reserve","/user","/reservations"],
};