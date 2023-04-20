import {useRanking} from "../stores/rankingStore";
import {useEffect} from "react";
import {InnerPage} from "./InnerPage";
import {Spinner} from "reactstrap";

import './RankingPage.css';
import {RankItem} from "../components/RankItem";
export function RankingPage() {
    const ranking = useRanking(state => state.ranking);
    const userRanking = useRanking(state => state.userRanking);
    const loading = useRanking(state => state.loading);
    const getRanking = useRanking(state => state.getRanking);

    useEffect(() => {
        getRanking();
    }, [ranking, getRanking]);

    return (
        <InnerPage title={'Ranking'}>
            <div className='page ranking-page'>
                {loading ? <Spinner color='light' /> :
                <div className='list scrollable'>
                    { ranking.map(item => <RankItem user={item} />) }
                </div>}

                {userRanking ? <div className='fixed-rank d-flex flex-column align-items-center'>
                    <RankItem user={userRanking} isCurrentUser={true} />
                </div> : ''}
            </div>
        </InnerPage>
    );
}
