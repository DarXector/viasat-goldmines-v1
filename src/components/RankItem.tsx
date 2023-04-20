import {UserRanking} from "../stores/rankingStore";
import stopWatchIcon from '../assets/images/stopwatch.svg';
import hexagonCheckmark from '../assets/images/hexagon_check.svg';
import bookmarkGold from '../assets/images/bookmark_gold.svg';
import bookmarkSilver from '../assets/images/bookmark_silver.svg';
import bookmarkBronze from '../assets/images/bookmark_bronze.svg';
import './RankItem.css';

export function RankItem({user, isCurrentUser}: { user: UserRanking, isCurrentUser?: boolean }) {
    return (
        <div className={`rank-item d-flex flex-column ${isCurrentUser ? 'current-user' : ''}`}
             style={{borderColor: user.rank === 1 ? '#CA9431' : (user.rank === 2 ? '#808080' : (user.rank === 3 ? '#A26723' : (isCurrentUser ? '#A51B17' : '')))}}>
            <div className='user-info d-flex flex-row'>
                <div className="rank">{user.rank}.</div>
                <div className="username">{user.username}</div>
            </div>
            <div className="score d-flex flex-row justify-content-evenly">
                <div className='d-flex flex-row align-items-center'>
                    <img src={hexagonCheckmark} alt='check'></img>
                    <div className="score-value">{user.correctAnswers}</div>
                    <div className="score-label">Correct Answers</div>
                </div>
                <span>|</span>
                <div className='d-flex flex-row align-items-center'>
                    <img src={stopWatchIcon} alt='stopwatch'></img>
                    <div className="time-value">{user.totalTime}</div>
                    <div className="time-label">Total Time</div>
                </div>
            </div>
            <div className="badge">
                {user.rank <= 3 ? <img
                    src={user.rank === 1 ? bookmarkGold : (user.rank === 2 ? bookmarkSilver : (user.rank === 3 ? bookmarkBronze : ''))}
                    alt='badge'></img> : (isCurrentUser ? <div style={{color: '#A51B17', fontSize: '16pt', marginTop: '18px'}}>YOU</div> : '')}
            </div>
        </div>
    );
}
