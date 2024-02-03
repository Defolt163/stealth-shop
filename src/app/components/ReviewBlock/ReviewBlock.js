'use client'
import Link from "next/link";
import './ReviewBlock.sass'
import Image from "next/image";
import editPen from '/public/static/img/ico/edit-3.svg'
import ratingStar from '/public/static/img/ico/ratingstar.svg'
import feedbackDB from '/src/app/assets/db_feedback.json'
import { useEffect, useState } from "react";

export default function ReviewBlock(){
    const [reviewCount, setReviewCount] = useState([])
    const [averageRating, setAverageRating] = useState([])
    const [filterStatus, setFilterStatus] = useState('all')
    function GetArray() {
        let filteredFeedbacks = [];
        if (filterStatus === 'all') {
          filteredFeedbacks = feedbackDB;
        } else {
          filteredFeedbacks = feedbackDB.filter((feedback) => feedback.type === parseInt(filterStatus));
        }
      
        const reviewCount = filteredFeedbacks.length;
        const totalRating = filteredFeedbacks.reduce((sum, feedback) => sum + feedback.rate, 0);
        const average = reviewCount > 0 ? Math.round((totalRating / reviewCount) * 10) / 10 : 0;
        
        setReviewCount(reviewCount);
        setAverageRating(average);
      }
    useEffect(()=>{
        GetArray()
    },[filterStatus])

    
    function openDropdown(menuName){
        setFilterStatus(menuName)
    }

    function FilterReviews(){
        return feedbackDB.filter((FeedbackItem) => FeedbackItem.type === filterStatus).map(FeedbackItem=>(
            <div key={FeedbackItem.id} className="FeedbackReviewItem">
                <div className="ProfileBlock">
                    <div className="ProfileProductRate">
                    {FeedbackItem.rate >= 5 && (
                        Array(5).fill().map((_, index) => (
                        <div key={index}><Image className="ProductCardRatingStar" src={ratingStar} /></div>
                        ))
                    )}
                    {FeedbackItem.rate >= 4 && FeedbackItem.rate < 5 && (
                        Array(4).fill().map((_, index) => (
                        <div key={index}><Image className="ProductCardRatingStar" src={ratingStar} /></div>
                        ))
                    )}
                    {FeedbackItem.rate >= 3 && FeedbackItem.rate < 4 && (
                        Array(3).fill().map((_, index) => (
                        <div key={index}><Image className="ProductCardRatingStar" src={ratingStar} /></div>
                        ))
                    )}
                    {FeedbackItem.rate >= 2 && FeedbackItem.rate < 3 && (
                        Array(2).fill().map((_, index) => (
                        <div key={index}><Image className="ProductCardRatingStar" src={ratingStar} /></div>
                        ))
                    )}
                    {FeedbackItem.rate >= 0 && FeedbackItem.rate < 2 && (
                        Array(1).fill().map((_, index) => (
                        <div key={index}><Image className="ProductCardRatingStar" src={ratingStar} /></div>
                        ))
                    )}
                    </div>
                    <div className="ProfileProductType">{FeedbackItem.type === 1 ? "Scope" : FeedbackItem.type === 2 ? "Scope + rifle": FeedbackItem.type === 3 ? "Binocular": ''}</div>
                    <div className="ProfileName">{FeedbackItem.name}</div>
                    <div className="ProfileReviewDate">{FeedbackItem.date}</div>
                </div>
                <div className="FeedbackText">
                    {FeedbackItem.text}
                </div>
            </div>
            ))
    }

    return(
        <div className="ReviewBlock">
            <div className="container">
                <div className="SectionHeader">
                    <div className="PageSubHeader">Обзоры</div>
                    <Link className="PageSubHeaderLink" href='/'>Узнайте о нас больше</Link>
                </div>
                <div className="ReviewFilterBlock">
                    <div className="ReviewFilterHeader">Фильтр:</div>
                    <div 
                        className={`ReviewFilterItem ${filterStatus === 'all' ? 'active' : ''}`}
                        onClick={()=> {openDropdown('all'); GetArray()}}>
                            Все
                    </div>
                    <div 
                        className={`ReviewFilterItem ${filterStatus === 1 ? 'active' : ''}`}
                        onClick={()=> {openDropdown(1); GetArray()}}>
                            Прицелы
                    </div>
                    <div 
                        className={`ReviewFilterItem ${filterStatus === 2 ? 'active' : ''}`}
                        onClick={()=> {openDropdown(2); GetArray()}}>
                            Прицел + Винтовку
                    </div>
                    <div 
                        className={`ReviewFilterItem ${filterStatus === 3 ? 'active' : ''}`}
                        onClick={()=> {openDropdown(3); GetArray()}}>
                            Бинокли
                    </div>
                </div>
                <div className="FeedbackBlock">
                    <div className="FeedbackCountBlock">
                        <div className="FeedbackCountBlockHeader">Отзывов: {reviewCount}</div>
                        <div className="FeedbackCountBlockRate">{averageRating}</div>
                        <div className="FeedbackCountBlockWrite">Написать обзор <Image src={editPen} alt="Pen"/></div>
                    </div>
                    <div className="FeedbackReviewBlock">
                        { filterStatus === 'all' ? 
                            feedbackDB.map(FeedbackItem=>(
                            <div key={FeedbackItem.id} className="FeedbackReviewItem">
                                <div className="ProfileBlock">
                                    <div className="ProfileProductRate">
                                    {FeedbackItem.rate >= 5 && (
                                        Array(5).fill().map((_, index) => (
                                        <div key={index}><Image className="ProductCardRatingStar" src={ratingStar} /></div>
                                        ))
                                    )}
                                    {FeedbackItem.rate >= 4 && FeedbackItem.rate < 5 && (
                                        Array(4).fill().map((_, index) => (
                                        <div key={index}><Image className="ProductCardRatingStar" src={ratingStar} /></div>
                                        ))
                                    )}
                                    {FeedbackItem.rate >= 3 && FeedbackItem.rate < 4 && (
                                        Array(3).fill().map((_, index) => (
                                        <div key={index}><Image className="ProductCardRatingStar" src={ratingStar} /></div>
                                        ))
                                    )}
                                    {FeedbackItem.rate >= 2 && FeedbackItem.rate < 3 && (
                                        Array(2).fill().map((_, index) => (
                                        <div key={index}><Image className="ProductCardRatingStar" src={ratingStar} /></div>
                                        ))
                                    )}
                                    {FeedbackItem.rate >= 0 && FeedbackItem.rate < 2 && (
                                        Array(1).fill().map((_, index) => (
                                        <div key={index}><Image className="ProductCardRatingStar" src={ratingStar} /></div>
                                        ))
                                    )}
                                    </div>
                                    <div className="ProfileProductType">{FeedbackItem.type === 1 ? "Scope" : FeedbackItem.type === 2 ? "Scope + rifle": FeedbackItem.type === 3 ? "Binocular": ''}</div>
                                    <div className="ProfileName">{FeedbackItem.name}</div>
                                    <div className="ProfileReviewDate">{FeedbackItem.date}</div>
                                </div>
                                <div className="FeedbackText">
                                    {FeedbackItem.text}
                                </div>
                            </div>
                            )): 
                            filterStatus === 1 ? FilterReviews(1):
                            filterStatus === 2 ? FilterReviews(2):
                            filterStatus === 3 && FilterReviews(3)
                        }
{/*                         {feedbackDB.map(FeedbackItem=>(
                            <div key={FeedbackItem.id} className="FeedbackReviewItem">
                                <div className="ProfileBlock">
                                    <div className="ProfileProductRate">
                                    {FeedbackItem.rate >= 5 && (
                                        Array(5).fill().map((_, index) => (
                                        <div key={index}><Image className="ProductCardRatingStar" src={ratingStar} /></div>
                                        ))
                                    )}
                                    {FeedbackItem.rate >= 4 && FeedbackItem.rate < 5 && (
                                        Array(4).fill().map((_, index) => (
                                        <div key={index}><Image className="ProductCardRatingStar" src={ratingStar} /></div>
                                        ))
                                    )}
                                    {FeedbackItem.rate >= 3 && FeedbackItem.rate < 4 && (
                                        Array(3).fill().map((_, index) => (
                                        <div key={index}><Image className="ProductCardRatingStar" src={ratingStar} /></div>
                                        ))
                                    )}
                                    {FeedbackItem.rate >= 2 && FeedbackItem.rate < 3 && (
                                        Array(2).fill().map((_, index) => (
                                        <div key={index}><Image className="ProductCardRatingStar" src={ratingStar} /></div>
                                        ))
                                    )}
                                    {FeedbackItem.rate >= 0 && FeedbackItem.rate < 2 && (
                                        Array(1).fill().map((_, index) => (
                                        <div key={index}><Image className="ProductCardRatingStar" src={ratingStar} /></div>
                                        ))
                                    )}
                                    </div>
                                    <div className="ProfileProductType">{FeedbackItem.type === 1 ? "Scope" : FeedbackItem.type === 2 ? "Scope + rifle": FeedbackItem.type === 3 ? "Binocular": ''}</div>
                                    <div className="ProfileName">{FeedbackItem.name}</div>
                                    <div className="ProfileReviewDate">{FeedbackItem.date}</div>
                                </div>
                                <div className="FeedbackText">
                                    {FeedbackItem.text}
                                </div>
                            </div>
                        ))} */}
                    </div>
                </div>
            </div>
        </div>
    )
}