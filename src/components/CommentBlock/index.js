import React from "react";
import "./styles.css"

const CommentBlock = ({person, date, text}) => {
    return <div className="feedbacks_comment">
        <div className="comment_info">
            <div className="info_person">
                {person}
            </div>
            <div className="info_date">
                {date}
            </div>
        </div>
        <div className="comment_description callout">{text}</div>
    </div>
}

export {CommentBlock}