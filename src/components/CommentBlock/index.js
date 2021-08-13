import React from "react";
import "./styles.css"

const CommentBlock = () => {
    return <div className="feedbacks_comment">
        <div className="comment_info">
            <div className="info_person">
                Самуил
            </div>
            <div className="info_date">
                13 октября 2011
            </div>
        </div>
        <div className="comment_description callout">Привет, Верунь! ниче себе ты крутая. фотка класс!!!!</div>
    </div>
}

export {CommentBlock}