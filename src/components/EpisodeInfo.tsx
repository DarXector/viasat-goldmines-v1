import './EpisodeInfo.css';

type EpisodeInfoProps = {
    title: string;
    day: string;
    time: string;
}
export function EpisodeInfo ({title, day, time}: EpisodeInfoProps) {
    return (
        <div className='episode-info d-flex flex-row align-items-center justify-content-between'>
            <div className='episode-info-title'>{title}</div>
            <div className='episode-info-day'>{day}</div>
            <div className='episode-info-time'>{time}</div>
        </div>
    );
}
