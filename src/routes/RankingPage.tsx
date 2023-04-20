import {useRanking, UserRanking} from "../stores/rankingStore";
import {useEffect, useRef} from "react";
import {InnerPage} from "./InnerPage";
import {ViewportList} from "react-viewport-list";
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
    }, []);

    const ref = useRef<HTMLDivElement | null>(
        null,
    );

    return (
        <InnerPage title={'Ranking'}>
            <div className='page ranking-page'>
                {loading ? <Spinner color='light' /> :
                <ViewportList
                    viewportRef={ref}
                    items={ranking}
                >
                    {(item: UserRanking) => (
                        <RankItem user={item} />
                    )}
                </ViewportList>}
            </div>
        </InnerPage>
    );
}
