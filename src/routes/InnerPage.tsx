import {PageTitle} from "../components/PageTitle";

type PageProps = {
    title: string;
    children: any;
    scrollable?: boolean
}

export function InnerPage({title, scrollable, children}: PageProps) {
    return (
        <div className={`inner-page ${scrollable? 'scrollable' : ''}`}>
            <PageTitle title={title} />
            {children}
        </div>
    );
};
