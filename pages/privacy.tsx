import markdownToHtml from "../utils/markdownToHtml";
import { getSingleFile } from "../utils/md"
import BigDumbMarkdown from "../components/BigDumbMarkdown";

export default function Terms({ content }) {
    return (
        <BigDumbMarkdown content={content} />
    )
}

export async function getStaticProps() {

    const md = getSingleFile("docs/privacy.md");

    const content = await markdownToHtml(md || '')

    return {
        props: {
            content
        },
    }
}