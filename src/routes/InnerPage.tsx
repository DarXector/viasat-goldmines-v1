import {PageTitle} from "../components/PageTitle";

type PageProps = {
    title: string;
    children: any;
}

export function InnerPage({title, children}: PageProps) {
    return (
        <div className='inner-page'>
            <PageTitle title={title} />
            {children}
        </div>
    );
};
