document.addEventListener("DOMContentLoaded", () => {
    const quoteElement = document.getElementById("text");
    const authorElement = document.getElementById("author");
    const newQuoteButton = document.getElementById("new-quote");
    const tweetQuoteLink = document.getElementById("tweet-quote");

    const fetchQuote = async () => {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        setQuote(data.content);
        setAuthor(data.author);
    };

    const setQuote = (quote) => {
        quoteElement.textContent = quote;
    };

    const setAuthor = (author) => {
        authorElement.textContent = "- " + author;
    };

    const handleClick = () => {
        fetchQuote();
    };

    const tweetQuote = () => {
        const quote = quoteElement.textContent;
        const author = authorElement.textContent.slice(2);
        const tweetURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            `"${quote}" - ${author}`
        )}`;
        window.open(tweetURL, "_blank");
    };

    newQuoteButton.addEventListener("click", handleClick);
    tweetQuoteLink.addEventListener("click", tweetQuote);

    fetchQuote();
});
