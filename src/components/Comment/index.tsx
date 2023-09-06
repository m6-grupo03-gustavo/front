import { IComment } from "../../pages/ProductPage"
import { UserInitials } from "../UserInitials"


interface ICommentProps {
    comment: IComment
}

export const Comment = ({comment}: ICommentProps) => {
    return (
        <li>
            <div className="comment_header">
                <UserInitials userId={comment.userid} userName={comment.username}/>
                <h2>{comment.username}</h2>
                <div className="circle"></div>
                <span>{comment.register_date}</span>
            </div>
            <p>{comment.comment}</p>
        </li>
    )
}