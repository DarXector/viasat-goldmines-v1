import {UserRanking} from "../stores/rankingStore";
import stopWatchIcon from '../assets/images/stopwatch.svg';
import hexagonCheckmark from '../assets/images/hexagon_check.svg';
import bookmarkGold from '../assets/images/bookmark_gold.svg';
import bookmarkSilver from '../assets/images/bookmark_silver.svg';
import bookmarkBronze from '../assets/images/bookmark_bronze.svg';
import './RankItem.css';
import {useTranslation} from "react-i18next";

export function RankItem({user, isCurrentUser}: { user: UserRanking, isCurrentUser?: boolean }) {
    const {t, i18n} = useTranslation();

    return (
        <div className={`rank-item d-flex flex-column ${isCurrentUser ? 'current-user' : ''}`}
             style={{borderColor: user.id === 1 ? '#CA9431' : (user.id === 2 ? '#808080' : (user.id === 3 ? '#A26723' : (isCurrentUser ? '#A51B17' : '')))}}>
            <div className='user-info d-flex flex-row'>
                <div className="rank">{user.id}.</div>
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
                {user.id <= 3 ? <img
                    src={user.id === 1 ? bookmarkGold : (user.id === 2 ? bookmarkSilver : (user.id === 3 ? bookmarkBronze : ''))}
                    alt='badge'></img> : (isCurrentUser ? <div style={{color: '#A51B17', fontSize: '16pt', marginTop: '18px'}}>{t('you')}</div> : '')}
            </div>
        </div>
    );
}
