import './ResourcesList.scss';

const blurbs = [
    {
        text: "Economic Benefits of AI",
        url: "https://news.microsoft.com/en-ca/2024/06/04/new-report-highlights-how-generative-ai-can-transform-canadas-future-with-a-potential-to-add-187b-to-the-canadian-economy-by-2030/"
    },
    {
        text: "AI's role in supporting business",
        url: "https://news.microsoft.com/en-ca/2024/05/10/the-year-of-ai-adoption-ais-role-in-advancing-canadian-businesses/"
    },
    {
        text: "Microsoft's Red Team keeping AI safe",
        url: "https://news.microsoft.com/source/features/ai/red-teams-think-like-hackers-to-help-keep-ai-safe/"
    },
    {
        text: "Measuring AI's performance",
        url: "https://news.microsoft.com/source/features/ai/measurement-is-the-key-to-helping-keep-ai-on-track/"
    },
    {
        text: "Microsoft's AI For Good lab",
        url: "https://www.microsoft.com/en-us/research/group/ai-for-good-research-lab/"
    },
    {
        text: "2024 Year in Review for AI research",
        url: "https://www.microsoft.com/en-us/research/story/microsoft-research-2024-a-year-in-review/"
    }
];

function ResourcesList() {

    const firstGroup = blurbs.slice(0, 3);
    const secondGroup = blurbs.slice(3, 6);

    return (
        <div className="resources">
            <h1 className="resources-title">Additional resources to explore</h1>
            <div className="resources-container">
                    {firstGroup.map((blurb, index) => (
                        <div key={index} className="resource-blurb">
                            <p>
                                {blurb.text}:{" "}
                                <a href={blurb.url} target="_blank">
                                    Learn More
                                </a>
                            </p>
                        </div>
                    ))}

                    {secondGroup.map((blurb, index) => (
                        <div key={index} className="resource-blurb">
                            <p>
                                {blurb.text}:{" "}
                                <a href={blurb.url} target="_blank">
                                    Learn More
                                </a>
                            </p>
                        </div>
                    ))}
            </div>
            <button className='secondary_button'>
                Ask your questions
            </button>
        </div>
    );
}

export default ResourcesList;
