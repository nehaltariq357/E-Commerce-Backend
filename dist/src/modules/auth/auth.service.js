import bcrypt from "bcrypt";
import { generateAccessToken, generateRefreshToken, verifyRefreshToken, } from "../../utlis/jwt.js";
import { createUser, findUserByEmail, findUserById } from "./auth.repository.js";
export const registerUser = async (data) => {
    //  check if user already exists
    const existingUser = await findUserByEmail(data.email);
    if (existingUser) {
        throw new Error("User already exists");
    }
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await createUser({
        ...data,
        password: hashedPassword,
    });
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
    };
};
export const loginUser = async (data) => {
    const user = await findUserByEmail(data.email);
    if (!user) {
        throw new Error("No user found");
    }
    const isPasswordValid = await bcrypt.compare(data.password, user.password);
    if (!isPasswordValid) {
        throw new Error("Invalid email or password");
    }
    const accessToken = generateAccessToken({
        userId: user.id,
        role: user.role,
    });
    const refreshToken = generateRefreshToken({
        userId: user.id,
        role: user.role,
    });
    return {
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
        },
        accessToken,
        refreshToken,
    };
};
export const refreshAccessToken = async (refreshToken) => {
    try {
        // verfiy refresh token
        const decoded = verifyRefreshToken(refreshToken);
        // generate new access token
        const accessToken = generateAccessToken({
            userId: decoded.userId,
            role: decoded.role,
        });
        return accessToken;
    }
    catch (error) {
        throw new Error("Invalid or expired refresh token");
    }
};
export const getCurrentUser = async (userId) => {
    const user = await findUserById(userId);
    if (!user) {
        throw new Error("User not found");
    }
    return user;
};
//# sourceMappingURL=auth.service.js.map