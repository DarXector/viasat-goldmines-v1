import {UserRanking} from "../stores/rankingStore";
import stopWatchIcon from '../assets/images/stopwatch.svg';
import hexagonCheckmark from '../assets/images/hexagon_check.svg';
import bookmarkGold from '../assets/images/bookmark_gold.svg';
import bookmarkSilver from '../assets/images/bookmark_silver.svg';
import bookmarkBronze from '../assets/images/bookmark_bronze.svg';
import './RankItem.css';
import {useTranslation} from "react-i18next";

export function RankItem({user, isCurrentUser, rank}: { user: UserRanking, rank?:number, isCurrentUser?: boolean }) {
    const {t, i18n} = useTranslation();
    const currentRank = user.rank || rank || 0;

    return (
        <div className={`rank-item d-flex flex-column ${isCurrentUser ? 'current-user' : ''}`}
             style={{borderColor: currentRank === 1 ? '#CA9431' : (currentRank === 2 ? '#808080' : (currentRank === 3 ? '#A26723' : (isCurrentUser ? '#A51B17' : '')))}}>
            <div className='user-info d-flex flex-row'>
                <div className="rank">{currentRank}.</div>
                <div className="username">{user.name}</div>
            </div>
            <div className="score d-flex flex-row justify-content-evenly">
                <div className='d-flex flex-row align-items-center'>
                    <img src={hexagonCheckmark} alt='check'></img>
                    <div className="score-value">{user.correct_answers}</div>
                    <div className="score-label">{t('correct_answers')}</div>
                </div>
                <span>|</span>
                <div className='d-flex flex-row align-items-center'>
                    <img src={stopWatchIcon} alt='stopwatch'></img>
                    <div className="time-value">{user.total_time}</div>
                    <div className="time-label">{t('total_time')}</div>
                </div>
            </div>
            <div className="badge">
                {isCurrentUser ? <div style={{color: '#A51B17', fontSize: '16pt', marginTop: '18px'}}>{t('you')}</div> : (currentRank <= 3 ? <img
                    src={currentRank === 1 ? bookmarkGold : (currentRank === 2 ? bookmarkSilver : (currentRank === 3 ? bookmarkBronze : ''))}
                    alt='badge'></img> : '')}
            </div>
        </div>
    );
}
