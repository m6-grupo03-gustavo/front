import { StyleContainerUserInitials } from "./style";

interface IUserInitialsProps{
    userName: string
    userId: number
}

enum Color {
    Green = 0,
    Pink = 1,
    Purple = 2,
    Red = 3,
    Green2 = 4,
    Pink2 = 5
}

export const UserInitials = ({userName, userId} :IUserInitialsProps) =>{
    const colorByUserId : Color = Number(userId) % 6
    const initials = userName.substring(0, 2)

    return(
        <StyleContainerUserInitials colorByUserId={colorByUserId}>
            <span className="initials">{initials}</span>
        </StyleContainerUserInitials>
    )
}