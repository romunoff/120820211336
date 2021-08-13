import React, {useState} from "react";
import comments from "../../comments.json"
import profilePhoto from "../../profilePhoto.png"
import LikeIcon from "../../statics/icons/like.svg"
import CommentIcon from "../../statics/icons/comment.svg"
import {CommentBlock} from "../../components/CommentBlock";
import "./styles.css"

const TestPage = () => {
    const [list, setList] = useState(comments)
    const [textAreaValue, setTextAreaValue] = useState("")

    document.onkeyup = (e) => {
        if (e.ctrlKey && e.keyCode === 13) {
            addComment()
        }
    }

    const handleChange = (e) => {
        setTextAreaValue(e.currentTarget.value)
    }

    const addComment = () => {
        if (textAreaValue.trim()) {
            const newList = [...list, {
                "person": "Никита Романов",
                "date": "13 августа 2021",
                "text": textAreaValue
            }]
            setList(newList)
            setTextAreaValue("")
        }
    }

    return (
        <div className="container">
            <div className="main">
                <div className="header">
                    <div className="header_photo">
                        <img className="header_photo__img" src={profilePhoto} alt="profilePhoto"/>
                    </div>
                    <div className="header_title">
                        <div className="header_title__heading">Вероника Ростова</div>
                        <div className="header_title__career">Менеджер по продажам</div>
                        <div className="header_title__description">
                            <div>
                                Подберу для вас самые лучшие предложения. Мои услуги абсолютно бесплатны
                            </div>
                        </div>
                        <div className="header_title__services">
                            <div className="services__heading">Услуг</div>
                            <hr/>
                            <div className="services_diagram">
                                <div className="diagram__element element__green">
                                    <span>Ручное бронирование</span>
                                </div>
                                <div className="diagram_counter">11</div>
                            </div>
                            <div className="services_diagram">
                                <div className="diagram__element element__blue1">
                                    <span>Пакетные туры</span>
                                </div>
                                <div className="diagram_counter">3</div>
                            </div>
                            <div className="services_diagram">
                                <div className="diagram__element element__blue2">
                                    <span>Отели</span>
                                </div>
                                <div className="diagram_counter">1</div>
                            </div>
                            <hr/>
                            <div className="services__footer">
                                <span>Всего</span>
                                <span>15</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feedbacks">
                    <div className="feedbacks_info">
                        <div className="feedbacks_info__left">
                            <span>Последние отзывы</span>
                            <a href="/">Все отзывы</a>
                        </div>
                        <div className="feedbacks_info__right">
                            <div>
                                <img src={LikeIcon} alt="likeIcon"/>
                                <span>131</span>
                            </div>
                            <div>
                                <img src={CommentIcon} alt="commentIcon"/>
                                <span>14</span>
                            </div>
                        </div>
                    </div>
                    {list.map((item, index) => <CommentBlock key={index} person={item.person} date={item.date}
                                                             text={item.text}/>)}
                </div>
            </div>
            <div className="footer">
                <textarea className="footer__textarea" onChange={handleChange} value={textAreaValue}/>
                <button className="footer__button" onClick={addComment}>Написать консультанту</button>
            </div>
        </div>
    )
}

export {TestPage}