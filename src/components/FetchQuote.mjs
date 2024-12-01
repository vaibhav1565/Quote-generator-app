const url = "http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";

export async function FetchQuote() {
    const randomKey = Math.floor(Math.random() * 1000000);
    const fullUrl = `${url}&key=${randomKey}`;

    const response = await fetch(fullUrl);
    const text = await response.text();

    const sanitizedText = text
        .replace(/\\'/g, "'")
        .replace(/\\"/g, '"');

    try {
        const json = JSON.parse(sanitizedText);
        return json;
    } catch (error) {
        const text = JSON.text()
        console.log(text);
        console.error("Failed to parse JSON:", error);
        return { quoteText: "Error fetching quote", quoteAuthor: "Unknown" };
    }
}