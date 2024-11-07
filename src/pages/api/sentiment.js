import { LanguageServiceClient } from "@google-cloud/language";

const client = new LanguageServiceClient();

export default async function handleClientScriptLoad(req, res) {
    if (req.method === 'POST') {
        const {transcriptionText} = req.body;

        const document = {
            content: transcriptionText,
            type: 'PLAIN_TEXT',
        };

    try {
        const [result] = await client.analyzeSentiment({document});
        const sentiment = result.documentSentiment;

        res.status(200).json({
            sentimentScore: sentiment.score,
            sentimentMagnitude: sentiment.magnitude,
        });
    } catch (error) {
        console.error('Error anaylsing sentiment:', error);
        res.status(500).json({error: 'Sentiment analysis failed'});
    }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}