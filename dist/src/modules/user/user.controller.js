import { getUserProfile } from "./user.service.js";
export const getMe = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "Authentication required",
            });
        }
        const user = await getUserProfile(req.user.userId);
        return res.status(200).json({
            success: true,
            message: "User profile fetched successfully",
            data: user,
        });
    }
    catch (error) {
        console.error(error);
        return res.status(404).json({
            success: false,
            message: error instanceof Error ? error.message : "User not found",
        });
    }
};
//# sourceMappingURL=user.controller.js.map