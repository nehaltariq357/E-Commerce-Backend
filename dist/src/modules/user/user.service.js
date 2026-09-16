import { findUserById } from "../user/user.repository.js";
export const getUserProfile = async (userId) => {
    const user = await findUserById(userId);
    if (!user) {
        throw new Error("User not found");
    }
    return user;
};
//# sourceMappingURL=user.service.js.map